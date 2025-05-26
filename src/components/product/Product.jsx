import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { makeApiRequest } from '../../utils/makeRequest'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/CartSlice'

const Product = ({ c, setCart, cart }) => {
    const [item, setItem] = useState()
    const token = useSelector((state) => state.user.currentUser.token)
    const dispatch = useDispatch()

    const api = makeApiRequest(token)

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await api.get(`/api/v1/products/${c?._id}`)
                setItem(response?.data)
                // console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
        fetchItem()
    }, [])


    const removeCartItem = async () => {
        try {
            const response = await api.put(`/api/v1/cart/remove/${c?._id}`);
            setCart(cart.filter((itm)=>itm?._id !== c?._id))
            dispatch(removeFromCart({id:c?._id}))
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='flex flex-col gap-2 border mb-1'>
            <div className='flex py-1 px-1'>
                <div className='flex w-28'>
                    <img src={item?.coverImage} className='w-full' />
                </div>
                <div className='flex flex-1 flex-col md:ml-2'>
                    <Link className=' w-fit' to={`/`}>{item?.productName}</Link>
                    <p className='text-[grey] font-light'>{item?.productDesc?.substring(0, 60)}...</p>
                </div>
                <AiOutlineClose className='text-xl cursor-pointer' onClick={removeCartItem} />
            </div>
            <div className='flex px-2 gap-5 items-center'>
                {/* <span className='bg-[#d2e4eb] px-3 py-1 text-xs h-fit'>SIZE: XL</span> */}
                <select className='bg-[#d2e4eb] px-3 py-1 text-xs outline-none h-fit'>
                    <option>1</option>
                </select>
                <div className='flex flex-col items-end justify-end flex-1'>
                    <div className='flex items-center gap-2'>
                        <span className='text-lg'>₹ {item?.price}</span>
                        <span className='text-[grey] line-through'>₹ {item?.price + (Math.round(item?.price * 0.30))}</span>
                    </div>
                    <p className='text-[green]'>you saved {Math.round(item?.price * 0.303)}</p>
                </div>
            </div>
        </div>
    )
}

export default Product
