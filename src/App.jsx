import React from 'react'
import Homepage from './pages/homepage/Homepage'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Cart from './pages/cart/Cart'
import AllProducts from './pages/allProducts/AllProducts'
import Footer from './components/footer/Footer'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Login from './pages/login/Login'

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
      },
    ]
  },{
    path: '/login',
    element: <Login />
  }])
  return (
    <RouterProvider router={router} />
  )
}

export default App
