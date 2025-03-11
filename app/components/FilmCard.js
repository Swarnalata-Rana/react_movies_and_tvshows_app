import React, { useContext, useEffect, useState } from 'react';
import Rating from './Rating';
import FilmDetail from './FilmDetail';
import { FilmContext } from '../context/FilmContext';

const FilmCard = ({ film }) => {
    const { fetchFilmDetails } = useContext(FilmContext);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [ratings, setRatings] = useState([]);
    const [avgRating, setAvgRating] = useState(0);

    useEffect(function () {
        const ratingKey = `avgRating-${film.imdbID}`;
        const storedAvg = localStorage.getItem(ratingKey);

        if (storedAvg) {
            setAvgRating(parseFloat(storedAvg)); // If value thiba, set karidaba
        } else {
            setAvgRating(0); // Otherwise, default to 0 daba
        }
    }, [film.imdbID]);


    function calculateAvgRating(newRatings) {
        let sum = 0;
        let i = 0;

        while (i < newRatings.length) {
            sum += newRatings[i];
            i++;
        }

        return sum / newRatings.length;
    }

    function handleNewRating(newRating) {
        const updatedRatings = [...ratings, newRating];
        setRatings(updatedRatings);

        if (updatedRatings.length > 0) {
            const newAvgRating = calculateAvgRating(updatedRatings).toFixed(1);
            setAvgRating(newAvgRating);
            localStorage.setItem(`avgRating-${film.imdbID}`, newAvgRating);
        } else {
            setAvgRating(0);
        }
    }

    // DetalisModal
    const handleDetailClick = () => {
        fetchFilmDetails(film.imdbID);
        setShowDetailModal(true);
    };

    const handleCloseDetailModal = () => {
        setShowDetailModal(false);
    };
    // RatingModal
    const handleRatingClick = () => {
        setShowRatingModal(true);
    };

    const handleCloseRatingModal = () => {
        setShowRatingModal(false);
    };

    return (
        <>

            <div className="filmcard-main">
                <img src={film.Poster} />
                <div className='filmcard-content'>
                    <p className='film-title'>{film.Title}</p>
                    <p className='film-year'>{film.Year}</p>
                    <div className="avg">
                        <span className='span-star'>★</span> : {avgRating} / 5
                    </div>
                    <div className='rating-btn-div'>
                        <button className="rating-btn" onClick={handleRatingClick}>
                            Rate
                        </button>
                    </div>
                    <div className='rating-btn-div'>
                        <button className="detailing-btn" onClick={handleDetailClick}>
                            Details
                        </button>
                    </div>
                </div>
            </div>

            {showDetailModal &&
                <FilmDetail
                    onCloseD={handleCloseDetailModal}
                    userRating={avgRating}
                />}

            {showRatingModal && (
                <Rating
                    onCloseR={handleCloseRatingModal}
                    FilmTitle={film}
                    updateAvgRating={handleNewRating}
                    averageRating={avgRating}
                />
            )}
        </>
    );
};

export default FilmCard;


