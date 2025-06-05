import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
  "/b1.png",
  "/b2.png",
  "/b1.png",
  // Add more image paths as needed
]

const FavoUser = () => {
  return (
    <div className='md:px-4 bg-white pb-2 mt-2'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        showArrows
        swipeable
        emulateTouch
        className="rounded-3xl"
      >
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`slide-${idx}`} className='w-full md:h-72 object-cover md:rounded-3xl' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default FavoUser