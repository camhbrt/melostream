import { useState } from "react";
import { BsSearch } from "react-icons/bs"

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {

    const [inputValue, setInputValue] = useState<string>('') //string récupérée dans l'input

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(inputValue)
    }

    return (
        <div className="fixed top-0 z-50 w-screen">
            <form onSubmit={handleSearch} className="flex items-center justify-between p-2">
                <span><BsSearch/></span>
                <input 
                    type="text" 
                    name="searchInput"
                    placeholder="Search for a music" 
                    value={inputValue}  
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-transparent outline-none  flex-grow ml-2"
                />
            </form>
        </div>
    );
};

export default SearchBar;