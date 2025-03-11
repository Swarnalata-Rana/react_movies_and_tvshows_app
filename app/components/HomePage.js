"use client"
import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';
import FilmCard from './FilmCard';
import { FilmContext } from '../context/FilmContext';
import Photo from './Photo';

const HomePage = () => {
    const { films, fetchFilms } = useContext(FilmContext);

    // if (films.length === 0) {
    //     fetchFilms("avengers");
    // }

    useEffect(function () {
        fetchFilms("tiger");
        // fetchFilms("ram");

    }, []);

    let filmcontent;
    if (films.length > 0) {
        filmcontent = films.map((film) =>
            <FilmCard
                key={film.imdbID}
                film={film}
            />);
    } else {
        filmcontent = <p id="no-film-found">Oops! Sorry, no movies found.</p>;
    }


    return (
        <>
            <Navbar />
            <Search />
            <div>
                <div className="homepage-main">
                    <div className='home-page1'>
                        <Photo />
                        <div className="film-list">
                            {filmcontent}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;
