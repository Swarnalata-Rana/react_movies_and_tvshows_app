import React from 'react'
import HomePage from './components/HomePage';
import { FilmProvider } from './context/FilmContext';

const page = () => {
    return (
        <>
            <FilmProvider>
                < HomePage />
            </FilmProvider>
        </>
    )
}
export default page;
