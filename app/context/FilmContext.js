"use client";
import React,{createContext, useState} from "react";

export const FilmContext=createContext();

export const FilmProvider=({children})=>{
    const [films, setFilms]=useState([]);

    function fetchFilms(query) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=9ac3240b`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setFilms(data.Search);
                } else {
                    setFilms([]);
                }
            })
            .catch(error => console.error("Some Network Error:", error));
    }

    return (
        <FilmContext.Provider value={{ films, fetchFilms}}>
            {children}
        </FilmContext.Provider>
    );
};