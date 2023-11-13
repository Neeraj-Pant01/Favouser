import React from 'react'
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai'
import {BsFillBookmarkFill} from "react-icons/bs"
import Tshirt from '../../components/SingleTshirt/Tshirt'
import { Link } from 'react-router-dom'
import "../../components/SingleTshirt/tshirt.css"

const AllProducts = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex sticky top-0 p-5 items-center justify-between bg-white HR'>
        <Link to={`/`}>
        <AiOutlineLeft className='text-2xl cursor-pointer'/>
        </Link>
        <div className='hidden md:flex gap-3 items-center'>
        <h1 className='hidden text-2xl font-extrabold md:block mr-4'>FAVOUSER</h1>
          <span className='text-[black] font-thin cat'>MEN</span>
          <span className='text-[black] font-thin cat'>WOMEN</span>
          <span className='text-[black] font-thin cat'>TENDINGS</span>
        </div>

        <div className='flex flex-col lg:hidden'>
            <b className='text-xs'>CATEGORIES NAME</b>
            <span className='text-xs text-[grey]'>82 items</span>
        </div>

        <div className='flex border items-center p-1 border-[lightgrey] rounded-md md:w-72 lg:w-96  md:justify-between lg:justify-between'>
            <input type='text' placeholder='search here !' className='outline-none w-32 md:w-72 border-0 text-sm text-[grey]'/>
            <AiOutlineSearch  className='md:text-xl lg:text-2xl'/>
        </div>
      </div>
      <div className='main md:justify-center'> 

        <div className="left-side hidden md:flex bg-[rgba(0,0,0,0.8)]">
          <h1 className='c-name md:text-xl lg:2xl text-[lightgrey]'>CATEGORY NAME</h1>
        </div>

      <div className='flex flex-wrap justify-around right-side md:justify-center md:gap-4'>
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      </div>
      </div>
      <div className='flex items-center justify-center p-3 sticky bottom-0 md:hidden'>
        <div className='flex bg-[gold] rounded-md p-2 w-full justify-between items-center'>
          <b className='text-[#228B22] text-sm flex items-center'>DAILY MEGA SALE <BsFillBookmarkFill className='text-[#228B22] text-xl'/>
          </b>
          <b className='bg-[#85c085] p-2 rounded-md text-[white]'>FLAT UP TO 30% OFF</b>
        </div>
      </div>
    </div>
  )
}

export default AllProducts
