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
import FilterSidebar from '../../components/FilterSidebar'
import { FiFilter } from 'react-icons/fi'
import { GiCrossMark } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'


const AllProducts = () => {
  const user = true;
  const navigate = useNavigate()
  const { search } = useLocation()
  const cat = search && search?.split("=")[1];
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

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
        const response = await api.get(`/api/v1/products?category=${!searchQuerry ? cat : ''}&&search=${searchQuerry ? cat : ''}`);
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
          {!mobileFilterOpen &&
          <div className="flex sticky top-20 z-[70] md:hidden items-center justify-end px-4 mt-2">
            <button
              className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded shadow"
              onClick={() => setMobileFilterOpen(true)}
            >
              <FiFilter className="text-xl" />
              <span className="font-semibold">Filters</span>
            </button>
          </div>
      }
          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="fixed overflow-y-auto inset-0 z-50 flex">
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-40"
                onClick={() => setMobileFilterOpen(false)}
              />
              {/* Sidebar */}
              <div className="relative bg-white w-4/5 max-w-xs min-h-full h-max shadow-lg animate-slideInLeft z-50">
                <div className="flex justify-between items-center p-4 border-b">
                  <span className="font-bold text-lg">Filters</span>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <MdClose className="text-2xl" />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}
          <div className='main md:mx-4 md:justify-center'>

            <div className="left-side hidden sticky top-[10%] h-[90vh] overflow-y-auto mr-4 md:flex bg-white border border-gray-200 rounded-xl shadow-md flex-col p-5 space-y-4 custom-scrollbar">
              <FilterSidebar />
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
          <div className='flex z-[992] items-center justify-center p-3 sticky bottom-0 md:hidden'>
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
