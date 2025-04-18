import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenuFold, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import {Link, useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux"

const Navbar = () => {

  const [open, setOpen] = useState(false)
  // const [searchbar, setSearchbar] = useState(false)
  const navigate = useNavigate()

  const user = useSelector((state)=>state.user.currentUser)
  console.log(user)

  const handleSearch = () =>{
    setSearchbar(true)
  }

  return (
    <div className='sticky top-0 z-50'>
  <div className='flex items-center justify-between px-6 py-4 md:py-4 bg-[black] text-[white] relative md:overflow-hidden'>
  <AiOutlineMenuFold className='cursor-pointer text-lg md:hidden' onClick={()=>setOpen(!open)}/>

  <span className='text-black font-extrabold md:text-2xl md:text-[lightgrey] cursor-pointer' onClick={()=>navigate("/")}>FAVOUSER</span>

<div className='hidden md:flex text-[grey] items-center gap-6'>
  <Link to={`/products?cat=men`}>MEN</Link>
  <Link to={`/products?cat=women`}>WOMEN</Link>
  <Link to={`/products`}>ALL PRODUCTS</Link>
  {
    user &&
  <Link to={`/myOrders`}>My Orders</Link>
  }
</div>

<div className='hidden md:flex items-center bg-[white] w-96 text-[black] rounded-md py-1 border border-[grey]'>
      <input type='text' placeholder='search here..' className='px-4 w-full bg-[transparent] outline-none placeholder:text-black placeholder:font-light font-light text-[black]'/>
      <AiOutlineSearch className='text-xl mr-3' />
    </div>

  <div className='flex items-center gap-2'>
  <div className='flex items-center justify-center w-7 h-7 border rounded-full md:hidden'>
  <AiOutlineSearch onClick={handleSearch}/>
  </div>
  <div className='flex items-center justify-center w-7 h-7 border-2 border-[grey] rounded-full'>
  <AiOutlineUser className='md:text-2xl text-[grey] cursor-pointer'/>
  </div>
  <div className='flex items-center justify-center w-7 h-7 border-2 border-[grey] relative rounded-full cursor-pointer' onClick={()=>navigate(`/cart/${user._id}`)}>
    <span><AiOutlineShoppingCart className='md:text-2xl text-[grey]'/></span>
    <span to={`/cart/123`} className='text-white bg-red-600 absolute -right-1 md:right-0 text-xs rounded-full h-4 opacity-80 w-4 flex items-center justify-center'>2</span>
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
<div className='hidden md:flex py-5 bg-[white] text-[white] border-b-2 items-center gap-36'>
  <Link to={`/products?cat=sale`} className='text-[grey] text-l px-10'>SALE</Link>
  <Link to={`/products?cat=men`} className='text-[grey] text-l'>MEN</Link>
  <Link to={`/products?cat=women`} className='text-[grey] text-l'>WOMEN</Link>
  <Link to={`/products?cat=accessories`} className='text-[grey] text-l'>ACCESSORIES</Link>
  <Link to={`/products?cat=oversized`} className='text-[grey] text-l'>PLUS SIZE</Link>
  <Link to={`/products?cat=winterwear`} className='text-[grey] text-l'>WINTERWEAR</Link>
</div>
    </div>
  )
}

export default Navbar
