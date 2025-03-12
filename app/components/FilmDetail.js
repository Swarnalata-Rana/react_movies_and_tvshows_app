"use client";
import React, { useContext } from "react";
import { FilmContext } from "../context/FilmContext";

const FilmDetails = ({ onCloseD, userRating }) => {
    const { selectedFilm } = useContext(FilmContext);

    if (selectedFilm) {
        console.log(selectedFilm);
    }
    else {
        return null;
    }

    return (
        <>
            <div className="details-main">
                <div className="details-bg">
                    <div className="">
                        <img className="details-img" src={selectedFilm.Poster} />
                    </div>
                    <div className="details-content">
                        <p className="details-title"><strong>Title : </strong> {selectedFilm.Title}</p>
                        <p className="details-pTag"><strong>Year : </strong> {selectedFilm.Year}</p>
                        <p className="details-pTag"><strong>Released : </strong> {selectedFilm.Released}</p>
                        <p className="details-pTag"><strong>Genre : </strong> {selectedFilm.Genre}</p>
                        <p className="details-pTag"><strong>Country : </strong> {selectedFilm.Country}</p>
                        <p className="details-pTag"><strong>Language : </strong> {selectedFilm.Language}</p>
                        <p className="details-plot"><strong>Plot : </strong> {selectedFilm.Plot}</p>
                        <p className="details-pTag"><strong>IMDB Rating : </strong> {selectedFilm.imdbRating}</p>
                        <p className="details-pTag"><strong>User Rating : </strong> {userRating} / 5</p>
                        <button className="close-btnD" onClick={onCloseD}>Close</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default FilmDetails;
