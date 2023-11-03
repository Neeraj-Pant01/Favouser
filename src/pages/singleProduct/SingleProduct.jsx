import React, { useEffect, useState } from 'react'
import {AiFillStar, AiOutlineArrowLeft, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineVerified} from 'react-icons/ai'
import {MdLocationOn,MdVerifiedUser} from "react-icons/md"
import SingleItem from '../../components/singleproduct/SingleItem'
import Size from '../../components/size/Size'
import Reviews from '../../components/reviews/Reviews'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
    const [show, setShow] = useState(false)

  return (
    <div className='bg-white'>
    <div className='bg-[white] p-3 sticky top-0 flex items-center justify-between z-50'>
        <Link to={`/`}>
        <AiOutlineArrowLeft className='font-extrabold text-2xl text-[black] cursor-pointer'/>
        </Link>
        <Link to={`/cart/123`}>
        <AiOutlineShoppingCart className='font-extrabold text-3xl text-[black] cursor-pointer'/>
        </Link>
    </div>
    <SingleItem />
    <Size />
    <div className='flex flex-col gap-2 px-5 mt-8'>
        <div className='flex flex-col gap-3'>
            <b className='text-sm flex items-center text-[#51b4cb]'>Enter Delevery Details <MdLocationOn className='text-xl text-[red]'/> </b>
            <select className='outline-none bg-transparent border border-[#51b4cb] py-2 px-4 rounded-md text-sm text-[grey]'>
            <option defaultValue={"select state"} disabled>select state</option>
                <option value={"uttarakhand"}>uttarakhand</option>
                <option value={"uttrapradesh"}>uttrapradesh</option>
                <option value={"haryana"}>haryana</option>
                <option value={"punjab"}>punjab</option>
                <option value={"Delhi"}>Delhi</option>
                <option value={"Mumbail"}>Mumbail</option>
            </select>
            <input className='border text-sm border-[#51b4cb] outline-none rounded-md py-2 px-4' type='text' placeholder='enter pin code' onFocus={()=>setShow(true)} onBlur={()=>setShow(false)}/>
            {show && <span className='text-sm text-red-600'>enter the valid pin code </span>}
        </div>
        <hr className='mt-4'></hr>
        <div className='flex items-center justify-between mt-4 mb-2'>
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
    </div>

    <hr className='mt-4'></hr>

    <div className='flex flex-col px-5 mt-2 mb-24 gap-3'>
        <b className='flex border-b-4 border-[gold] w-fit leading-8 px-2'>PRODUCT REVIEWS</b>
        <p className='flex items-center text-sm gap-2'><MdVerifiedUser className='text-[green] text-lg'/>77% of users vouch for this product</p>
        <div className='flex flex-col justify-center px-14 gap-2 w-fit self-center items-center'>
            <h1 className='text-xl'>4.6/5</h1>
            <div className='flex gap-2'>
                <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
            </div>
        </div>
        <h1 className='text-[black]'>Explore the feedback from our community members.<span className='text-[black] text-xl'>(2)</span></h1>
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />

    </div>

    <div className='flex fixed bottom-0 w-screen items-center justify-center py-4'>
       {<button className='w-80 bg-[gold] py-2 rounded-md'>ADD TO CART ₹999</button>}
    </div>
    </div>
  )
}

export default SingleProduct
