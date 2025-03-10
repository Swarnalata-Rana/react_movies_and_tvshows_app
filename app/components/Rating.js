import React, { useState } from 'react';

const Rating = ({ onCloseR, FilmTitle, updateAvgRating, averageRating }) => {
    const [selectedRating, setSelectedRating] = useState(0);

    function handleRatingClick1() {
        if (selectedRating === 1) {
            setSelectedRating(0);
        } else {
            setSelectedRating(1);
        }
    }

    function handleRatingClick2() {
        if (selectedRating === 2) {
            setSelectedRating(0);
        } else {
            setSelectedRating(2);
        }
    }

    function handleRatingClick3() {
        if (selectedRating === 3) {
            setSelectedRating(0);
        } else {
            setSelectedRating(3);
        }
    }

    function handleRatingClick4() {
        if (selectedRating === 4) {
            setSelectedRating(0);
        } else {
            setSelectedRating(4);
        }
    }

    function handleRatingClick5() {
        if (selectedRating === 5) {
            setSelectedRating(0);
        } else {
            setSelectedRating(5);
        }
    }

    const handleSaveRating = () => {
        if (selectedRating === 0) {
            return null; 
        } else {
            updateAvgRating(selectedRating); 

        }

        onCloseR();
    };

    return (
        <div className="rating-main">
            <div className="rating-content">
                <div>Rate This</div>
                <div>{FilmTitle.Title}</div>
                <div className="avg">Avg: {averageRating} /5</div>

                <div>
                    <span
                        className={`star ${selectedRating >= 1 ? 'selected' : ''}`}
                        onClick={handleRatingClick1}
                    >
                        ★
                    </span>
                    <span
                        className={`star ${selectedRating >= 2 ? 'selected' : ''}`}
                        onClick={handleRatingClick2}
                    >
                        ★
                    </span>
                    <span
                        className={`star ${selectedRating >= 3 ? 'selected' : ''}`}
                        onClick={handleRatingClick3}
                    >
                        ★
                    </span>
                    <span
                        className={`star ${selectedRating >= 4 ? 'selected' : ''}`}
                        onClick={handleRatingClick4}
                    >
                        ★
                    </span>
                    <span
                        className={`star ${selectedRating >= 5 ? 'selected' : ''}`}
                        onClick={handleRatingClick5}
                    >
                        ★
                    </span>
                </div>

                <div>
                    <button className="rate-btn" onClick={handleSaveRating}>
                        Save Rate
                    </button>
                </div>

                <button className="close-btnR" onClick={onCloseR}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Rating;
