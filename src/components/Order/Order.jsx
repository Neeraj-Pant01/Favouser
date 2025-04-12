import React, { useEffect, useState } from 'react'
import { makeApiRequest } from '../../utils/makeRequest'
import { useSelector } from 'react-redux'

const Order = ({o}) => {
    const [item, setItem] = useState()

    const token = useSelector((state)=>state.user?.currentUser.token)

    const api = makeApiRequest(token)
    useEffect(()=>{
        const getSingleOrder = async () =>{
            try{
                const response = await api.get(`/api/v1/products/${o.productId}`)
                // console.log(response)
                setItem(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getSingleOrder()
    },[])
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:px-5 md:border-2 py-4 items-center md:items-start'>
      <img className='w-[150px] h-[150px]' src={o.productImage} alt='' />
      <div className='flex flex-col'>
        <b>{item?.productName}</b>
        <div className='flex items-center gap-5 text-[grey]'>
            {o?.color && <span>color: {o?.color}</span>}
            <span>size: {o?.size}</span>
        </div>
      </div>
        <span className='text-[grey]'>Amount : ₹{o.amount}</span>
        <div className='flex flex-col'>
            <div className="flex items-center gap-3">
                {
                    o?.status === ("completed" || "delivered") ?
                    <div className='w-[10px] h-[10px] rounded-full bg-[green]'></div>
                    :
                    <div className='w-[10px] h-[10px] rounded-full bg-[orange]'></div>
                }
                <span className='text-[grey]'>status : {o.status}</span>
            </div>
            {
                o?.status !== "delivered" &&
                <span className='text-[grey]'>Ordered On : {new Date(o.createdAt).toLocaleDateString()}</span>
            }
        </div>
    </div>
  )
}

export default Order
