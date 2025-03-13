"use client";
import React, { createContext, useState } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    function fetchFilms(query) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=9ac3240b`)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                if (data.Response === "True") {
                    setFilms(data.Search);
                }
                else {
                    setFilms([])
                }
            })
            .catch(function (error) {
                console.error("Error fetching films:", error);
            });
    }

    function fetchFilmDetails(imdbID) {
        if (imdbID) {
            // console.log("Reset the priviuos details value");
            setSelectedFilm(null);
        }


        fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=9ac3240b`)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                if (data.Response === "True") {
                    setSelectedFilm(data);
                }
            })
            .catch(function (error) {
                console.error("Error fetching films details:", error);
            });
    }

    return (
        <FilmContext.Provider value={{ films, fetchFilms, selectedFilm, fetchFilmDetails }}>
            {children}
        </FilmContext.Provider>
    );
};