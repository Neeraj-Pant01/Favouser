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
import { toast } from 'react-toastify'

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
    console.log(addressDetail)
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }

    const confirmAddress = () => {
        if (orderDetails.pincode.length !== 6 || orderDetails.mobileNumber.length !== 10 || !orderDetails.area || !orderDetails.state || !orderDetails.address || !orderDetails.landmark) {
            toast.warn("Please enter all details mobile number should be valid containing exactly 10 digits !");
            return;
        }else{
        dispatch(address(orderDetails))
        setEditAddress(false)
        }
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
            const response = await api.post(`/api/v1/orders/order/${location.state.product._id}`, { ...payload, userName: user?.username, email: user?.email });
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
        setLoading(true);

        try {
            // 1. First create the order in your system (status: pending)
            const orderPayload = {
                quantity: itemQuantity,
                paymentMode: "Razorpay",
                size: location.state[0] || 'NA',
                ...del,
                userName: user?.username,
                email: user?.email
            };

            const orderResponse = await api.post(
                `/api/v1/orders/order/${location.state.product._id}`,
                orderPayload
            );

            const { order } = orderResponse.data;

            // 2. Load Razorpay script
            const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                setLoading(false);
                return;
            }

            // 3. Open Razorpay checkout
            const options = {
                key: import.meta.env.VITE_APP_RZRPAYKEY,
                amount: order.amount * 100, // Convert to paise
                currency: "INR",
                name: "FAVOUSER",
                description: "Order Payment",
                order_id: order.razorpayOrderId,
                handler: async function (razorpayResponse) {
                    setLoading(true);
                    try {
                        // 4. Verify payment and update order
                        const verificationResponse = await api.post('/api/v1/orders/verify-payment', {
                            order_id: order._id,
                            payment_id: razorpayResponse.razorpay_payment_id,
                            signature: razorpayResponse.razorpay_signature,
                            user
                        });

                        // 5. On successful verification, navigate to success page
                        navigate('/order/successfull', {
                            state: {
                                fromPayment: true,
                                orderId: order._id
                            }
                        });
                    } catch (error) {
                        console.error("Payment verification failed:", error);
                        alert("Payment verification failed. Please contact support.");
                    } finally {
                        setLoading(false);
                    }
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

        } catch (err) {
            console.error("Order creation failed:", err);
            alert("Failed to create order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const [show, setShow] = useState(false)

    const getLocationByPinCode = async () => {
        try {
            // setOrderDetails({ ...orderDetails, pincode: e.target.value });
            const response = await fetch(`https://api.postalpincode.in/pincode/${orderDetails.pincode}`);
            console.log(orderDetails.pincode)
            const data = await response.json();

            if (data[0].Status === "Success") {
                const po = data[0].PostOffice[0];
                // console.log("District:", po.District);
                // console.log("State:", po.State);
                // console.log("city", po.Block);
                setShow(false)
                setOrderDetails({ ...orderDetails, area: po.Block || po.Name, state: po.State, district: po.District });

                return {
                    status: data[0].Status,
                    district: po.District,
                    state: po.State,
                    city: po.Block || po.Name, // fallback if Block is null
                };
            } else {
                console.error("Invalid pincode");
                setShow(true)
                return null;
            }
        } catch (error) {
            console.error("Error fetching location by pincode:", error);
            setShow(true)
            return null;
        }
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
                                            <div className="flex items-center gap-3">
                                                <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter pin code'
                                                    value={orderDetails?.pincode}
                                                    name='pincode' onChange={handleChange} />
                                                <button className='text-[white] bg-blue-400 px-2 py-1 rounded-md' onClick={getLocationByPinCode}>check</button>
                                            </div>
                                            {
                                                show && <span className="text-sm text-red-600 ml-1">Enter a valid pin code</span>
                                            }
                                            <input className='outline-none bg-transparent border border-[#51b4cb] py-2 px-4 rounded-md text-sm md:w-96 text-[grey]' name='state' value={orderDetails.state} />
                                            <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter city/Area' value={orderDetails.area} name='area' />

                                            <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter Address line' value={orderDetails.address} name='address' onChange={handleChange} />



                                            <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter nearest landmark' name='landmark'
                                                value={orderDetails?.landmark}
                                                onChange={handleChange} />

                                            <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter mobile Number' name='mobileNumber'
                                                value={orderDetails?.mobileNumber}
                                                maxLength={10}
                                                minLength={10}
                                                pattern="\d{10}"
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
