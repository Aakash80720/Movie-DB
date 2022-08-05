import React ,{useState,useEffect}from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'
function Banner() {
    const [movie, setMovies] = useState([])


    useEffect(() => {
       // effect
       async function fetchdata(){
        const request = await axios.get(requests.netflixoriginals)
        console.log(request)
        setMovies(...movie,request.data.items[Math.floor(Math.random() * request.data.items.length -1)] )
        
        return request


       }
        fetchdata()
    }, [])
    console.log(movie)
    return (
        <header className = 'banner' 
        style ={{
            backgroundSize:'contain contain',
            width:'100%',
            height:'648px',
            backgroundImage:`url('${movie?.image}') `,
            backgroundPosition:" center center ",
            backgroundRepeat: 'no-repeat'
            
        }}
        >
            <div className ='banner-contents'>
                    
                    
                    <h1 className ='banner_title'>{movie?.title}</h1>
                    <div className = "banner buttons">
                        <h1 className="banner_discription">{movie?.plot} {movie?.directors} {movie?.geners} {movie?.stars}</h1>
                        <div className ="banner__fadded-bottom"></div>
                    </div>

            </div>
           
        </header>

    )
}

export default Banner
