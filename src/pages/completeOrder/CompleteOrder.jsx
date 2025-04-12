import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CompleteOrder = () => {
  return (
    <div className='flex items-center justify-center' style={{height:"80vh"}}>
      <div className='flex gap-3 justify-center flex-col'>
        <AiFillCheckCircle className='text-5xl md:text-6xl text-[lightgreen] ml-auto mr-auto' />
        <span className='text-[green] mb-9 text-xl md:text-2xl'>Order Completed Successfully</span>
        <Link className='border-2 border-[#742929] text-center text-[#742929] py-1' to={'/products'}>CONTINUE SHOPPING</Link>
        <Link className='border-2 border-[#742929] text-center text-[#742929] py-1' to={'/myOrders'}>YOUR ORDERS</Link>
      </div>
    </div>
  )
}

export default CompleteOrder
