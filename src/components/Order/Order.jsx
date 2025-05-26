import React, { useEffect, useState } from 'react'
import { makeApiRequest } from '../../utils/makeRequest'
import { useSelector } from 'react-redux'

const Order = ({ order }) => {
    const [item, setItem] = useState()

    const token = useSelector((state) => state.user?.currentUser.token)

    const api = makeApiRequest(token)
    useEffect(() => {
        const getSingleOrder = async () => {
            try {
                const response = await api.get(`/api/v1/products/${order?.productId}`)
                // console.log(response)
                setItem(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getSingleOrder()
    }, [])

    const getStatusColor = (status) => {
        switch (status) {
            case "Delivered":
                return "text-green-500 bg-green-100";
            case "Shipped":
                return "text-blue-500 bg-blue-100";
            case "Pending":
                return "text-yellow-500 bg-yellow-100";
            default:
                return "text-gray-500 bg-gray-100";
        }
    };
    return (

        <div
            key={order?.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
        >
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-[#1E1E1E]">{order?.id}</h2>
                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order?.status)}`}
                >
                    {order?.status}
                </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Date: {order?.date}</p>
            <p className="text-sm text-gray-600 mb-2">Items: {order?.items}</p>
            <p className="text-xl font-bold text-[#333]">{order?.total}</p>
            <button className="mt-4 w-full bg-[#1E1E1E] text-white py-2 rounded-lg hover:bg-[#333] transition">
                View Details
            </button>
        </div>

    )
}

export default Order
