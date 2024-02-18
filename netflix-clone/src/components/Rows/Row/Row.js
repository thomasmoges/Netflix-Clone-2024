// import React from 'react'
// import './Row.css'

// const Row = () => {
//   return (
//     <div>Row</div>
//   )
// }

// export default Row

import React, { useEffect, useState } from 'react'
import "./row.css";
import axios from "../../../utils/axios";
// import movieTrailer from 'movie-trailer';
// import YouTube from 'react-youtube';
// title, fetchUrl, isLargeRow
const Row = ({  }) => {
    const [movies, setMovie] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl)
                const request = await axios.get(fetchUrl);
                console.log(request)
                setMovie(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        })()
    }, [fetchUrl]);
    // movie
    // const handleClick = () => {
    //     if (trailerUrl) {
    //         setTrailerUrl('')
    //     } else {
    //         movieTrailer(movie?.title || movie?.name || movie?.original_name)
    //             .then((url) => {
    //                 console.log(url)
    //                 const urlParams = new URLSearchParams(new URL(url).search)
    //                 console.log(urlParams)
    //                 console.log(urlParams.get('v'))
    //                 setTrailerUrl(urlParams.get('v'));
    //             })
    //     }
    // }

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
            {/* movie, index */}
                {movies?.map(() => (
                    <img
                        // onClick={() => handleClick(movie)}
                        key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />
                ))}
            </div>
            {/* <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div> */}
        </div>
    )
}

export default Row