import React from 'react'
import {NavLink} from 'react-router-dom'
import { useGlobalContext } from './context'


const Movies = () => {
    const {movies, isLoading} = useGlobalContext();

    if(isLoading){
        return(
            <div>
                <div className="loading">Loading...</div>
            </div>
        )
    }

  return (
    <>
    {
        <section className='movie-page'>
            <div className='grid grid-4-col container'>{movies.map((currMovie) =>{
                const { imdbID, Title, Poster } = currMovie
                return <NavLink to={`movie/${imdbID}`} key={imdbID} >
                        <div className="card">
                            <div className="card-info">
                                <h2>{Title}</h2>
                                <img src={Poster} alt={imdbID} />
                            </div>
                        </div>
                </NavLink>
            })}</div>
        </section>
    }     
    </>
  )
}

export default Movies
