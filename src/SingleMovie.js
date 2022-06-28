import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useGlobalContext } from './context';

const SingleMovie = () => {
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

  // const {API_URL} = useGlobalContext();
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState("")
    // const { imdbID, Title, Poster } = movies

    const getMovies = async(url)=>{
      let res = await fetch(url)
      let data = await res.json()
      console.log(data)
      if(data.Response === "True"){
        setIsLoading(false)
        setMovie(data)
      }
    }

    useEffect(()=>{
      getMovies(`${API_URL}&i=${id}`)
    },[API_URL,id])

    if(isLoading){
      return(
          <div>
              <div className="loading">Loading...</div>
          </div>
      )
  }

  return (
   
    <div className='container'>
     {/* <h1>SingleMovie {params.id}</h1> */}
     <img src={movie.Poster} alt="" />
     <h2>ImDB Rating-: {movie.imdbRating}</h2>
     <h2>{movie.Title}</h2>
     <h2>{movie.Actors}</h2>
     <h2>{movie.Released}</h2>
     <h2>{movie.Runtime}</h2>
    </div>
  )
}

export default SingleMovie
