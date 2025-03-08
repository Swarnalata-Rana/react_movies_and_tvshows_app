"use client";
import React, { useContext, useState } from 'react'
import { FilmContext } from '../context/FilmContext';

const Search = () => {
    const { fetchFilms } = useContext(FilmContext);

    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.length > 0) {
            fetchFilms(query);
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
                <button className="search-button" onClick={handleSearch} >Search</button>
            </div>
        </>
    )
}

export default Search;
