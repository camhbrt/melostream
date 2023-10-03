import { useState } from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import Results from "./Results";

interface responseData{
    data: {
        tracks:{
            hits: [
                {
                    track: {
                        key: string,
                        title: string,
                        subtitle: string,
                        images: {
                            coverart: string
                        },
                        hub: {
                            actions: Array<{
                                uri: string,
                            }>
                                
                        }
                    }
                }
            ];
        }
    }
    query: string;

}

const Home = () => {

    const [query, setQuery] = useState(''); // État local pour stocker la valeur de l'input
    const [responseData, setResponseData] = useState<responseData>(); // Données issues de l'API


    const performSearch = async (query: string) => {
        try {
            const response = await axios.get('https://shazam.p.rapidapi.com/search', {
               params: {
                term: query,
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
            setQuery(query)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="">
            
            <SearchBar onSearch={performSearch}/>
            {responseData && (
                <Results 
                    data = {responseData}
                    query = {query}/>
            )}
        </div>
    );
};

export default Home;