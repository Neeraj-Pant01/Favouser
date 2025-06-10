import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenuFold, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { toast } from 'react-toastify'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuerry, setSearchQuerry] = useState("")
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navigate = useNavigate()
  const user = useSelector((state) => state.user.currentUser)
  const usercart = useSelector((state) => state.cart);
  const location = useLocation();
  const wishlist = useSelector((wish) => wish.wishlist)

  const subNavItems = ['SALE', 'MEN', 'WOMEN', 'ACCESSORIES', 'BEST SELL', 'SUMMER SALE', 'NEW ARRIVALS', 'BUY 3 @999', '80% OFF']

  return (
    <div className='sticky top-0 z-50'>
      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="flex items-center px-4 py-2 bg-[black] md:hidden">
          <input
            type="text"
            autoFocus
            value={searchQuerry}
            onChange={e => setSearchQuerry(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") {
                setMobileSearchOpen(false);
                navigate(`/products?search=${searchQuerry}`);
              }
            }}
            placeholder="Search here..."
            className="flex-1 px-4 py-2 rounded-l-md outline-none text-black"
          />
          <button
            className="bg-white px-3 py-2 rounded-r-md flex items-center"
            onClick={() => setMobileSearchOpen(false)}
          >
            <AiOutlineClose className="text-black text-xl" />
          </button>
          <button
            className="ml-2 bg-yellow-500 px-3 py-2 rounded-md text-black font-bold"
            onClick={() => {
              setMobileSearchOpen(false);
              navigate(`/products?search=${searchQuerry}`);
            }}
          >
            <AiOutlineSearch />
          </button>
        </div>
      )}

      {/* Hide nav content if mobile search is open */}
      {!mobileSearchOpen && (
        <div className='flex items-center justify-between px-6 py-4 md:py-4 bg-[black] text-[white] relative overflow-visible'>
          <AiOutlineMenuFold className='cursor-pointer text-lg md:hidden' onClick={() => setOpen(!open)} />
          <img src="/finalLogo.png" alt="" className='cursor-pointer w-28 md:w-36' onClick={() => navigate("/")} />

          <div className='hidden md:flex text-[lightgrey] items-center gap-10'>
            <Link to={`/products?cat=men`}>MEN</Link>
            <Link to={`/products?cat=women`}>WOMEN</Link>
            <Link to={`/products?cat=LGBTQ+`}>LGBTQ+</Link>
            <Link to={`/products`}>ALL PRODUCTS</Link>
            {user && <Link to={`/myOrders`}>MY ORDERS</Link>}
          </div>

          <div className='hidden md:flex items-center bg-[white] w-80 text-[black] rounded-md py-1 border border-[grey]'>
            <input
              type='text'
              placeholder='search here..'
              className='px-4 w-full bg-[transparent] outline-none placeholder:text-black placeholder:font-light font-light text-[black]'
              value={searchQuerry}
              onChange={(e) => setSearchQuerry(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/products?search=${searchQuerry}`);
                }
              }}
            />
            <AiOutlineSearch className='text-xl mr-3 cursor-pointer' onClick={() => navigate(`/products?search=${searchQuerry}`)} />
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center w-7 h-7 border rounded-full md:hidden'>
              <AiOutlineSearch onClick={() => setMobileSearchOpen(true)} />
            </div>
            <div className='flex items-center justify-center w-7 h-7 border-2 border-[lightgrey] rounded-full'>
              <AiOutlineUser className='md:text-2xl text-[lightgrey] cursor-pointer' onClick={() => setUserMenuOpen((prev) => !prev)} />
              <div
                className={`absolute z-[999] right-8 top-16 min-w-[180px] shadow-md shadow-blue-300 bg-white rounded-xl py-3 transition-all duration-300 ${userMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                style={{
                  boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
                  border: '1px solid #eee',
                  backdropFilter: 'blur(2px)',
                }}
              >
                {!user ? (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-[black] hover:underline hover:text-yellow-500 underline-offset-4 decoration-orange-400 duration-300 transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/myOrders"
                      className="block px-4 py-2 text-[black] hover:underline hover:text-yellow-500 underline-offset-4 decoration-orange-400 duration-300 transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-[black] hover:underline hover:text-yellow-500 underline-offset-4 decoration-orange-400 duration-300 transition-colors"
                      onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                        setUserMenuOpen(false)
                      }}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className='flex items-center justify-center w-7 h-7 border-2 border-[lightgrey] relative rounded-full cursor-pointer' onClick={() => {
              if (user) {
                navigate(`/wishlist/${user._id}`)
              } else {
                toast.warn('Login to view your wishlist !')
              }
            }}>
              <span><AiOutlineHeart className='md:text-2xl text-[lightgrey]' /></span>
              <span className='text-white bg-red-600 absolute -right-1 md:right-0 text-xs rounded-full h-4 opacity-80 w-4 flex items-center justify-center'>{
                user ? wishlist?.quantity : 0
              }</span>
            </div>
            <div className='flex items-center justify-center w-7 h-7 border-2 border-[lightgrey] relative rounded-full cursor-pointer' onClick={() => {
              if (user) {
                navigate(`/cart/${user._id}`)
              } else {
                toast.warn('Login to view your cart !')
              }
            }}>
              <span><AiOutlineShoppingCart className='md:text-2xl text-[lightgrey]' /></span>
              {user &&
                <span className='text-white bg-red-600 absolute -right-1 md:right-0 text-xs rounded-full h-4 opacity-80 w-4 flex items-center justify-center'>{usercart?.quantity}</span>
              }
            </div>
          </div>
          {open &&
            <div className={`absolute w-72 z-[999] left-0 top-0 h-screen bg-black transition-all duration-300 ease-linear`}>
              <div className='border-2  border-white flex items-center justify-between bg-white text-black px-4'>
                <b>FAVOUSER</b>
                <AiOutlineClose className='cursor-pointer mx-5 my-5 text-2xl font-extrabold border border-black rounded-sm self-end' onClick={() => setOpen(false)} />
              </div>
              <div className='flex flex-col px-4 gap-6 py-6'>
                <Link to={'/products'}>Products</Link>
                {
                  ['men', 'women', 'lgbtq'].map((c) => <Link to={'/products?cat=' + c} key={c}>{c.toUpperCase()}</Link>)
                }
                <Link to={'/myOrders'}>My Orders</Link>

                <Link to={'/favouser/contact'}>Contact</Link>
              </div>
            </div>
          }
        </div>
      )}
      {!['/favouser/contact', '/favouser/teams'].includes(location.pathname) &&
        <div className="hidden md:flex items-center justify-between border-b border-[#e2dcc8] py-2 px-4 bg-[white]">
          {
            subNavItems.map((item, i) => <Link to={`/products?cat=${item}`} className='hover:underline hover:text-yellow-500 underline-offset-4 decoration-orange-400 transition-all duration-300' key={i}>{item}</Link>)
          }
        </div>
      }
    </div>
  )
}

export default Navbar