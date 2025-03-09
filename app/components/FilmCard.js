"use client"
import React, { useContext, useState } from "react";
import Rating from "./Rating";
import { FilmContext } from "../context/FilmContext";
import FilmDetail from "./FilmDetail";

const FilmCard = ({ film }) => {
    const { fetchFilmDetails } = useContext(FilmContext);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);

    // DetailModal
    const handleDetailClick = () => {
        fetchFilmDetails(film.imdbID);
        setShowDetailModal(true);
    };
    const handleCloseDetailModal = () => {
        setShowDetailModal(false);
    };

    // RatingModal
    const handleRatingClick = () => {
        setShowRatingModal(true)
    }

    const handleCloseRatingModal = () => {
        setShowRatingModal(false)
    }

    return (
        <>
            <div className="moviecard-main">
                <img src={film.Poster} width="150" />
                <div>
                    <p>{film.Title}</p>
                    <p>{film.Year}</p>
                </div>
                <div className='avg'>Avg:{ } /5</div>

                <div className="details-rating">
                    <button className="rating-btn" onClick={handleRatingClick}>Rating</button>
                    <button className="detailing-btn" onClick={handleDetailClick}>Details</button>
                </div>
            </div>
            {showDetailModal && <FilmDetail onCloseD={handleCloseDetailModal} />}
            {showRatingModal && <Rating onCloseR={handleCloseRatingModal} props={film} />}

        </>
    )
}
export default FilmCard;




