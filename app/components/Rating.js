// import React from 'react';

// const Rating = ({ onCloseR, props }) => {
//     return (
//         <div className="rating-main">
//             <div className='rating-content'>
//                 <div>
//                     Rate This
//                 </div>
//                 <div>{props.Title}</div>
//                 <div className='avg'>
//                     Avg
//                 </div>
//                 <div>
//                     <span className="star">★</span>
//                     <span className="star">★</span>
//                     <span className="star">★</span>
//                     <span className="star">★</span>
//                     <span className="star">★</span>
//                 </div>
//                 <div>
//                     <button className='rate-btn'>
//                         Save Rate
//                     </button>
//                 </div>
//                 <button className="close-btnR" onClick={onCloseR}>Close</button>
//             </div>
//         </div>
//     );
// };
// export default Rating;


import React, { useState } from 'react';
function Rating({ onCloseR, props }) {
    const [selectedRating, setSelectedRating] = useState(0);

    function handleRatingClick1() {
        if (selectedRating === 1) {
            setSelectedRating(0);
        }
        else {
            setSelectedRating(1)
        }
    }
    function handleRatingClick2() {
        if (selectedRating === 2) {
            setSelectedRating(0);
        }
        else {
            setSelectedRating(2)
        }
    }
    function handleRatingClick3() {
        if (selectedRating === 3) {
            setSelectedRating(0);
        }
        else {
            setSelectedRating(3)
        }
    }
    function handleRatingClick4() {
        if (selectedRating === 4) {
            setSelectedRating(0);
        }
        else {
            setSelectedRating(4)
        }
    }
    function handleRatingClick5() {
        if (selectedRating === 5) {
            setSelectedRating(0);
        }
        else {
            setSelectedRating(5)
        }
    }

    return (
        <div className="rating-main">
            <div className='rating-content'>
                <div>Rate This</div>
                <div>{props.Title}</div>
                <div className='avg'>Avg:{}/5</div>

                <div>
                    <span className={`star ${selectedRating >= 1 ? "selected" : ""}`}
                        onClick={handleRatingClick1}>★</span>

                    <span className={`star ${selectedRating >= 2 ? "selected" : ""}`}
                        onClick={handleRatingClick2}>★</span>

                    <span className={`star ${selectedRating >= 3 ? "selected" : ""}`}
                        onClick={handleRatingClick3}>★</span>

                    <span className={`star ${selectedRating >= 4 ? "selected" : ""}`}
                        onClick={handleRatingClick4}>★</span>

                    <span className={`star ${selectedRating >= 5 ? "selected" : ""}`}
                        onClick={handleRatingClick5}>★</span>
                </div>

                <div>
                    <button className='rate-btn'>Save Rate</button>
                </div>

                <button className="close-btnR" onClick={onCloseR}>Close</button>
            </div>
        </div>
    );
}

export default Rating;


