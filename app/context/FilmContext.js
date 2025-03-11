"use client";
import React, { createContext, useState } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

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
        // .catch(error => console.error("Some Network Error:", error));
    }

    function fetchFilmDetails(imdbID) {

        if (!imdbID) {
            console.log("ImbdID is not match");
        } else {
            setSelectedFilm(null);
        }

        fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=9ac3240b`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setSelectedFilm(data);
                }
            })
        // .catch(error => console.error("Some Network Error:", error));
    }

    return (
        <FilmContext.Provider value={{ films, fetchFilms, selectedFilm, fetchFilmDetails }}>
            {children}
        </FilmContext.Provider>
    );
};