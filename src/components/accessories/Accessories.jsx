import React from 'react'

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: "Classic Watch",
      price: "Rs 999.99",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1932&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Leather Wallet",
      price: "Rs 499.99",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Sunglasses",
      price: "Rs 799.99",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1880&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Smart Band",
      price: "Rs 899.99",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1932&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Backpack",
      price: "Rs 1299.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Cap",
      price: "Rs 299.99",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Belt",
      price: "Rs 399.99",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Scarf",
      price: "Rs 459.99",
      image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=1935&auto=format&fit=crop"
    }
  ]

  return (
    <div className='mt-2 bg-[black] mb-2 pt-4'>
      <h1 className='text-center text-2xl md:text-3xl font-bold text-white mb-8'>ACCESSORIES</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8'>
        {accessories.map((item) => (
          <div key={item.id} className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300'>
            <div className='aspect-square overflow-hidden'>
              <img 
                src={item.image} 
                alt={item.name}
                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
              <h3 className='text-white font-semibold text-lg'>{item.name}</h3>
              <p className='text-amber-400 font-bold'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accessories 