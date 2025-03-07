"use client";
import React, { useContext } from "react";
import { FilmContext } from "../context/FilmContext";

const FilmDetails = ({ onClose }) => {
    const { selectedFilm } = useContext(FilmContext);

    if (!selectedFilm) {
        console.log("No selected film available");
        return null;    
    }
    
    return (
        <>
            <div className="details-main">
                <div className="details-content">Details
                    <h2 className="details-title">Title: {selectedFilm.Title}</h2>
                    <img className="details-img" src={selectedFilm.Poster} width="200" />
                    <p className="details-pTag">Plot: {selectedFilm.Plot}</p>
                    <p className="details-pTag">Year: {selectedFilm.Year}</p>
                    <p className="details-pTag">IMDB Rating Details: {selectedFilm.imdbRating}</p>
                    <p className="details-pTag">User Rating Details:</p>
                    <button className="close-btn" onClick={onClose}>Close</button>

                </div>
            </div>
        </>
    );
};

export default FilmDetails;
