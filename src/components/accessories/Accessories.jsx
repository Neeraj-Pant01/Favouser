import React from 'react'
import { Link } from 'react-router-dom'

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: "Mug",
      price: "Rs 999.99",
      image: "/acessories/3.png"
    },
    {
      id: 2,
      name: "Water Bottles",
      price: "Rs 499.99",
      image: "/acessories/4.png"
    },
    {
      id: 3,
      name: "",
      price: "Rs 799.99",
      image: "/acessories/6.png"
    },
    {
      id: 4,
      name: "Key Chain",
      price: "Rs 899.99",
      image: "/acessories/7.png"
    },
    {
      id: 5,
      name: "Cap",
      price: "Rs 1299.99",
      image: "/acessories/8.png"
    },
    {
      id: 6,
      name: "Hand Bags",
      price: "Rs 299.99",
      image: "/acessories/9.png"
    },
    {
      id: 7,
      name: "",
      price: "Rs 399.99",
      image: "/acessories/10.png"
    },
    {
      id: 8,
      name: "Mobile cover",
      price: "Rs 459.99",
      image: "/acessories/5.png"
    }
  ]

  return (
    <div className='mt-2 bg-[black] mb-2 pt-4'>
      <h1 className='text-center text-2xl md:text-3xl font-bold text-white mb-8'>ACCESSORIES</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8'>
        {accessories.map((item) => (
          <Link to={`/products?cat=${item?.name}`} key={item.id} className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300'>
            <div className='aspect-square overflow-hidden'>
              <img 
                src={item.image} 
                alt={item.name}
                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
              <h3 className='text-white font-semibold text-lg'>{item.name}</h3>
              {/* <p className='text-amber-400 font-bold'>{item.price}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Accessories 