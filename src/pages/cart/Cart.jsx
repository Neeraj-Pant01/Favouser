import React from 'react'
import { AiOutlineArrowLeft, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineVerified } from 'react-icons/ai'
import Product from '../../components/product/Product'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='cart'>
      <div className='flex sticky top-0 border items-center px-4 py-3 bg-[white]'>
        <Link to={`/`}>
        <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
        </Link>
        <span className='ml-3 text-[grey] '>Cart</span>
      </div>
      <div className='flex flex-col gap-2 px-5 mb-8'>
        <p className='mt-2 font-light text-[black]'>item (1)</p>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className='flex items-center justify-between mt-4 mb-24 mx-5'>
            <div className='flex items-center justify-center flex-col gap2'>
                <AiOutlineShoppingCart className='text-3xl text-[gold]'/>
                <span className='text-[grey] text-xs text-center'>100% secure payments</span>
                </div>
            <div className='flex items-center flex-col gap2'><AiOutlineVerified className='text-3xl text-[green]'/>
            <span className='text-[grey] text-xs text-center'>100% Quality Assurance</span>
            </div>
            <div className='flex items-center flex-col gap2'><AiOutlineGlobal className='text-3xl text-[#428fca]'/>
            <span className='text-[grey] text-xs text-center'>Global delivery</span>
            </div>
        </div>

      <div className='flex bg-[white] fixed bottom-0 items-center px-4 py-3 w-screen'>
        <div className='flex flex-col w-28'>
          <div className='flex items-center text-[grey]'>
            <span>₹</span>
            <span className='text-[black] text-xl'>699</span>
          </div>
        </div>
        <div className='flex flex-1 border'>
        <button className='bg-[black] text-[white] w-full rounded-md py-2'>PROCEED</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
