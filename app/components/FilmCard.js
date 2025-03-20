"use client";
import React, { useContext, useEffect, useState } from "react";
import Rating from "./Rating";
import FilmDetail from "./FilmDetail";
import { FilmContext } from "../context/FilmContext";

function FilmCard({ film }) {
    const { fetchFilmDetails } = useContext(FilmContext);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [ratings, setRatings] = useState([]);
    const [avgRating, setAvgRating] = useState(0);


    function calculateAvgRating(ratingsArray) {
        let sum = 0;
        let i = 0;
        while (i < ratingsArray.length) {
            sum += ratingsArray[i];
            i++;
        }
        return ratingsArray.length > 0 ? (sum / ratingsArray.length).toFixed(1) : 0;
    }

    useEffect(() => {
        const ratingKey = `ratings-${film.imdbID}`;
        const storedRatings = JSON.parse(localStorage.getItem(ratingKey)) || [];

        setRatings(storedRatings);
        setAvgRating(storedRatings.length ? calculateAvgRating(storedRatings) : 0);
    }, [film.imdbID]);


    function handleNewRating(newRating) {
        const updatedRatings = [...ratings, newRating];
        setRatings(updatedRatings);

        let sum = 0;
        let i = 0;
        while (i < updatedRatings.length) {
            sum += updatedRatings[i];
            i++;
        }

        const newAvgRating = updatedRatings.length ? (sum / updatedRatings.length).toFixed(1) : 0;
        setAvgRating(newAvgRating);

        localStorage.setItem(`ratings-${film.imdbID}`, JSON.stringify(updatedRatings));
        localStorage.setItem(`avgRating-${film.imdbID}`, newAvgRating);
    }

    // DetailsModal
    function handleDetailClick() {
        setShowDetailModal(true);
        fetchFilmDetails(film.imdbID);
    }
    function handleCloseDetailModal() {
        setShowDetailModal(false)
    }
    // RatingModal
    function handleRatingClick() {
        setShowRatingModal(true);
    }
    function handleCloseRatingModal() {
        setShowRatingModal(false)
    }

    return (
        <>
            <div className="filmcard-main">
                <img src={film.Poster} alt="Film Poster" />
                <div className="filmcard-content">
                    <div className="filmcard-content1">
                        <p className="film-title">{film.Title}</p>
                        <p className="film-year">{film.Year}</p>
                        <div className="avg">
                            <span className="span-star">★</span> : {avgRating} / 5
                        </div>
                        <button className="rating-btn" onClick={handleRatingClick}>Rate</button>
                        <button className="detailing-btn" onClick={handleDetailClick}>Details</button>

                    </div>
                </div>
            </div>

            {showDetailModal &&
                <FilmDetail
                    onCloseD={handleCloseDetailModal}
                    userRating={avgRating} />
            }

            {showRatingModal &&
                <Rating
                    onCloseR={handleCloseRatingModal}
                    FilmTitle={film}
                    storeUserRating={handleNewRating}
                    averageRating={avgRating} />}
        </>
    );
}

export default FilmCard;
