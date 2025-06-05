import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai'
import { BsFillBookmarkFill } from "react-icons/bs"
import Tshirt from '../../components/SingleTshirt/Tshirt'
import { Link, useLocation } from 'react-router-dom'
import "../../components/SingleTshirt/tshirt.css"
import Accordion from '../../customComponents/Accordion'
import { BsCart4 } from "react-icons/bs";
import { accordionData } from '../../customComponents/accordiondata'
import { useNavigate } from "react-router-dom";
import { makeApiRequest } from '../../utils/makeRequest'
import { useSelector } from 'react-redux'
import GlobalLoader from '../../components/GlobalLoader'
import { BsCartXFill } from "react-icons/bs";
import Navbar from '../../components/navbar/Navbar'


const AllProducts = () => {
  const user = true;
  const navigate = useNavigate()
  const { search } = useLocation()
  const cat = search && search?.split("=")[1];
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([]);

  let searchQuerry = search && (search?.split('?')[1].split('=')[0] == 'search')
  const token = useSelector((state) => state.user?.currentUser?.token)


  const api = makeApiRequest(token)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await api.get(`/api/v1/products?cat=${!searchQuerry ? cat : ''}&&search=${searchQuerry ? cat : ''}`);
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    fetchProducts();
  }, [cat, searchQuerry])

  return (
    <>
      {loading ? (
        <GlobalLoader />
      ) :
        <div className='flex flex-col'>
          <Navbar />
          {/* <div className='flex sticky top-0 p-5 items-center justify-between bg-white HR border-b-2 mb-2 z-50'>
            <div className='hidden md:flex gap-8 items-center ml-16'>
              <h1 className='hidden text-2xl font-extrabold md:block mr-4 cursor-pointer text-[#444444]' onClick={() => navigate('/')}>FAVOUSER</h1>
              <span className='text-[black] font-thin cat' style={{ textDecoration: cat === "men" ? "underline orange" : "" }}>MEN</span>
              <span className='text-[black] font-thin cat' style={{ textDecoration: cat === "women" ? "underline orange" : "" }}>WOMEN</span>
              <span className='text-[black] font-thin cat' style={{ textDecoration: cat === "trending" ? "underline orange" : "" }}>TENDINGS</span>
            </div>

            <AiOutlineArrowLeft className='md:hidden' onClick={() => navigate('/')} />

            <div className='flex flex-col lg:hidden'>
              <b className='text-xs'>CATEGORIES NAME</b>
              <span className='text-xs text-[grey]'>82 items</span>
            </div>

            <div className='flex border items-center p-1 border-[lightgrey] rounded-md md:w-72 lg:w-96  md:justify-between lg:justify-between'>
              <input type='text' placeholder='search here !' className='outline-none w-32 md:w-72 border-0 text-sm text-[grey]' />
              <AiOutlineSearch className='md:text-xl lg:text-2xl' />
            </div>
            <div className='md:flex items-center hidden w-52  gap-5 text-[#242323]'>
              <button className='cursor:pointer'>
                {
                  user ?
                    "LogOut"
                    :
                    "Login"
                }
              </button>
              <AiOutlineHeart className='text-2xl cursor-pointer' />
              <BsCart4 className='text-2xl cursor-pointer' onClick={() => navigate('/cart/123')} />
            </div>
          </div> */}
          
          <div className='main md:mx-4 md:justify-center'>

            <div className="left-side hidden sticky top-[10%] h-[90vh] overflow-y-auto mr-4 md:flex bg-white border border-gray-200 rounded-xl shadow-md flex-col p-5 space-y-4 custom-scrollbar">
              <h2 className="text-gray-600 text-sm font-semibold border-b pb-2">FILTER CATEGORIES</h2>

              {accordionData.map((c, i) => (
                <Accordion c={c} key={i} />
              ))}
            </div>


            <div className='flex flex-wrap my-5 justify-around right-side md:justify-start md:gap-2'>
              {
                products.length > 0
                  ?
                  products.map((p, i) => <Tshirt p={p} key={i} />)
                  :
                  <div className='flex w-full flex-col h-[70vh] items-center justify-center'>
                    <BsCartXFill className='text-8xl mb-2 text-blue-400 animate-pulse' />
                    <p>No products Found ! Try another category</p>
                    <Link to={'/'} className='text-[white] bg-[black] py-3 px-5 rounded-md mt-4 '>continue shopping</Link>
                  </div>
              }
            </div>
          </div>
          <div className='flex items-center justify-center p-3 sticky bottom-0 md:hidden'>
            <div className='flex bg-[gold] rounded-md p-2 w-full justify-between items-center'>
              <b className='text-[#228B22] text-sm flex items-center'>DAILY MEGA SALE <BsFillBookmarkFill className='text-[#228B22] text-xl' />
              </b>
              <b className='bg-[#85c085] p-2 rounded-md text-[white]'>FLAT UP TO 30% OFF</b>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AllProducts
