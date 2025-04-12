import React, { useEffect, useState } from 'react'
import { makeApiRequest } from '../../utils/makeRequest'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import Order from '../../components/Order/Order'

const Myorders = () => {
  const [orders, setOrders] = useState([])

  const token = useSelector((state)=>state.user?.currentUser.token)

  const api = makeApiRequest(token)


  useEffect(()=>{
    const getAllOrders = async () =>{
      try{
        const response = await api.get('/api/v1/orders/myOrders')
        console.log(response)
        setOrders(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getAllOrders()
  },[])

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-col my-10 gap-5 md:px-40'>
        {
          orders.map((o,i)=><Order key={i} o={o} />) 
        }
      </div>
    </div>
  )
}

export default Myorders
