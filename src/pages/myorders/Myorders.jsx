import React, { useEffect, useState } from 'react'
import { makeApiRequest } from '../../utils/makeRequest'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import Order from '../../components/Order/Order'

const Myorders = () => {
  // const [orders, setOrders] = useState([])

  const token = useSelector((state) => state.user?.currentUser.token)

  const api = makeApiRequest(token)

  const orders = [
    {
      id: "#ORD-1001",
      date: "May 22, 2025",
      status: "Delivered",
      total: "$129.99",
      items: 3,
    },
    {
      id: "#ORD-1002",
      date: "May 20, 2025",
      status: "Shipped",
      total: "$79.49",
      items: 2,
    },
    {
      id: "#ORD-1003",
      date: "May 18, 2025",
      status: "Pending",
      total: "$49.99",
      items: 1,
    },
  ];


  useEffect(() => {
    window.scrollTo(0,0)
    
    const getAllOrders = async () => {
      try {
        const response = await api.get('/api/v1/orders/myOrders')
        console.log(response)
        // setOrders(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllOrders()
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className="min-h-screen bg-[#F5F5F5] px-4 py-8 md:px-12 lg:px-24">
        <h1 className="text-3xl font-bold mb-8 text-[#1E1E1E]">My Orders</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            orders.map((order, i) => <Order key={i} order={order} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Myorders
