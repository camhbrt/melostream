import { useState } from "react";
import axios from 'axios';
import Card from "./Card";


const Home = () => {

    const [inputValue, setInputValue] = useState<string>('') //string récupérée dans l'input
    const [responseData, setResponseData] = useState<any>(null); //datas issues de l'API

    const handleInput = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.get('https://shazam.p.rapidapi.com/search', {
               params: {
                term: inputValue,
                locale: 'en-US',
                offset: '0',
                limit: '5'
               },
               headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_APIKEY,
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
               }
            });
            const responseData = response.data;
            console.log(responseData);
            setResponseData(responseData);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className=" z-auto">
            <div>
                <form onSubmit={handleInput}>
                    <button type="submit" className="">🔎</button>
                    <input 
                        type="text" 
                        placeholder="Search for a music" 
                        value={inputValue}  
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent "/>
                </form>
            </div>
            <div>
                {responseData && (
                    <div>
                        <p>Voici les résultats pour "{inputValue}" :</p>
                        {responseData.tracks.hits.map((song) => (
                            <Card data = {song}/>
                        ))}
                    </div>
                )} 
            </div>
            
        </div>
    );
};

export default Home;