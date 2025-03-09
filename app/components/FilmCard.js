import React, { useContext, useState } from 'react';
import Rating from './Rating';
import FilmDetail from './FilmDetail';
import { FilmContext } from '../context/FilmContext';

const FilmCard = ({ film }) => {
    const { fetchFilmDetails } = useContext(FilmContext);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [ratings, setRatings] = useState([]);
    const [avgRating, setAvgRating] = useState(0);

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

        const newAvgRating = calculateAvgRating(updatedRatings);
        setAvgRating(newAvgRating.toFixed(1));
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
            <div className="moviecard-main">
                <img src={film.Poster} width="150" />
                <div>
                    <p>{film.Title}</p>
                    <p>{film.Year}</p>
                </div>
                <div className="avg">Avg: {avgRating} / 5</div>

                <div className="details-rating">
                    <button className="rating-btn" onClick={handleRatingClick}>
                        Rate
                    </button>
                    <button className="detailing-btn" onClick={handleDetailClick}>
                        Details
                    </button>
                </div>
            </div>

            {showDetailModal && <FilmDetail onCloseD={handleCloseDetailModal} />}

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

