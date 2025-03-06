import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';
import FilmCard from './FilmCard';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Search />
            <div className="homepage-main">
                <div className="movie-list">
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;
