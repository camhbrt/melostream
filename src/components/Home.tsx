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
        <div className="relative">
            {/* Bannière supérieure sans arrière-plan */}
            <div className="top-0 z-50">
                <form onSubmit={handleInput} className="flex items-center justify-between p-2">
                    <button type="submit" className="text-xl">🔎</button>
                    <input 
                        type="text" 
                        placeholder="Search for a music" 
                        value={inputValue}  
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent outline-none  flex-grow ml-2"
                    />
                </form>
            </div>
            
            <div className="">
                {responseData && (
                    <div>
                        <p className="text-5xl py-4 font-extrabold">Voici les résultats pour "<span className="text-green-400">{inputValue}</span>" :</p>
                        {responseData.tracks.hits.map((song) => (
                            <Card data={song} key={song.track.key} />
                        ))}
                    </div>
                )} 
            </div>
        </div>
    );
};

export default Home;