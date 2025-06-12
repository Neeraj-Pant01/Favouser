import React, { useEffect, useState } from 'react'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Bestpics from '../../components/bestPics/Bestpics'
import Homebottom from '../../components/bottom/Homebottom'
import Missed from '../../components/missed/Missed'
import Tshirt from '../../components/SingleTshirt/Tshirt'
import BestSellings from '../../components/BestSellings/BestSellings'
import Accessories from '../../components/accessories/Accessories'
import { useDispatch, useSelector } from 'react-redux'
import { makeApiRequest } from '../../utils/makeRequest'
import SaleTags from '../../components/Sales'
import ShowSale from '../../components/ShowSale'
import PromoGrid from '../../components/PromoCard'
import BestProduct from '../../components/BestProducts'
import BestSelling from '../../components/BestSelling'
import FavoUser from '../../components/FavoUser'
import ScrollButton from '../../components/ScrollButton'
import { userCart } from '../../redux/CurrentUserCart'
import { setCartFromDB } from '../../redux/CartSlice'
import { setWishlistFromDB } from '../../redux/wishlistSlice'
import { toast } from 'react-toastify'

const images = [
  {
    img: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    desc: ""
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664869376894-9e047086bb46?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    desc: ""
  }, {
    img: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    desc: ""
  }, {
    img: "https://images.unsplash.com/photo-1517267367903-519607b9060c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    desc: ""
  }
]

const Homepage = () => {
  const [showProducts, setShowProducts] = useState([])
  const dispatch = useDispatch()

  const token = useSelector((state) => state.user?.currentUser?.token)

  const api = makeApiRequest(token)


  const fetchWishlist = async () => {
    if(!token){
      return
    }
    try {
      const response = await api.get(`/api/v1/wishlist`)
      dispatch(setWishlistFromDB(response.data))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getproducts = async () => {
      try {
        // const response = await api.get('/api/v1/products?show=true')
        // setShowProducts(response.data)
        // console.log("tshirts",response)
      } catch (err) {
        console.log(err)
      }
    }
    getproducts()
  }, [])


  useEffect(() => {
    const getCart = async () => {
      if (token) {
        try {
          const response = await api.get('/api/v1/cart')
          // console.log('db fetched cart is', response.data)
          if (response.status === 200) {
            dispatch(userCart(response.data))
            dispatch(setCartFromDB(response.data))
          }
        } catch (err) {
          console.log(err)
        }
      } else {
        return
      }
    }
    getCart()
    fetchWishlist()
  })

  return (
    < div>
      <Navbar />
      {/* <Slider /> */}
      <ScrollButton />
      <FavoUser />
      <SaleTags />
      <ShowSale />
      <BestSelling />
      <BestProduct />
      <Accessories />
      <div className='mt-2'>
        <PromoGrid />
      </div>
    </div>
  )
}

export default Homepage
