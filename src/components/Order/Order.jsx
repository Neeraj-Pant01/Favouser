import React, { useEffect, useState } from 'react';
import { makeApiRequest } from '../../utils/makeRequest';
import { useSelector } from 'react-redux';
import { FiX, FiTruck, FiCreditCard, FiMapPin, FiCalendar, FiPackage } from 'react-icons/fi';

const Order = ({ order }) => {
    const [item, setItem] = useState(order);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const token = useSelector((state) => state.user?.currentUser.token);
    const api = makeApiRequest(token);
    

    // console.log(order)

    const getStatusColor = (status) => {
        switch (status) {
            case "delivered":
                return "text-green-500 bg-green-100";
            case "shipped":
                return "text-blue-500 bg-blue-100";
            case "pending":
                return "text-yellow-500 bg-yellow-100";
            case "confirmed":
                return "text-yellow-500 bg-yellow-100";
            default:
                return "text-gray-500 bg-gray-100";
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold text-[#1E1E1E]">Order #{order?._id.slice(-6).toUpperCase()}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order?.status)}`}>
                        {order?.status === 'pending' ? 'confirmed' : order?.status}
                    </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Date: {formatDate(order?.createdAt)}</p>
                <p className="text-sm text-gray-600 mb-2">Quantity: {order?.quantity}</p>
                <p className="text-xl font-bold text-[#333]">₹{order?.amount}</p>
                <span className={`${order?.isPaid ? 'text-green-500' : 'text-yellow-600'} text-sm font-bold`}>
                    {order?.isPaid ? 'PAID' : 'CASH ON DELIVERY'}
                </span>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 w-full bg-[#1E1E1E] text-white py-2 rounded-lg hover:bg-[#333] transition"
                >
                    View Details
                </button>
            </div>

            {/* Order Details Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white z-10">
                            <h3 className="text-xl font-bold text-gray-800">Order Details</h3>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Product Information */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <FiPackage /> Product Details
                                    </h4>
                                    {item && (
                                        <div className="flex gap-4">
                                            <img 
                                                src={order?.productImage} 
                                                alt={item.name} 
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-gray-600 text-sm">SKU: {order?.productId.slice(-6)}</p>
                                                <p className="text-gray-600 text-sm">Quantity: {order?.quantity}</p>
                                                <p className="font-bold mt-1">₹{order?.amount}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Order Summary */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <FiCalendar /> Order Summary
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="flex justify-between md:text-sm">
                                            <span className="text-gray-600">Order ID:</span>
                                            <span className="font-medium">{order?._id}</span>
                                        </p>
                                        <p className="flex justify-between md:text-sm">
                                            <span className="text-gray-600">Order Date:</span>
                                            <span className="font-medium">{formatDate(order?.createdAt)}</span>
                                        </p>
                                        <p className="flex justify-between md:text-sm">
                                            <span className="text-gray-600">Status:</span>
                                            <span className={`font-medium ${getStatusColor(order?.status)} px-2 py-1 rounded-full text-sm`}>
                                                {order?.status === 'pending' ? 'confirmed' : order?.status}
                                            </span>
                                        </p>
                                        <p className="flex justify-between md:text-sm">
                                            <span className="text-gray-600">Payment Method:</span>
                                            <span className="font-medium">{order?.paymentMode === "COD" ? "Cash on Delivery" : "Online Payment"}</span>
                                        </p>
                                        <p className="flex justify-between font-bold border-t pt-2 mt-2">
                                            <span>Total Amount:</span>
                                            <span>₹{order?.amount}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Shipping Information */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <FiTruck /> Shipping Details
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="flex justify-between">
                                            <span className="text-gray-600">Shipping Status:</span>
                                            <span className="font-medium">
                                                {order?.isShipped ? "Shipped" : "Processing"}
                                            </span>
                                        </p>
                                        {order?.shiprocketOrderId && (
                                            <p className="flex justify-between">
                                                <span className="text-gray-600">Tracking ID:</span>
                                                <span className="font-medium">{order?.shiprocketOrderId}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Delivery Address */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <FiMapPin /> Delivery Address
                                    </h4>
                                    <div className="space-y-1">
                                        <p className="font-medium">{order?.address}</p>
                                        <p className="text-gray-600">{order?.landmark}</p>
                                        <p className="text-gray-600">{order?.area}, {order?.state}</p>
                                        <p className="text-gray-600">PIN: {order?.pincode}</p>
                                        <p className="text-gray-600">Phone: {order?.mobileNumber}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                    <FiCreditCard /> Payment Information
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-600">Payment Status</p>
                                        <p className={`font-medium ${order?.isPaid ? 'text-green-500' : 'text-yellow-600'}`}>
                                            {order?.isPaid ? 'Paid' : 'Pending'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Payment Method</p>
                                        <p className="font-medium">
                                            {order?.paymentMode === "COD" ? "Cash on Delivery" : "Online Payment"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="border-t p-4 flex justify-end sticky bottom-0 bg-white">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Order;