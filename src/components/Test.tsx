import { useState } from "react";
import axios from 'axios';

const Test = () => {

    const [input, setInput] = useState<string>('')
    const [responseData, setResponseData] = useState<any>(null);

    const handleInput = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        try {
            // const inputValue: string = input;

            const response = await axios.get('https://shazam.p.rapidapi.com/search', {
                params: {
                    term: input,
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
        <div className="pt-16">
            <div>
                <form onSubmit={handleInput}>
                    <input 
                        type="text" 
                        placeholder="Search for a music" 
                        value={input}  
                        onChange={(e) => setInput(e.target.value)}
                        className="text-gray-600"/>
                    <button type="submit">🔎</button>
                </form>
            </div>
            <div>
            {responseData && (
                    <div>
                        <p>Voici les résultats pour "{input}" :</p>
                        {responseData.artists && responseData.artists.hits.length > 0 && (
                            <p>{responseData.artists.hits[0].artist.name}</p>
                        )}
                        {responseData.tracks && responseData.tracks.hits.length > 0 && (
                            <p>{responseData.tracks.hits[0].track.hub.actions[1].uri}</p>
                        )}
                    </div>
                )} </div>
        </div>
    );
};

export default Test;