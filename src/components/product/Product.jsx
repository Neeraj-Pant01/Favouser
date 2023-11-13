import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex flex-col gap-2 border mb-1'>
        <div className='flex py-1 px-1'>
            <div className='flex w-28'>
                <img src='https://static.vecteezy.com/system/resources/previews/008/520/862/original/black-oversize-t-shirt-mockup-hanging-file-png.png' className='w-full'/>
            </div>
            <div className='flex flex-1 flex-col'>
                <Link className=' w-fit' to={`/`}>Favouser</Link>
                <p className='text-[grey] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolor!</p>
            </div>
            <AiOutlineClose className='text-xl cursor-pointer'/>
        </div>
        <div className='flex px-2 gap-5 items-center'>
            <span className='bg-[#d2e4eb] px-3 py-1 text-xs h-fit'>SIZE: XL</span>
            <select className='bg-[#d2e4eb] px-3 py-1 text-xs outline-none h-fit'>
                <option>1</option>
            </select>
            <div className='flex flex-col items-end justify-end flex-1'>
                <div className='flex items-center gap-2'>
                    <span className='text-lg'>₹ 699</span> 
                    <span className='text-[grey] line-through'>₹ 699</span>
                </div>
                <p className='text-[green]'>you saved 400</p>
            </div>
        </div>
    </div>
  )
}

export default Product
