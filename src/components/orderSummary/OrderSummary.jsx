import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const OrderSummary = ({itemQuantity, setItemQuantity, product}) => {
    return (
        <div className='flex flex-col px-4 mt-3'>
            <div className='flex flex-col md:flex-row items-center gap-4'>
                <div className='flex items-center justify-center w-28 h-28 md:w-40 md:h-40'>
                    <img className='w-28 rounded-md h-28 md:w-36 md:h-36' src={product?.product.coverImage} alt='' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-[black] font-thin'>{product?.product.productName} {product?.product.productDesc}</h1>
                    <span className='text-[grey]'>color</span>
                    <div className='flex items-center gap-3 justify-center md:justify-normal mt-4'>
                        <span className='text-[black] text-xl'>₹{Math.round(itemQuantity * product?.product.price)}</span>
                        <span className='text-[green]'>10% OFF</span>
                    </div>
                </div>
                {/* <div className=''>right</div> */}
            </div>
            <div className='flex justify-center md:justify-normal items-center gap-3 mt-3 mb-5'>
                <AiFillMinusCircle className='text-[grey] cursor-pointer text-2xl md:text-3xl'onClick={()=>{
                    if(itemQuantity > 1){
                        setItemQuantity(itemQuantity-1)
                    }
                }} style={{cursor: itemQuantity === 1 && "not-allowed", color: itemQuantity === 1 && "lightgrey"}}/>
                    <span className='border px-6 py-1 border-[black] rounded-md'>{itemQuantity}</span>
                <AiFillPlusCircle className='text-[grey] cursor-pointer text-2xl md:text-3xl' onClick={()=>{
                    if(itemQuantity <10){
                        setItemQuantity(itemQuantity +1)
                    }
                }} style={{cursor:itemQuantity === 10 && "not-allowed", color: itemQuantity === 10 && "lightgrey"}}/>
            </div>
        </div>
    )
}

export default OrderSummary
