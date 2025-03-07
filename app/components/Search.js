"use client";
import React, {useState}from 'react'

const Search = ({onSearch}) => {

    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.length > 0) {
            onSearch(query);
        } else {
            alert("Please enter a movie name!");
        }
    };

    return (
        <>
            <div className="search-main">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search movies & TV Shows"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button"onClick={handleSearch} >Search</button>
            </div>
        </>
    )
}

export default Search;
