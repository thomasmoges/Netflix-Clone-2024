// import React from 'react'
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'
import requests from '../../utils/requests';
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    (async  () => {
      try {
        const request = await axios.get(requests.fetchNetflixOrginals)
        console.log(request)
        setMovie(requests.data.results[
          Math.floor(Math.random()* request.data.results.length)
        ]);
    }catch (error) { 
      console.log("error", error);
    }
  })()
}, []);

function trucate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + '...': str;
}

<div>
  <img className='' src={`https://image.tmdb.org/t/p/orginal${movie?.backdrop_path}`} 
  alt={movie?.title}/>
  
</div>
    return (
          <div
    className="banner"
    style={{
        backgroundSize: "cover",
        // backgroundImage: `url('https://image.tmdb.org/t/p/orginal${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    >
      
     <div className='banner_contents'>
        <h1 className='banner_title'>
            {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className='banner_button'>
            <button className='banner_button play'>Play</button>
            <button className='banner_button'>My Lists</button>
        </div>
        <h1 className='banner_discription'>{trucate(movie?.overview, 150)}</h1>
        </div>  
      
      <div className='banner_fadeBottom' />
      </div>
  );
};

export default Banner;