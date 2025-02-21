import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

    const id = useParams().id
    const[detail,setdetail]=useState({})

    const getMovieDetail=async()=>{

        const res=await axios.get("http://www.omdbapi.com/?apikey=33426f0c&i="+id)
        console.log(res.data)
        setdetail(res.data)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>MOVIE DETAIL:-{id}</h1>
        <button onClick={()=>{getMovieDetail()}}>Detail</button>
        <h1>Movie Name:-{detail?.Title}</h1>
        </div>
  )
}
