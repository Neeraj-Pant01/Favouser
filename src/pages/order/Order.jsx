import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import OrderSummary from '../../components/orderSummary/OrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import { address } from '../../redux/DeliveryInfo'
import { loadRazorpayScript, makeApiRequest } from '../../utils/makeRequest'

import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import GlobalLoader from '../../components/GlobalLoader'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const PaymentPopup = ({ open, onClose, total, onCOD, onOnlinePay }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl text-white p-6 animate-fadeIn">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-2xl text-[#e2dcc8] hover:text-yellow-300 transition"
                    onClick={onClose}
                >
                    <IoClose />
                </button>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-[#e2dcc8] text-center mb-6">
                    Confirm Your Order
                </h2>

                {/* Total Amount */}
                <div className="flex justify-between items-center text-lg font-semibold border-t border-white/20 pt-4 mb-6">
                    <span>Total Payable:</span>
                    <span className="text-yellow-300">₹{total}</span>
                </div>

                {/* Payment Options */}
                <div className="flex flex-col gap-4">
                    {/* COD */}
                    <button
                        className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg shadow-md transition"
                        onClick={onCOD}
                    >
                        <FaMoneyBillWave size={20} />
                        Cash on Delivery
                    </button>

                    {/* Online Payment */}
                    <button
                        className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition"
                        onClick={onOnlinePay}
                    >
                        <FaCreditCard size={20} />
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};



const Order = () => {
    const [itemQuantity, setItemQuantity] = useState(1)
    const [editAddress, setEditAddress] = useState(false)
    const [loading, setLoading] = useState(false)

    const user = useSelector((state) => state.user.currentUser)
    const token = useSelector((state) => state.user.currentUser.token)
    const del = useSelector((state) => state.delivery.userAddress)
    const [paymentModePopup, SetpaymentModelPopup] = useState(false)

    const api = makeApiRequest(token)

    const navigate = useNavigate()

    const addressDetail = useSelector((state) => state.delivery.userAddress)
    const dispatch = useDispatch()

    const [orderDetails, setOrderDetails] = useState({
        area: addressDetail?.area,
        state: addressDetail?.state,
        address: addressDetail?.address,
        pincode: addressDetail?.pincode,
        landmark: addressDetail?.landmark,
        mobileNumber: addressDetail?.mobileNumber,
    })

    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }

    const confirmAddress = () => {
        dispatch(address(orderDetails))
        setEditAddress(false)
    }

    const placeOrder = async (mode, razorpayResponse = null) => {
        setLoading(true);
        try {
            const payload = {
                quantity: itemQuantity,
                paymentMode: mode,
                size: location.state[0] || 'NA',
                ...del,
            };
            if (razorpayResponse) {
                payload.razorpayOrderId = razorpayResponse.razorpay_order_id;
                payload.razorpayPaymentId = razorpayResponse.razorpay_payment_id;
                payload.razorpaySignature = razorpayResponse.razorpay_signature;
            }
            const response = await api.post(`/api/v1/orders/order/${location.state.product._id}`, payload);
            setLoading(false);
            navigate(`/order/successfull`);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const openPopup = () => {
        SetpaymentModelPopup(true)
    }

    const closePopup = () => {
        SetpaymentModelPopup(false)
    }

    const handleCOD = () => {
        closePopup()
        placeOrder("COD")
    }

    const handleOnlinePay = async () => {
        closePopup();

        // 1. Load Razorpay script
        const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // 2. Create order on your backend (this will also create a Razorpay order)
        let orderData, razorpayOrder;
        try {
            const payload = {
                quantity: itemQuantity,
                paymentMode: "Razorpay",
                size: location.state[0] || 'NA',
                ...del,
            };
            const response = await api.post(`/api/v1/orders/order/${location.state.product._id}`, payload);
            orderData = response.data.order;
            razorpayOrder = response.data.razorpayOrder;
        } catch (err) {
            alert("Failed to create order. Try again.");
            return;
        }

        // 3. Open Razorpay checkout
        const options = {
            key: import.meta.env.VITE_APP_RZRPAYKEY,
            // key:' rzp_test_r4dPSKs9zdx3UV',
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            name: "FAVOUSER",
            description: "Order Payment",
            order_id: razorpayOrder.id,
            handler: function (response) {
                // Call your backend to verify payment and update order
                placeOrder("Razorpay", response);
            },
            prefill: {
                name: user.username,
                email: user.email,
                contact: addressDetail?.mobileNumber,
            },
            theme: {
                color: "#e2dcc8",
            },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };



    return (
        <>
            {loading ?
                <GlobalLoader />
                :
                <div className='flex flex-col border bg-[#f6f4f4]'>
                    <div className='flex p-3 px-5 cursor-pointer items-center border-b-2 sticky top-0 bg-[white] z-50'>
                        <Link>                                <AiOutlineArrowLeft className='font-extrabold text-2xl text-[black] cursor-pointer' />
                        </Link>
                        <img src='/lb.png' className='w-[150px] ml-3' onClick={() => navigate('/')} />
                    </div>
                    <div className='flex flex-wrap md:px-36 mt-8'>
                        <div className='flex-1 flex-col px-14'>
                            <div className='border-2 bg-[white] pb-4 flex flex-col gap-2'>
                                <h1 className='bg-[#e2dcc8] text-[black] px-5 py-2'>DELIVERY ADDRESS</h1>
                                <div className='flex flex-col px-4 gap-3'>
                                    <div className='flex items-center gap-5 justify-between text-[grey]'>
                                        <div className='flex md:items-center flex-col md:flex-row md:gap-4 text-[black]' >
                                            <span>{user.username}</span>
                                            <span>{addressDetail?.mobileNumber}</span>
                                        </div>
                                        {
                                            !editAddress &&
                                            <button className='px-2 text-[#0f3d3e] border-b-2 border-[#0f3d3e]' onClick={() => setEditAddress(true)}>EDIT</button>
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

                                            <button className='text-[black] rounded-md w-fit py-2 px-2 bg-[#e2dcc8] mt-4' onClick={confirmAddress}>CONFIRM</button>
                                        </div>

                                    }
                                </div>
                            </div>
                            <div className='border-2 bg-[white] mb-5 flex flex-col mt-5'>
                                <h1 className='bg-[#e2dcc8] text-[black] px-4 py-2'>ORDER SUMMARY</h1>
                                <OrderSummary product={location.state} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} orderDetails={orderDetails} setOrderDetails={setOrderDetails} />
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
                            <button className='bg-[#e2dcc8] text-[black] cursor-pointer mt-9 py-2 rounded-md' onClick={openPopup}>{loading ? "Loading..." : "PLACE ORDER"}</button>
                        </div>
                    </div>
                    {/* Payment Mode Popup */}
                    <PaymentPopup
                        open={paymentModePopup}
                        onClose={closePopup}
                        total={itemQuantity * location.state?.product.price}
                        onCOD={handleCOD}
                        onOnlinePay={handleOnlinePay}
                    />
                </div>
            }
        </>
    )
}

export default Order
