import React, { useEffect, useState } from 'react'
import { makeApiRequest } from '../../utils/makeRequest'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import Order from '../../components/Order/Order'
import GlobalLoader from '../../components/GlobalLoader'

const Myorders = () => {
  // const [orders, setOrders] = useState([])

  const token = useSelector((state) => state.user?.currentUser.token)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  const api = makeApiRequest(token)


  useEffect(() => {
    window.scrollTo(0, 0)

    const getAllOrders = async () => {
      setLoading(true)
      try {
        const response = await api.get('/api/v1/orders/')
        // console.log(response)
        let orders = response?.data || []
        orders = orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        setOrders(orders)
        setLoading(false)
        // setOrders(response.data)
      } catch (err) {
        console.log(err)
        setLoading(false)

      }
    }
    getAllOrders()
  }, [])

  return (
    <>
    {loading ?
    <GlobalLoader />
    :
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
    }
    </>
  )
}

export default Myorders
