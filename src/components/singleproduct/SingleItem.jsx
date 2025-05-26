import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { GiShoppingCart } from "react-icons/gi";

const SingleItem = ({ product }) => {
  const AllImages = [product?.coverImage, ...(product?.images || [])];
  const [currentImage, setCurrentImage] = useState(null)

  return (
    <div className='flex flex-col md:w-96 md:border md:rounded-md md:border-[lightgrey]'>
      <div className='flex w-full items-center justify-center flex-col'>
        <img src={currentImage || product.coverImage} className='flex w-[90%] md:h-[250px] rounded-md' />
      </div>
      <div className='flex justify-between px-5 items-center'>
        <div className='flex flex-col text-[#2d2d2d]'>
          <h1 className='text-lg'>{product.productName}</h1>
        </div>
        <div className="flex items-center">
        <AiFillHeart className='text-red-500 text-3xl cursor-pointer' />
        <GiShoppingCart className='text-[goldenrod] text-3xl cursor-pointer' />
        </div>
      </div>
      <div className='px-4 flex gap-4 items-center'>
        <div className='flex items-center'>₹ <h1 className='text-xl'>{product.price}</h1></div>
        <div className='flex items-center'>
          ₹
          <span className='text-[maroon] line-through'>{product.price + Math.floor(product?.price * 0.40)}</span>
        </div>
        <h1 className='text-xl ml-5 text-[green]'>40% OFF</h1>
      </div>
      <div className='flex py-3 gap-2 px-4'>
        {
          AllImages.map((i, index) => <img src={i} key={index} className={`w-[40px] h-[40px] shadow border ${currentImage === i ? 'border-red-500 border-2' : 'border-[black]'} rounded-md cursor-pointer`} onClick={()=>setCurrentImage(i)}/>)
        }
      </div>
          <p className='text-[grey] px-4 text-sm font-light'>{product.productDesc}.</p>
    </div>
  )
}

export default SingleItem
