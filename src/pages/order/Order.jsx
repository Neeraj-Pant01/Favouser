import React, { useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import OrderSummary from '../../components/orderSummary/OrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import { address } from '../../redux/DeliveryInfo'
import { makeApiRequest } from '../../utils/makeRequest'

const Order = () => {
    const [itemQuantity, setItemQuantity] = useState(1)
    const [editAddress, setEditAddress] = useState(false)
    const [loading, setLoading] = useState(false)

    const user = useSelector((state)=>state.user.currentUser)
    const token = useSelector((state)=>state.user.currentUser.token)
    const del = useSelector((state)=>state.delivery.userAddress)

    const api = makeApiRequest(token)

    const navigate = useNavigate()

    const addressDetail = useSelector((state)=>state.delivery.userAddress)
    const dispatch = useDispatch()

    const [orderDetails, setOrderDetails] = useState({
        area:addressDetail?.area,
        state:addressDetail?.state,
        address:addressDetail?.address,
        pincode:addressDetail?.pincode,
        landmark:addressDetail?.landmark,
        mobileNumber:addressDetail?.mobileNumber,
    })

    const location = useLocation()

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setOrderDetails((pre)=>{
            return{
                ...pre, [name]:value
            }
        })
    }

    const confirmAddress = () =>{
        dispatch(address(orderDetails))
        setEditAddress(false)
    }

    const placeOrder = async () =>{
        setLoading(true)
        try{
            const response = await api.post(`/api/v1/orders/order/${location.state.product._id}`,{
                quantity:itemQuantity,
                size:location.state[0],
                ...del
            })
            console.log(response)
            setLoading(false)
            navigate(`/order/successfull`)
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div className='flex flex-col border bg-[#f6f4f4]'>
            <div className='flex items-center border-b-2 sticky top-0 bg-[white] z-50'>
                <h1 className='text-[grey] py-4 cursor-pointer md:text-2xl font-bold mx-10' onClick={() => navigate('/')}>FAVOUSER</h1>
            </div>
            <div className='flex flex-wrap md:px-36 mt-8'>
                <div className='flex-1 flex-col px-14'>
                    <div className='border-2 bg-[white] pb-4 flex flex-col gap-2'>
                        <h1 className='bg-[#ff8000] text-[black] px-5 py-2'>DELIVERY ADDRESS</h1>
                        <div className='flex flex-col px-4 gap-3'>
                            <div className='flex items-center gap-5 justify-between text-[grey]'>
                                <div className='flex md:items-center flex-col md:flex-row md:gap-4 text-[black]' >
                                    <span>{user.username}</span>
                                    <span>{addressDetail?.mobileNumber}</span>
                                </div>
                                {
                                    !editAddress &&
                                    <button className='px-2 text-[black] border-b-2 border-[#ff8000]' onClick={() => setEditAddress(true)}>EDIT</button>
                                }
                            </div>
                            {
                                !editAddress &&
                                <p className='font-thin mb-3'>
                                    {
                                        orderDetails?.address + " , " + orderDetails?.landmark + " , " + orderDetails?.area + " , " + orderDetails?.pincode + " , " + orderDetails?.state
                                    }
                                </p>
                            }

                            {
                                editAddress &&
                                <div className='flex flex-col gap-3'>
                                    <select className='outline-none bg-transparent border border-[#51b4cb] py-2 px-4 rounded-md text-sm md:w-96 text-[grey]' name='state' value={orderDetails.state} onChange={handleChange}>
                                        <option defaultValue={"select state"} disabled>select state</option>
                                        <option value={"Delhi"}>Delhi</option>
                                    </select>
                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter Area' value={orderDetails.area} name='area' onChange={handleChange} />

                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter Address line' value={orderDetails.address} name='address' onChange={handleChange} />

                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter pin code'
                                        value={orderDetails?.pincode}
                                        name='pincode' onChange={handleChange} />

                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter nearest landmark' name='landmark'
                                        value={orderDetails?.landmark}
                                        onChange={handleChange} />

                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter mobile Number' name='mobileNumber'
                                    value={orderDetails?.mobileNumber}
                                        onChange={handleChange} />

                                    <button className='text-[black] rounded-md w-fit py-2 px-2 bg-[#ff8000] mt-4' onClick={confirmAddress}>CONFIRM</button>
                                </div>

                            }
                        </div>
                    </div>
                    <div className='border-2 bg-[white] mb-5 flex flex-col mt-5'>
                        <h1 className='bg-[#ff8000] text-[black] px-4 py-2'>ORDER SUMMARY</h1>
                        <OrderSummary product={location.state} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} orderDetails={orderDetails} setOrderDetails={setOrderDetails}/>
                    </div>
                </div>
                <div className='border w-96 bg-[white] md:sticky md:top-16 h-80 flex gap-2 flex-col px-5 py-4'>
                    <h1 className='text-[grey] mb-5'>PRICE DETAILS</h1>
                    <div className='flex items-center justify-between'>
                        <span className='font-thin'>Price</span>
                        <span className='md:text-xl font-thin'>{itemQuantity * location.state?.product.price}</span>
                    </div>
                    <div className='flex items-center justify-between mb-5'>
                        <span className='font-thin'>Delivery Charges</span>
                        <span className='md:text-xl font-light text-[green]'>Free</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Total Payable</span>
                        <span className='md:text-xl'>₹{itemQuantity * location.state?.product.price}</span>
                    </div>
                    <button className='bg-[#ff8000] text-[black] cursor-pointer mt-9 py-2 rounded-md' onClick={placeOrder}>{loading ? "Loading..." : "PLACE ORDER"}</button>
                </div>
            </div>
        </div>
    )
}

export default Order
