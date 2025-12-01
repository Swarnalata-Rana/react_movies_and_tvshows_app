import React, { useState } from 'react';

const Rating = ({ onCloseR, FilmTitle, storeUserRating, averageRating }) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [tempRating, setTempRating] = useState(averageRating);

    const handleRatingClick = (rating) => {
        const newRating = selectedRating === rating ? 0 : rating;
        setSelectedRating(newRating);
        setTempRating(newRating || averageRating)
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
                        {[1, 2, 3, 4, 5].map((num) => (
                            <span
                                key={num}
                                className={`star ${selectedRating >= num ? 'selected' : ""}`}
                                onClick={() => handleRatingClick(num)}
                            >
                                ★
                            </span>
                        ))}
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


