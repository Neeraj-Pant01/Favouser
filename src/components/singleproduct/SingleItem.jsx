import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const SingleItem = ({product}) => {
  return (
    <div className='flex flex-col md:w-96 md:border md:rounded-md md:border-[lightgrey]'>
    <div className='flex w-full items-center justify-center flex-col'>
        <img src={product.coverImage || "https://static.vecteezy.com/system/resources/previews/008/520/862/original/black-oversize-t-shirt-mockup-hanging-file-png.png"} className='flex w-72'/>
    </div>
    <div className='flex justify-between px-5 items-center'>
        <div className='flex flex-col text-[#2d2d2d]'>
            <h1 className='text-lg'>{product.productName}</h1>
            <p className='text-[grey] text-sm font-light'>{product.productDesc}</p>
            </div>
            <AiOutlineHeart className='text-[grey] text-3xl cursor-pointer'/>
    </div>
    <div className='px-4 flex items-center'>
        <div className='flex items-center'>₹ <h1 className='text-xl'>{product.price}</h1> <span className='ml-2 text-[grey]'>₹ </span> <h1 className='text-xl line-through text-[#c7c4c4] mt-2'>1999</h1> <h1 className='text-xl ml-5 text-[green]'>53% OFF</h1></div>
    </div>
</div>
  )
}

export default SingleItem
