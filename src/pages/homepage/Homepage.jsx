import React from 'react'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Bestpics from '../../components/bestPics/Bestpics'
import Homebottom from '../../components/bottom/Homebottom'
import Missed from '../../components/missed/Missed'
import Tshirt from '../../components/SingleTshirt/Tshirt'

const Homepage = () => {
  const navigate = useNavigate()
  return (
    < div className='border'>
    <Navbar />
    <Slider />
    <Categories />

    <div className='mt-10 flex flex-col overflow-x-hidden'>
      <h1 className='text-center text-xl'>DESIGNS OF THE WEEK</h1>
      <div className='flex items-center justify-between bg-[rgba(0,0,0,0.9)] text-[white]'>
        <div className='flex items-center justify-between border-r-2 flex-1 py-1'>
          <img src='/assets/d5white.png' className='flex w-28 md:w-96 md:ml-40'/>
          <div className='flex flex-1 flex-col items-end'>
            <span className='md:text-3xl'>DESIGNS </span>
          </div>
        </div>
        <div className='flex items-center justify-between flex-1'>
            <span className='text-xs flex items-center md:text-xl'>ofThe <span className='flex text-lg md:text-3xl'>WEEK</span></span>
        <img src='/assets/d3black.png' className='flex w-28 md:w-96 md:mr-36'/>
        </div>
      </div>
    </div>
    <div className='flex bg-[#3fc3bc] items-center justify-between md:justify-around'>
      <div className='flex flex-col p-2'>
        <span className='text-black w-32 text-xs md:text-3xl md:text-[white] md:font-bold'>DAILY BLOCKBUSTER DEALS</span>
      </div>
      <div className='flex items-center justify-center text-xs bg-[goldenrod] md:text-2xl h-fit p-3'>FLAT 30% OFF</div>
      <img src='/assets/d94.png' className='flex w-24 md:w-40'/>
    </div>

    <div className='flex mt-12 flex-col'>
      <h1 className='text-xl text-center font-bold w-full text-[grey] mb-2 md:text-2xl'>BEST SELLINGS</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 overflow-hidden gap-2'>

        <div className='flex bg-[url("/assets/d2b.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center md:rounded-lg justify-center bg-[black] opacity-50'>
            <div className='flex gap-3 items-center justify-center'>
            <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

        <div className='flex bg-[url("/assets/d1w.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center md:rounded-lg justify-center bg-[black] opacity-50'>
            <div className='flex gap-3 items-center justify-center'>
            <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

        <div className='flex bg-[url("/assets/d3w.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center md:rounded-lg justify-center bg-[black] opacity-50'>
        <div className='flex gap-3 items-center justify-center'>
        <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

        <div className='flex bg-[url("/assets/d1b.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center md:rounded-lg justify-center bg-[black] opacity-50'>
        <div className='flex gap-3 items-center justify-center'>
        <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

        <div className='flex bg-[url("/assets/d2b.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center md:rounded-lg justify-center bg-[black] opacity-50'>
            <div className='flex gap-3 items-center justify-center'>
            <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

        <div className='flex bg-[url("/assets/d3black.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center justify-center md:rounded-lg bg-[black] opacity-50'>
        <div className='flex gap-3 items-center justify-center'>
        <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

        <div className='flex bg-[url("/assets/d5white.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center justify-center md:rounded-lg bg-[black] opacity-50'>
        <div className='flex gap-3 items-center justify-center'>
        <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

        <div className='flex bg-[url("/assets/d1w.png")]  bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer relative border-[blue]' onClick={()=>navigate(`/product/123`)}>
        <div className='flex absolute top-0 w-full h-full items-center md:rounded-lg justify-center bg-[black] opacity-50'>
            <div className='flex gap-3 items-center justify-center'>
            <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 '/>
            </div>
        </div>
        </div>

      </div>
    </div>

    <div className='flex mt-10 flex-col mb-4'>
      <h1 className='text-center  w-full text-[black] text-lg font-bold md:text-2xl'>EXPLORE WHATS NEW HERE</h1>
      <div className='flex items-center justify-center bg-[] py-2'>
        <Bestpics />
      </div>
    </div>

    <div className='bestPics'>
      <h1 className='text-[black] w-full text-center text-lg font-bold md:text-2xl'>OUR BEST PICKS</h1>
      <Homebottom />
    </div>
    <Missed />
    <div className='buy-now'>
      <h1 className='w-full text-center md:text-3xl'>SHOP NOW WITH EXCLUSIVE OFFERS</h1>
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
      <Tshirt />
    </div>
    </div>
  )
}

export default Homepage
