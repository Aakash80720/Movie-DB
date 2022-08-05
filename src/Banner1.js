import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner1.css'
function Banner1(props) {
      const shuffledPosts = props?.p;
    return (
        <div>
            <div className = 'banner-slider' >
            <Carousel showArrows={true} autoPlay={500} showIndicators={false} showStatus={false} infiniteLoop={true} showThumbs={false}>
            { 
               shuffledPosts?.backdrops?.map((pic,index)=>{
                    return(
                        
                            <div  key={index} >
                                <img loading='lazy' src={pic?.link} alt=""/>                            
                            </div>
                        
                       
                    )
                })
            }
            </Carousel>
            
        </div>
        <div className = 'bottom'></div>
        </div>
        
    )
}

export default Banner1
