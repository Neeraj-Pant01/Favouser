import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenuFold, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import {Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [searchbar, setSearchbar] = useState(false)
  const navigate = useNavigate()

  const handleSearch = () =>{
    setSearchbar(true)
  }

  return (
    <div className='sticky top-0 z-50'>
  <div className='flex items-center justify-between px-6 py-4 md:py-4 bg-[rgba(0,0,0,0.9)] text-white relative md:overflow-hidden'>
  <AiOutlineMenuFold className='cursor-pointer text-lg md:hidden' onClick={()=>setOpen(!open)}/>
{
  searchbar ?
  <div className='flex items-center w-40'><input type='text' placeholder='search..' className='w-full text-[grey] border-0 outline-none px-2 rounded-sm text-sm py-1' /></div>
  :
  <span className='text-white font-extrabold md:text-2xl md:text-[lightgrey]'>FAVOUSER</span>
}

<div className='hidden md:flex text-[lightgrey] items-center gap-4'>
  <Link>MEN</Link>
  <Link>WOMEN</Link>
  <Link to={`/products`}>ALL PRODUCTS</Link>
</div>

<div className='hidden md:flex border items-center bg-[white] w-96 text-[grey] rounded-md py-1'>
      <input type='text' placeholder='search here..' className='px-4 w-full bg-[transparent] border-none outline-none'/>
      <AiOutlineSearch className='text-xl' />
    </div>

  <div className='flex items-center gap-2'>
  <div className='flex items-center justify-center w-7 h-7 border rounded-full md:hidden'>
  <AiOutlineSearch onClick={handleSearch}/>
  </div>
  <div className='flex items-center justify-center w-7 h-7 border rounded-full'>
  <AiOutlineUser className='md:text-2xl cursor-pointer'/>
  </div>
  <div className='flex items-center justify-center w-7 h-7 border relative rounded-full cursor-pointer' onClick={()=>navigate(`/cart/123`)}>
    <span to={`/cart/123`}><AiOutlineShoppingCart className='md:text-2xl'/></span>
    <span to={`/cart/123`} className='text-white bg-red-600 absolute right-0 text-xs rounded-full h-4 opacity-80 w-4 flex items-center justify-center'>2</span>
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
