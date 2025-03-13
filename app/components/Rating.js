import React, { useState } from 'react';

const Rating = ({ onCloseR, FilmTitle, storeUserRating, averageRating }) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [tempRating, setTempRating] = useState(averageRating);

    function handleRatingClick1() {
        if (selectedRating === 1) {
            setSelectedRating(0);
            setTempRating(averageRating);
        } else {
            setSelectedRating(1);
            setTempRating(1);
        }
    }

    function handleRatingClick2() {
        if (selectedRating === 2) {
            setSelectedRating(0);
            setTempRating(averageRating);
        } else {
            setSelectedRating(2);
            setTempRating(2);
        }
    }

    function handleRatingClick3() {
        if (selectedRating === 3) {
            setSelectedRating(0);
            setTempRating(averageRating);
        } else {
            setSelectedRating(3);
            setTempRating(3);
        }
    }

    function handleRatingClick4() {
        if (selectedRating === 4) {
            setSelectedRating(0);
            setTempRating(averageRating);
        } else {
            setSelectedRating(4);
            setTempRating(4);
        }
    }

    function handleRatingClick5() {
        if (selectedRating === 5) {
            setSelectedRating(0);
            setTempRating(averageRating);
        } else {
            setSelectedRating(5);
            setTempRating(5);
        }
    }

    function handleSaveRating() {
        if (selectedRating) {
            storeUserRating(selectedRating);
            onCloseR();
        }
    }

    return (
        <div className="rating-main">
            <div className="rating-content">
                <div className="rating-content1">
                    <div className='rate-this'>Rate This</div>
                    <div className='rate-title'>{FilmTitle.Title}</div>
                    <div className="avgR">
                        <span className='span-star'>★</span> : {tempRating} /5
                    </div>

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

                    <div className='close-btnD1'>
                        <button className="close-btnR" onClick={onCloseR}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rating;
