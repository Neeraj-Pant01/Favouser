import React, { useEffect, useState } from 'react'
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
import BestSellings from '../../components/BestSellings/BestSellings'
import Accessories from '../../components/accessories/Accessories'
import { useDispatch, useSelector } from 'react-redux'
import { makeApiRequest } from '../../utils/makeRequest'
import SaleTags from '../../components/Sales'
import ShowSale from '../../components/ShowSale'
import PromoGrid from '../../components/PromoCard'
import BestProduct from '../../components/BestProducts'
import BestSelling from '../../components/BestSelling'
import FavoUser from '../../components/FavoUser'
import ScrollButton from '../../components/ScrollButton'

const images = [
  {
      img: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      desc: ""
  },
  {
      img: "https://plus.unsplash.com/premium_photo-1664869376894-9e047086bb46?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      desc: ""
  }, {
      img: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      desc: ""
  }, {
      img: "https://images.unsplash.com/photo-1517267367903-519607b9060c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      desc: ""
  }
]

const Homepage = () => {
  const [showProducts, setShowProducts] = useState([])
  const dispatch = useDispatch()

  const token = useSelector((state)=>state.user?.currentUser?.token)

  const api = makeApiRequest(token)

  useEffect(()=>{
    const getproducts = async () =>{
      try{
        const response = await api.get('/api/v1/products?show=true')
        setShowProducts(response.data)
        console.log("tshirts",response)
      }catch(err){
        console.log(err)
      }
    }
    getproducts()
  },[])

const [cart, setCart] = useState()

useEffect(()=>{
  const getCart = async () =>{
    try{
      const response = await api.get('/api/v1/cart')
      dispatch(response.data)
    }catch(err){
      console.log(err)
    }
  }
  getCart()
})

  return (
    < div>
    <Navbar />
    {/* <Slider /> */}
    <ScrollButton />
    <FavoUser />
    <SaleTags />
    <ShowSale />
    <BestSelling />
    <BestProduct />
    <Accessories />
    <div className='mt-2'>
      <PromoGrid />
    </div>
    {/* <Categories /> */}

    {/* <div className='mt-10 flex flex-col overflow-x-hidden md:min-h-80'>
      <h1 className='text-center my-5 md:text-4xl text-2xl font-bold tracking-wider text-gray-800'>DESIGNS OF THE WEEK</h1>
      <div className='flex items-center justify-between bg-gradient-to-r from-gray-900 to-black text-white md:h-[500px] relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/assets/d3black.png")] bg-center bg-no-repeat opacity-10'></div>
        <div className='flex items-center justify-between w-full px-4 md:px-12 relative z-10'>
          <div className='hidden md:flex flex-col items-start space-y-4 md:space-y-8'>
            <span className='text-4xl md:text-7xl font-bold tracking-tight'>DESIGNS</span>
            <span className='text-2xl md:text-4xl font-light tracking-wider'>OF THE</span>
            <span className='text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600'>WEEK</span>
          </div>
          <div className='flex-shrink-0 mx-4 md:mx-8'>
            <img src='/assets/d1w.png' className='w-32 md:w-64 h-auto object-contain' alt='Featured Design' />
          </div>
          <div className='flex flex-col items-end space-y-4 md:space-y-8'>
            <span className='text-4xl md:text-7xl font-bold tracking-tight'>TREND</span>
            <span className='text-2xl md:text-4xl font-light tracking-wider'>OF THE</span>
            <span className='text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600'>MONTH</span>
          </div>
        </div>
      </div>
    </div> */}
    {/* <div className='flex bg-[#3fc3bc] items-center justify-between md:justify-around'>
      <div className='flex flex-col p-2'>
        <span className='text-black w-32 text-xs md:text-3xl md:text-[white] md:font-bold'>DAILY BLOCKBUSTER DEALS</span>
      </div>
      <div className='flex items-center justify-center text-xs bg-[goldenrod] md:text-2xl h-fit p-3'>FLAT 30% OFF</div>
      <img src='/assets/d94.png' className='flex w-24 md:w-40'/>
    </div> */}

    {/* <div className='flex mt-12 flex-col'>
      <h1 className='text-xl text-center font-bold w-full text-[grey] mb-2 md:text-2xl'>BEST SELLINGS</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 overflow-hidden gap-2 md:gap-6 px-1 md:px-3'>

        <BestSellings/>
        <BestSellings />
        <BestSellings />
        <BestSellings />
        <BestSellings />
        <BestSellings />

      </div>
    </div> */}

    {/* <div className='flex mt-10 flex-col mb-4'>
      <h1 className='text-center  w-full text-[black] text-lg font-bold md:text-2xl'>EXPLORE WHATS NEW HERE</h1>
      <div className='flex items-center justify-center bg-[] py-2'>
        <Bestpics />
      </div>
    </div> */}

    {/* <div className='bestPics'>
      <h1 className='text-[black] w-full text-center text-lg font-bold md:text-2xl'>OUR BEST PICKS</h1>
      <div className='pics'>
      {
        images.map((item,index)=>{
          return(
            <Homebottom item={item} key={index}/>
        )
        })
      }
      </div>
    </div> */}
    {/* <Accessories />
    <Missed /> */}
    {/* <div className='buy-now'>
      <h1 className='w-full text-center md:text-3xl'>SHOP NOW WITH EXCLUSIVE OFFERS</h1>
      {
        showProducts.map((p)=><Tshirt key={p._id} p={p} />)
      }
    </div> */}
    </div>
  )
}

export default Homepage
