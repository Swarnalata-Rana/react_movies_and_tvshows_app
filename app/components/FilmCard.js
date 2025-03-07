import React from 'react'

const FilmCard = ({film}) => {
    return (
        <>
            <div className="moviecard-main">
                <img src={film.Poster} width="150" />
                <div>
                    <p>{film.Title}</p>
                    <p>{film.Year}</p>
                </div>
                <div className="detailing-rating">
                    <button className="rating-btn">Rating</button>
                    <button className="detailing-btn" >Detailing</button>
                </div>
            </div>
        </>
    )
}

export default FilmCard;
