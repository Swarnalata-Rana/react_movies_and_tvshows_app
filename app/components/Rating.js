import React from 'react';

const Rating = ({ onCloseR, props }) => {
    return (
        <div className="rating-main">
            <div className='rating-content'>
                <h4>Rate:-{props.Title}</h4>
                <div>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
                <button className="close-btnR" onClick={onCloseR}>Close</button>
            </div>
        </div>
    );
};
export default Rating;
