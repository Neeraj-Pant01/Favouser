import React from 'react'
import Homepage from './pages/homepage/Homepage'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Cart from './pages/cart/Cart'
import AllProducts from './pages/allProducts/AllProducts'
import Footer from './components/footer/Footer'
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom"
import Login from './pages/login/Login'
import Order from './pages/order/Order'
import CompleteOrder from './pages/completeOrder/CompleteOrder'
import { useSelector } from 'react-redux'
import Myorders from './pages/myorders/Myorders'

function App() {
  const user = useSelector((state)=>state.user?.currentUser)

  const Layout = () =>{
    return (
      <>
      <Outlet />   
      <Footer />
      </>
    )
  }

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/products',
        element: <AllProducts />
      },
      {
        path: '/product/:id',
        element: <SingleProduct />
      },
      {
        path: '/cart/:id',
        element:user ? <Cart /> : <Navigate to={'/login'} />
      },
      {
      path: '/order',
      element: user ? <Order /> : <Navigate to={'/login'} />
      },
      {
        path: '/order/successfull',
        element:user ? <CompleteOrder /> : <Navigate to={'/login'} />
      },
      {
        path: '/myOrders',
        element:user ? <Myorders /> : <Navigate to={'/login'} />
      }
    ]
  },{
    path: '/login',
    element:!user ? <Login /> : <Navigate to={'/'} />
  }])
  return (
    <RouterProvider router={router} />
  )
}

export default App
