import { useState } from "react";
import { BsSearch } from "react-icons/bs"
import { TiDelete } from "react-icons/ti"

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {

    const [inputValue, setInputValue] = useState<string>('') //string récupérée dans l'input

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(inputValue)
    }

    const handleClick = () => {
        setInputValue("")
    }

    return (
        <div className="fixed top-0 z-50 w-screen flex p-2">
            <form onSubmit={handleSearch} className="flex">
                <span><BsSearch/></span>
                <input 
                    type="text" 
                    name="searchInput"
                    placeholder="Search for a music" 
                    value={inputValue}  
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-transparent outline-none   ml-2"
                />
            </form>
            { inputValue && (
                <button onClick={handleClick} className="text-xl"><TiDelete/></button>  
            )}
        </div>
    );
};

export default SearchBar;