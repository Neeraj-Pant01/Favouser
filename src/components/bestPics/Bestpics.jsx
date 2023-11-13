import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./pics.css"

const Bestpics = () => {
  return (
    <div className='w-56'>
        <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} showStatus={false}>
    <div className=''>
        <img src="assets/d94.png" className='w-full'/>
    </div>
    <div>
        <img src="assets/d1w.png" className='w-full'/>
    </div>
    <div>
        <img src="assets/d3black.png" className='w-full'/>
    </div>
</Carousel>
</div>
  )
}

export default Bestpics
