import React, { useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify'

const AddressCom = ({ setShowCheckoutModal }) => {
    const [show, setShow] = useState(false)
    const [orderDetails, setOrderDetails] = useState({
        area: "",
        state: "",
        address: "",
        pincode: "",
        landmark: "",
        mobileNumber: "",
    })

    const close = () => {
        setShowCheckoutModal(false)
    }

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((pre) => {
            return {
                ...pre, [name]: value
            }
        })
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

    return (
        <div className="flex flex-col gap-5 p-6 bg-[#ececdf]  border border-[#0f3d3e]/30 rounded-2xl shadow-2xl w-[100%] md:w-[40%] transition-all duration-300">
            <div className="flex justify-between items-end  mr-2 md:mr-4 font-bold">
                <b className="text-base font-semibold flex items-center text-[#0f3d3e] tracking-wide">
                    Enter Delivery Details <MdLocationOn className="text-xl text-red-500 ml-2" />
                </b>
                <AiFillCloseSquare onClick={close} className='text-red-700 text-3xl hover:text-red-500 cursor-pointer hover:scale-105 transition-all' />
            </div>


            <div className="flex items-center gap-3">
                <input
                    required
                    className="input-genz"
                    type="text"
                    placeholder="Enter Pin Code"
                    name="pincode"
                    onChange={handleChange}
                />
                <button
                    className="text-white px-6 py-3 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:from-orange-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50"
                    onClick={getLocationByPinCode}>
                    Check
                </button>


            </div>
            {show && <span className="text-sm text-red-600 ml-1">Enter a valid pin code</span>}

            <input
                required
                className="input-genz"
                name="state"
                type='text'
                onFocus={() => toast.info("Enter pincode to check delivery in your state !")}
                value={orderDetails.state}
            />

            <input
                required
                className="input-genz"
                type="text"
                placeholder="Enter City/Area"
                name="area"
                onFocus={() => toast.info("Enter pincode to check delivery in your city !")}
                value={orderDetails.area}
            />

            <input
                required
                className="input-genz"
                type="text"
                placeholder="Enter Address Line"
                name="address"
                onChange={handleChange}
            />

            <input
                required
                className="input-genz"
                type="text"
                placeholder="Enter Nearest Landmark"
                name="landmark"
                onChange={handleChange}
            />

            <input
                required
                className="input-genz"
                type="text"
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                maxLength={10}
                minLength={10}
                pattern="\d{10}"
                onChange={handleChange}
            />

            <div className="flex items-center gap-4 mt-2">
                <button onClick={handleOnlinePay} class="px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:from-green-500 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50">
                    Pay Now
                </button>
                <button onClick={handleCOD} class="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:from-yellow-500 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50">
                    Pay Later
                </button>
            </div>
        </div>
    )
}

export default AddressCom
