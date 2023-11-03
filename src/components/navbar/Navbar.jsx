import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenuFold, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='sticky top-0 z-50 w-screen'>
    <div className='flex items-center justify-between px-6 py-4 bg-black text-white relative'>
      <AiOutlineMenuFold className='cursor-pointer text-lg' onClick={()=>setOpen(!open)}/>
      <span className='text-white font-extrabold'>FAVOUSER</span>
      <div className='flex items-center gap-2'>
      <div className='flex items-center justify-center w-7 h-7 border rounded-full'>
        <AiOutlineUser />
      </div>
      <div className='flex items-center justify-center w-7 h-7 border rounded-full'>
        <AiOutlineSearch />
      </div>
      <div className='flex items-center justify-center w-7 h-7 border relative rounded-full '>
        <Link to={`/cart/123`}><AiOutlineShoppingCart /></Link>
        <Link className='text-white bg-red-600 absolute right-0 text-xs rounded-full h-4 opacity-80 w-4 flex items-center justify-center'>2</Link>
      </div>
      </div>
      {open &&
      // <div className='absolute w-44 left-0 top-0 h-screen bg-black transition-all'>
      <div className={`absolute w-72 left-0 top-0 h-screen bg-black transition-all duration-300 ease-linear`}>
        <div className='border-2 border-white flex items-center justify-between bg-white text-black px-4'>
          <b>FAVOUSER</b>
          <AiOutlineClose className='cursor-pointer mx-5 my-5 text-2xl font-extrabold border border-black rounded-sm self-end' onClick={()=>setOpen(false)}/>
        </div>
        <div className='flex flex-col px-4 gap-6 py-6'>
          <b>HOME</b>
          <b>CATEGORY</b>
          <b>BLOG</b>
          <b>CONTACT</b>
        </div>
      </div>
      }
    </div>
    </div>
  )
}

export default Navbar
