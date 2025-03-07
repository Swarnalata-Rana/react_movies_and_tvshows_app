"use client"
import React, { useContext, useState } from "react";
import Rating from "./Rating";
import { FilmContext } from "../context/FilmContext";
import FilmDetails from "./FilmDetails";

const FilmCard = ({ film }) => {
    const { fetchFilmDetails } = useContext(FilmContext);
    const [showModal, setShowModal] = useState(false);

    const handleDetailClick = () => {
        fetchFilmDetails(film.imdbID);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="moviecard-main">
                <img src={film.Poster} width="150" />
                <div>
                    <p>{film.Title}</p>
                    <p>{film.Year}</p>
                </div>
                <div className="details-rating">
                    <button className="rating-btn"><Rating /></button>
                    <button className="detailing-btn" onClick={handleDetailClick}>Details</button>
                </div>
            </div>
            {showModal && <FilmDetails onClose={handleCloseModal} />}

        </>
    )
}

export default FilmCard;
