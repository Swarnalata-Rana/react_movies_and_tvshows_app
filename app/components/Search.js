import React from 'react'

const Search = () => {
    return (
        <>
            <div className="search-main">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search movies & TV Shows"
                />
                <button className="search-button" >Search</button>
            </div>
        </>
    )
}

export default Search;
