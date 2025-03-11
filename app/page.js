import React from 'react'
import HomePage from './components/HomePage';
import { FilmProvider } from './context/FilmContext';
import 'bootstrap/dist/css/bootstrap.min.css';



const page = () => {
  return (
    <>
      {/* <Slider /> */}
      <FilmProvider>
        < HomePage/>
      </FilmProvider>
    </>
  )
}

export default page;
