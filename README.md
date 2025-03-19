
# Movie and TV Shows React Application

## Description
This single-page React application displays a homepage with a Navbar, a search bar, and a list of movies fetched from the OMDB API. Users can search for specific movies by name, and if the movie is found, it will be displayed on the homepage. If the movie is not found, a "No movie found" message will appear.

Users can also view detailed information about each movie and rate it multiple times. The average rating is calculated and displayed to the user. Even after refreshing the page, the average rating persists, allowing users to see the previous rating for the movie.

## Installation

### Prerequisites
Make sure you have Node.js installed on your system. If not, download and install it from [Node.js Official Website](https://nodejs.org/).

### Steps to run the project locally:

1. Clone the repository:
   ```bash
 Git Clone - https://github.com/Swarnalata-Rana/react_movies_and_tvshows_app

2. Navigate into the project directory:
 cd react-movies-and-tvshows-app

3.npm install

4. Start the application:
 npm run dev

    
## Demo
You can check out the live demo of the project by visiting the following link:https://react-movies-and-tvshows-app.vercel.app/
## Features

-Movie Search:  Allows users to search for movies using the search bar.

-Movie Details: View detailed information about the selected movie.

-Movie Rating: Rate movies multiple times and see the average rating.

-Persistent Ratings: Average rating persists across page refreshes.

-Error Handling: Displays "No movie found" if the movie is not available in the OMDb API.

## Technologies Used
React.js: JavaScript library for building user interfaces.

IMDb API: Used to fetch movie data.

Local Storage: To persist user ratings across page reloads.

CSS: For styling the application.

Vercel: This is for hosting the app for production deployment.
