import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'
// import { FormControl,Button } from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=84bf934f6f348e09a8de2b9b556c09ae"

function HomePage(props) {
    const[movie,setMovies]=useState([])
   
useEffect((props)=>{
    fetch(API_URL)
},[])

const fetch= async()=>{
    try{
        const response=await axios.get(API_URL)
        const data=response.data
        // console.log(data.results.popularity);
        setMovies(data.results)
        
    }catch(error){
console.log(error);
    }
}
console.log(movie);


  return (
    <div>
        
    <div>
      {movie.length > 0 ?(
        <div className="container">
        <div className="grid">
{movie.map((val)=><Movies key={val.id} poster={val.poster_path} title={val.title}
 date={val.release_date}
 overview={val.overview}/>)}
          
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
          
    </div>
  )
}

export default HomePage

