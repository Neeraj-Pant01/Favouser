import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineVerified } from 'react-icons/ai'
import Product from '../../components/product/Product'
import { Link } from 'react-router-dom'
import {makeApiRequest} from "../../utils/makeRequest"
import { useSelector } from 'react-redux'

const Cart = () => {
  const [cart, setCart] = useState([])
  const token = useSelector((state)=>state.user.currentUser.token)

  const api = makeApiRequest(token)

  useEffect(()=>{
    const getUserCart = async () =>{
      try{
        const response = await api.get("/api/v1/cart")
        setCart(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getUserCart()
  },[])
  return (
    <div className='px-2 md:px-0'>
      <div className='sticky top-0 border items-center px-4 py-3 bg-[white] hidden md:flex'>
        <Link to={`/`}>
        <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
        </Link>
        <span className='ml-3 text-[grey] '>Cart</span>
      </div>
      <div className='flex flex-col gap-2 px-5 mb-8'>
        <p className='mt-2 font-light text-[black] md:text-xl'>items (1)</p>
      </div>

      {
        cart.length < 1 &&
        <div className='flex items-center justify-center h-screen flex-col'>
          <span>CART EMPTY</span>
          <span className='text-[grey]'>no item is added to the cart</span>
          </div>
      }

      {/* <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product /> */}

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
      <div className='flex bg-[white] fixed bottom-0 items-center justify-center px-4 py-3 w-full'>
        <div className='flex flex-col w-28 md:w-96  md:py-2 md:rounded-l-md'>
          <div className='flex items-center text-[grey] md:justify-center'>
            <span>₹</span>
            <span className='text-[black] text-xl'>699</span>
          </div>
        </div>
        <div className='flex flex-1 border'>
        <button className='bg-[black] text-[white] w-full rounded-md md:rounded-md py-2'>PROCEED</button>
        </div>
      </div>
    </div>
  )
}

export default Cart

