"use client"
import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';
import FilmCard from './FilmCard';
import { FilmContext } from '../context/FilmContext';

const HomePage = () => {
    const { films, fetchFilms } = useContext(FilmContext);

    // if (films.length === 0) {
    //     fetchFilms("avengers");
    // }

    useEffect(() => {
        fetchFilms("avengers");
        fetchFilms("hello");
        fetchFilms("tiger");
    }, []);

    let filmcontent;
    if (films.length > 0) {
        filmcontent = films.map((film) =>
            <FilmCard
                key={film.imdbID}
                film={film}
            />);
    } else {
        filmcontent = <p id="no-movies-found">Oops! Sorry, no movies found.</p>;
    }


    return (
        <>
            <Navbar />
            <Search onSearch={fetchFilms} />
            <div className="homepage-main">
                <div className="movie-list">
                    {filmcontent}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;
