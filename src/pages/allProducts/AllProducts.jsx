import React from 'react'
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai'
import {BsFillBookmarkFill} from "react-icons/bs"
import Tshirt from '../../components/SingleTshirt/Tshirt'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex sticky top-0 p-5 items-center justify-between bg-white'>
        <Link to={`/`}>
        <AiOutlineLeft className='text-2xl cursor-pointer'/>
        </Link>
        <div className='flex flex-col'>
            <b className='text-xs'>CATEGORIES NAME</b>
            <span className='text-xs text-[grey]'>82 items</span>
        </div>
        <div className='flex border items-center p-1 border-black rounded-md'>
            <input type='text' placeholder='search here !' className='outline-none w-32 border-0 text-sm text-[grey]'/>
            <AiOutlineSearch />
        </div>
      </div>
      <div className='flex flex-wrap justify-around'>
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
      <div className='flex items-center justify-center p-3 sticky bottom-0'>
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
