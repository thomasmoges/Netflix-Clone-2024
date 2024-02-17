import React from 'react'

function Banner() {
  return (
    <div
    className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: 'url',
        backgroundPosition "center",
        backgroundRepeat: "no-repeat"
    }}
    >

     <div className='"banner_contents'>
        <h1 className='"banner_title'>
            (movie?.title # movie?.orginal_name)
        </h1>
        <div className='banner_button'>
            <button className='banner_button play'>Play</button>
            <button className='banner_button'>My Lists</button>
        </div>
        <h1 className='banner_discription'>{trucate(movie?.overview, 150)}</h1>
        </div>   


    </div>
  )
}

export default Banner