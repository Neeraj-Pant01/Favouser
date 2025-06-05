import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
  "/b1.png",
  "https://plus.unsplash.com/premium_photo-1695575576052-7c271876b075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  // Add more image paths as needed
]

const FavoUser = () => {
  return (
    <div className='px-4 bg-white pb-2 mt-2'>
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
            <img src={img} alt={`slide-${idx}`} className='w-full h-60 md:h-72 object-cover rounded-3xl' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default FavoUser