import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/homepage/Homepage'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Cart from './pages/cart/Cart'
import AllProducts from './pages/allProducts/AllProducts'
import Footer from './components/footer/Footer'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"

function App() {

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
        element: <Cart />
      }
    ]
  }])
  return (
    <RouterProvider router={router} />
  )
}

export default App
