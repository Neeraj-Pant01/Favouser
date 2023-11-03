import React from 'react'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()
  return (
    < div className='border border-e-red-800 w-screen'>
    <Navbar />
    <Slider />
    <Categories />

    <div className='mt-10 flex flex-col overflow-x-hidden'>
      <h1 className='text-center text-xl'>DESIGNS OF THE WEEK</h1>
      <div className='flex items-center justify-between bg-[black] text-[white]'>
        <div className='flex items-center justify-between border-r-2 flex-1 py-1'>
          <img src='/assets/d8white.png' className='flex w-28'/>
          <div className='flex flex-1 flex-col items-end'>
            <span>DESIGNS </span>
          </div>
        </div>
        <div className='flex items-center justify-between flex-1'>
            <span className='text-xs flex items-center'>ofThe <span className='flex text-lg'>WEEK</span></span>
        <img src='/assets/back (2).png' className='flex w-28'/>
        </div>
      </div>
    </div>
    <div className='flex bg-[#3fc3bc] items-center justify-between'>
      <div className='flex flex-col p-2'>
        <span className='text-black w-32 text-xs'>DAILY BLOCKBUSTER DEALS</span>
      </div>
      <div className='flex items-center justify-center text-xs bg-[goldenrod] h-fit p-3'>FLAT 30% OFF</div>
      <img src='/assets/d94.png' className='flex w-24'/>
    </div>

    <div className='flex mt-12 flex-col'>
      <h1 className='text-xl text-center font-bold w-full underline border-[red]'>BEST SELLINGS</h1>
      <div className='grid grid-cols-2 w-screen overflow-hidden'>
        <div className='flex bg-[url("/assets/d2b.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 cursor-pointer' onClick={()=>navigate(`/product/123`)}>
        </div>

        <div className='flex bg-[url("/assets/d1w.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 cursor-pointer' onClick={()=>navigate(`/product/123`)}>
        </div>
        <div className='flex bg-[url("/assets/d3w.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 cursor-pointer' onClick={()=>navigate(`/product/123`)}>
        </div>

        <div className='flex bg-[url("/assets/d1b.png")] bg-cover bg-no-repeat items-center justify-center text-[black] h-32 cursor-pointer' onClick={()=>navigate(`/product/123`)}>
        </div>

        <div className='flex bg-[url("/assets/d3black.png")] bg-cover bg-no-repeat items-center justify-center text-[black] h-32 cursor-pointer' onClick={()=>navigate(`/product/123`)}>
        </div>

        <div className='flex bg-[url("/assets/d5white.png")] bg-cover bg-no-repeat items-center justify-center text-[black] h-32 cursor-pointer' onClick={()=>navigate(`/product/123`)}>
        </div>
      </div>
    </div>


    <div className='flex mt-10'>
      <h1 className='text-center w-full'>EXPLORE WHATS NEW HERE</h1>
    </div>
    </div>
  )
}

export default Homepage
