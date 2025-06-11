import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineArrowLeft, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineVerified } from 'react-icons/ai'
import { MdLocationOn, MdVerifiedUser } from "react-icons/md"
import SingleItem from '../../components/singleproduct/SingleItem'
import Size from '../../components/size/Size'
import Reviews from '../../components/reviews/Reviews'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { address } from '../../redux/DeliveryInfo'
import { makeApiRequest } from '../../utils/makeRequest'
import axios from 'axios'
import GlobalLoader from '../../components/GlobalLoader'
import { toast } from 'react-toastify'
import { items } from '../../redux/CartSlice'
import Navbar from "../../components/navbar/Navbar"
import { wishlistItems } from '../../redux/wishlistSlice'
import { BsBoxSeam } from 'react-icons/bs'

const SingleProduct = () => {
    const [show, setShow] = useState(false)
    const [stars, setStars] = useState(0)
    const [orderDetails, setOrderDetails] = useState({
        area: "",
        state: "Delhi",
        address: "",
        pincode: "",
        landmark: "",
        mobileNumber: "",
    })
    const [size, setSize] = useState(null)
    const [color, setColor] = useState(null)
    const [loading, setLoading] = useState(false)

    const [product, setProduct] = useState({})

    const { id } = useParams()

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const token = useSelector((state) => state.user?.currentUser?.token)
    const user = useSelector((state) => state.user?.currentUser)
    const usercart = useSelector((state) => state.cart);
    const cart = useSelector((cart) => cart.currentCart.currentUserCart)


    const api = makeApiRequest(token)


    const addToCart = async () => {
        if (!token) {
            toast.warn('login to add this item to your cart !')
            return;
        }
        const isAlreadyInCart = usercart.cartItems.some(item => item._id === product._id);

        if (isAlreadyInCart) {
            toast.info("This product is already in your cart.");
            return;
        }
        if (product) {
            try {
                const response = cart ? await api.put(`/api/v1/cart/add-product`, { productId: product._id, ...product }) : await api.post(`/api/v1/cart`, { productId: product._id, ...product })
                if (response.status === 200) {
                    dispatch(items(response.data))
                    toast.success("Product added to the cart! ");
                }
            } catch (err) {
                console.log(err)
                toast.error("Something went wrong! try again");
            }
        } else {
            toast.warn('product not found try again !')
            return;
        }
    }




    useEffect(() => {
        setLoading(true)
        const loadProduct = async () => {
            try {
                const response = await api.get(`/api/v1/products/${id}`)
                setProduct(response.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
                setProduct(null)
            }
        }
        loadProduct()
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }

    const handleOrder = () => {
        if (product?.size) {
            if (size === null) {
                toast.warn("please select size first")
            }
        } else {
            if ((orderDetails?.area && orderDetails?.address && orderDetails?.pincode && orderDetails?.landmark && orderDetails?.mobileNumber)) {
                dispatch(address(orderDetails))
                navigate('/order', {
                    state: {
                        product,
                        ...size,
                        ...color
                    }
                });
            } else {
                toast.warn('all feilds are compulsory !')
            }
        }
    }

    const demorev = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sint ipsum et magni dignissimos, corporis doloribus quis eligendi consectetur, hic soluta, culpa veniam fuga quos ea animi deserunt laborum ullam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae porro consequuntur, minima deserunt explicabo voluptatum excepturi modi reprehenderit ea distinctio! Rerum nam natus autem voluptate modi praesentium. Placeat, magnam odit."

    const wishlist = useSelector((wish) => wish.wishlist)

    const addToWishlist = async (p) => {
        if (!token) {
            toast.warn('login to add this item to your wishlist !')
            return;
        }
        const isAlreadyInCart = wishlist.wishlistItems.some(item => item._id === p._id);

        if (isAlreadyInCart) {
            toast.info("This product is already in your wishlist !");
            return;
        }

        try {
            const response = await api.post(`/api/v1/wishlist/`, { productId: p._id, ...p })
            if (response.status === 200) {
                dispatch(wishlistItems(response.data))
                toast.success("Product added to the wishlist! ");
            }
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong! try again");
        }
    }

    if (product === null) {
        return (
            <>
            <Navbar />
            <div className="bg-white rounded-xl min-h-[80vh] shadow-sm overflow-hidden flex flex-col items-center justify-center p-8 my-4">
                <BsBoxSeam className="text-6xl text-[#e2dcc8] mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-[#0f3d3e] mb-2">Product Unavailable</h2>
                <p className="text-gray-500 mb-4 text-center">
                    Sorry, this product is not available right now.<br />
                    Try exploring other amazing products!
                </p>
                <Link
                    to="/"
                    className="bg-[#e2dcc8] text-[#0f3d3e] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#0f3d3e] hover:text-[#e2dcc8] transition"
                >
                    Go to Homepage
                </Link>
            </div>
            </>
        );
    }


    return (
        <>
            {loading ?
                <GlobalLoader />
                :
                <div className='bg-white'>
                    <Navbar />
                    {/* <div className='bg-[white] p-3 sticky top-0 flex items-center justify-between z-50'>
                        <div className="flex items-center gap-4">
                            <Link to={`/products`}>
                                <AiOutlineArrowLeft className='font-extrabold text-2xl text-[black] cursor-pointer' />
                            </Link>
                            <Link to={'/'} className=''>
                                <img src="/lb.png" className='w-[150px]' alt="" />
                            </Link>
                        </div>

                        <Link to={`/cart/${user?._id}`} className='relative'>
                            <AiOutlineShoppingCart className='font-extrabold text-3xl text-[goldenrod] cursor-pointer' />
                            <div className="flex absolute items-center justify-center text-xs w-[15px] h-[15px] bg-[red] text-[white] rounded-full top-0 right-1">{usercart?.quantity}</div>
                        </Link>
                    </div> */}
                    <div className='md:flex md:gap-10'>
                        <div className='md:sticky md:w-[100%] md:top-20 md:h-fit '>
                            <SingleItem product={product} />
                        </div>
                        <div className='md:flex md:mt-5 md:w-[100%] md:flex-col '>
                            <div className="flex md:px-5 px-5 flex-col">
                                <b className='text-[#0f3d3e]'>{product?.productName}</b>
                                <p className='text-[grey] text-sm md:pr-8 text-justify'>{product?.productDesc}</p>

                                <div className="flex items-center md:mt-6">
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <b className='md:text-2xl text-[#0f3d3e]'>₹ {product.price}</b>
                                            <div className='flex md:text-xl items-center'>
                                                ₹
                                                <span className='text-[maroon] line-through'>{product?.maxPrice || Math.floor(product?.offer ? (product?.price * product?.offer) : (product?.price + (0.20 * product?.price)))}</span>
                                            </div>
                                            <h1 className='text-xl  text-[green]'>{product?.offer || "20%OFF"}</h1>

                                        </div>
                                        <p className='text-[grey]'>Inclusive of all taxes</p>
                                    </div>
                                </div>
                            </div>
                            {
                                product?.availableSizes &&
                                <Size size={size} setSize={setSize} />
                            }
                            {Array.isArray(product?.avilableColors) && product.avilableColors.length > 0 && <b className='px-5 mt-20 md:mt-4 text-sm mb-2 text-[#0f3d3e]'>Available Colors</b>}
                            {Array.isArray(product?.avilableColors) && product.avilableColors.length > 0 && (
                                <div className="flex mt-5 md:mt-0 flex-wrap gap-3 px-5">
                                    {product.avilableColors.map((c, i) => (
                                        <div
                                            key={i}
                                            title={c}
                                            onClick={() => setColor(c)}
                                            className={`
          w-7 h-7 md:w-8 md:h-8 rounded-full cursor-pointer 
          shadow-md transition-transform duration-300 transform 
          hover:scale-110 
          ${color === c ? 'ring-2 ring-red-400 scale-110' : 'ring-1 ring-[#0f3d3e]/30'}
        `}
                                            style={{
                                                backgroundColor: c,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className='flex flex-col gap-2 px-5 mt-8'>
                                <div className="flex flex-col gap-5 p-6 bg-white/30  border border-[#0f3d3e]/30 rounded-2xl shadow-2xl w-[100%] md:w-[80%] transition-all duration-300">
                                    <b className="text-base font-semibold flex items-center text-[#0f3d3e] tracking-wide">
                                        Enter Delivery Details <MdLocationOn className="text-xl text-red-500 ml-2" />
                                    </b>

                                    <select
                                        required
                                        className="input-genz text-[#0f3d3e] bg-white/70 rounded-xl"
                                        name="state"
                                        value={"Delhi"}
                                        onChange={handleChange}
                                    >
                                        <option disabled>select state</option>
                                        <option value={"Delhi"}>Delhi</option>
                                    </select>

                                    <input
                                        required
                                        className="input-genz"
                                        type="text"
                                        placeholder="Enter City/Area"
                                        name="area"
                                        onChange={handleChange}
                                    />

                                    <input
                                        required
                                        className="input-genz"
                                        type="text"
                                        placeholder="Enter Address Line"
                                        name="address"
                                        onChange={handleChange}
                                    />

                                    <input
                                        required
                                        className="input-genz"
                                        type="text"
                                        placeholder="Enter Pin Code"
                                        name="pincode"
                                        onFocus={() => setShow(true)}
                                        onBlur={() => setShow(false)}
                                        onChange={handleChange}
                                    />
                                    {show && <span className="text-sm text-red-600 ml-1">Enter a valid pin code</span>}

                                    <input
                                        required
                                        className="input-genz"
                                        type="text"
                                        placeholder="Enter Nearest Landmark"
                                        name="landmark"
                                        onChange={handleChange}
                                    />

                                    <input
                                        required
                                        className="input-genz"
                                        type="text"
                                        placeholder="Enter Mobile Number"
                                        name="mobileNumber"
                                        onChange={handleChange}
                                    />

                                    <div className="flex items-center gap-4 mt-2">
                                        <button
                                            className="w-fit px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:shadow-lg hover:scale-105 transition-transform"
                                            onClick={handleOrder}
                                        >
                                            BUY NOW
                                        </button>
                                        <button onClick={addToCart}
                                            className="hidden md:block w-fit px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl hover:shadow-lg hover:scale-105 transition-transform"
                                        >
                                            Add To Cart
                                        </button>
                                        <button className=" w-fit font-semibolds text-red-500 text-4xl" onClick={() => addToWishlist(product)}>
                                            <AiFillHeart className='text-red-500 hover:scale-110 transition-transform' />
                                        </button>
                                    </div>
                                </div>


                                <hr className='mt-4'></hr>
                                <div className='flex items-center justify-between mt-4 mb-2'>
                                    <div className='flex items-center justify-center flex-col gap2'>
                                        <AiOutlineShoppingCart className='text-3xl text-[gold] md:text-5xl' />
                                        <span className='text-[grey] text-xs text-center md:text-sm'>100% secure payments</span>
                                    </div>
                                    <div className='flex items-center flex-col gap2'><AiOutlineVerified className='text-3xl text-[green] md:text-5xl' />
                                        <span className='text-[grey] text-xs text-center md:text-sm'>100% Quality Assurance</span>
                                    </div>
                                    <div className='flex items-center flex-col gap2'><AiOutlineGlobal className='text-3xl text-[#428fca] md:text-5xl' />
                                        <span className='text-[grey] text-xs text-center md:text-sm'>Global delivery</span>
                                    </div>
                                </div>
                            </div>

                            <hr className='mt-4'></hr>

                            <div className='flex flex-col px-5 mt-2 mb-24 gap-3'>
                                <b className='flex border-b-4 border-[gold] w-fit leading-8 px-2 md:text-2xl'>PRODUCT REVIEWS</b>
                                <p className='flex items-center text-sm gap-2 md:text-lg'><MdVerifiedUser className='text-[green] text-lg' />77% of users vouch for this product</p>
                                <div className='flex flex-col justify-center px-14 py-4 gap-3 w-fit  items-center rounded-2xl bg-white/60 shadow-lg transition-all hover:scale-105 hover:shadow-2xl'>
                                    <h1 className='text-3xl font-semibold text-[#1a1a1a]'>
                                        4.6<span className='text-base text-gray-500'>/5</span>
                                    </h1>

                                    <div className='flex gap-1 md:text-2xl text-yellow-400'>
                                        {[...Array(5)].map((_, i) => (
                                            <AiFillStar key={i} className='drop-shadow-md' />
                                        ))}
                                    </div>

                                    <span className='text-xs text-gray-500 italic'>Based on 1,234 reviews</span>
                                </div>

                                <h1 className='text-[#212121] my-12'>Your experiences matter. Contribute by adding your review and helping users </h1>
                                <div className="flex items-start gap-4 md:gap-6 mb-8 p-5 md:p-6 rounded-2xl border border-gray-200 shadow-lg bg-white/60 max-w-xl w-full mx-auto">
                                    {/* Avatar */}
                                    <img
                                        src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                                        alt="User Avatar"
                                        className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-md"
                                    />

                                    {/* Review Body */}
                                    <div className="flex flex-col w-full gap-4">
                                        {/* Star Rating */}
                                        <div className="flex gap-1">
                                            {Array(5)
                                                .fill()
                                                .map((_, i) => (
                                                    <AiFillStar
                                                        key={i}
                                                        onClick={() => setStars(i)}
                                                        className="text-2xl transition duration-200 cursor-pointer hover:scale-125"
                                                        style={{
                                                            color: stars >= i ? '#facc15' : '#d1d5db',
                                                            filter: stars >= i ? 'drop-shadow(0 0 4px #facc15)' : 'none',
                                                        }}
                                                    />
                                                ))}
                                        </div>

                                        {/* Review Input */}
                                        <textarea
                                            placeholder="What's on your mind?"
                                            className="w-full h-28 p-4 text-sm md:text-base bg-white/80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all"
                                        />

                                        {/* Post Button */}
                                        <button className="w-fit px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-lg hover:scale-105 transition-transform">
                                            Post Review
                                        </button>


                                    </div>
                                </div>


                                <h1 className='text-[black] md:text-lg'>Explore the feedback from our community members.<span className='text-[black] text-xl'>(2)</span></h1>
                                <Reviews reviewText={demorev} />
                                <Reviews reviewText={demorev} />
                                <Reviews reviewText={demorev} />
                                <Reviews reviewText={demorev} />

                            </div>

                        </div>

                    </div>


                    <div className='flex md:hidden fixed bottom-0 w-screen items-center justify-center py-4'>
                        {<button onClick={addToCart} className='w-80 bg-[gold] py-2 rounded-md md:text-xl md:p-3'>ADD TO CART ₹{product?.price}</button>}
                    </div>
                </div>
            }
        </>
    )
}

export default SingleProduct
