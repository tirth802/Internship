import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const SearchMovie = () => {

    const[MoviesData,setMoviesData]=useState([])
    const[movieName,setmovieName]=useState("")

    const searchmovie=async()=>{
        const res=await axios.get(
            //"http://www.omdbapi.com/?apikey=33426f0c&s=avatar"
            "http://www.omdbapi.com/?apikey=33426f0c&s="+movieName)
         console.log(res)
        console.log(res.data.Search)
        setMoviesData(res.data.Search)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Search Movie</h1>
        <input type='text' onChange={(event)=>{setmovieName(event.target.value)}}></input>
            <button onClick={()=>{searchmovie()}}className='btn btn-info'>SEARCH</button>
            <div class="container mt-4">
        <div class="row">
          {MoviesData?.map((movie) => {
            return (
              <div class="col-md-2">
                <div class="card">
                    <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img src={movie.Poster} class="card-img-top" alt="Image" />
                  </Link>

                  <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
