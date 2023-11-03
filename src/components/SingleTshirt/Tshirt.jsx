import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Tshirt = () => {
    const desc = "this is the product description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, aliquid?"
  return (
    <div className='flex flex-col border my-1' style={{width:"48%"}}>
        <img src='https://static.vecteezy.com/system/resources/previews/008/520/862/original/black-oversize-t-shirt-mockup-hanging-file-png.png' className='w-full'/>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <span className='text-sm text-[grey] px-2'>product name/title </span>
                <span className='text-xs text-[grey] px-2 font-light'>{desc.substring(0, 30)}<b className='text-[black]'> ...</b></span>
            </div>
            <AiOutlineShoppingCart className='text-[goldenrod] text-2xl mr-1 cursor-pointer'/>
        </div>
        <div className='flex px-2 items-center'>
            <span className='text-[grey] text-sm'>₹<b className='text-[black] text-lg'>699</b></span> <span className='text-[grey] line-through text-sm ml-2'>₹699</span> <span className='text-[green] text-sm ml-3'>47% OFF</span>
        </div>
    </div>
  )
}

export default Tshirt
