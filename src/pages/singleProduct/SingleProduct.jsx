import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineVerified } from 'react-icons/ai'
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

    const api = makeApiRequest(token)

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
        if (size === null) {
            alert("please select size first")
        } else {
            dispatch(address(orderDetails))
            navigate('/order', {
                state: {
                    product,
                    ...size,
                    ...color
                }
            });
        }
    }

    return (
        <>
            {loading ?
                <GlobalLoader />
                :
                <div className='bg-white'>
                    <div className='bg-[white] p-3 sticky top-0 flex items-center justify-between z-50'>
                        <div className="flex items-center gap-4">
                            <Link to={`/products`}>
                                <AiOutlineArrowLeft className='font-extrabold text-2xl text-[black] cursor-pointer' />
                            </Link>
                            <Link to={'/'} className=''>
                                <img src="/lb.png" className='w-[150px]' alt="" />
                            </Link>
                        </div>

                        <Link to={`/cart/123`} className='relative'>
                            <AiOutlineShoppingCart className='font-extrabold text-3xl text-[goldenrod] cursor-pointer' />
                            <div className="flex absolute items-center justify-center text-xs w-[15px] h-[15px] bg-[red] text-[white] rounded-full top-0 right-1">2</div>
                        </Link>
                    </div>
                    <div className='md:flex md:gap-10'>
                        <div className='md:sticky md:top-20 md:h-fit'>
                            <SingleItem product={product} />
                        </div>
                        <div className='md:flex md:flex-col'>
                            <Size size={size} setSize={setSize} />
                            <div className="flex">
                                {
                                    
                                }
                            </div>
                            <div className='flex flex-col gap-2 px-5 mt-8'>
                                <div className='flex flex-col gap-3'>
                                    <b className='text-sm flex items-center text-[#51b4cb]'>Enter Delevery Details <MdLocationOn className='text-xl text-[red]' /> </b>
                                    <select className='outline-none bg-transparent border border-[#51b4cb] py-2 px-4 rounded-md text-sm md:w-96 text-[grey]' name='state' value={"Delhi"} onChange={handleChange}>
                                        <option defaultValue={"select state"} disabled>select state</option>
                                        <option value={"Delhi"}>Delhi</option>
                                    </select>
                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter Area' name='area' onChange={handleChange} />

                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter Address line' name='address' onChange={handleChange} />

                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter pin code' onFocus={() => setShow(true)} onBlur={() => setShow(false)} name='pincode' onChange={handleChange} />
                                    {show && <span className='text-sm text-red-600'>enter the valid pin code </span>}
                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter nearest landmark' name='landmark' onChange={handleChange} />

                                    <input className='border text-sm border-[#51b4cb] outline-none rounded-md md:w-96 py-2 px-4' type='text' placeholder='enter mobile Number' name='mobileNumber' onChange={handleChange} />

                                    <button className='border border-[#51b4cb] w-fit rounded-lg text-[#51b4cb] py-1 px-4 md:py-2' onClick={handleOrder}>BUY NOW</button>

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
                                <div className='flex flex-col justify-center px-14 gap-2 w-fit self-center items-center'>
                                    <h1 className='text-xl'>4.6/5</h1>
                                    <div className='flex gap-2 md:text-xl'>
                                        <AiFillStar className='text-[goldenrod]' />
                                        <AiFillStar className='text-[goldenrod]' />
                                        <AiFillStar className='text-[goldenrod]' />
                                        <AiFillStar className='text-[goldenrod]' />
                                        <AiFillStar className='text-[goldenrod]' />
                                    </div>
                                </div>
                                <h1 className='text-[#212121] my-12'>Your experiences matter. Contribute by adding your review and helping users </h1>
                                <div className=' flex items-center border-[grey] gap-5 mb-5'>
                                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png" className='border-2 border-[grey] w-7 h-7 md:w-12 md:h-12 rounded-full' alt="" />
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-4 items-center'>
                                            {
                                                Array(5).fill().map((_, i) => <AiFillStar className='md:text-2xl cursor-pointer' style={{ color: stars >= i ? "goldenrod" : "lightgrey" }} key={i} onClick={() => setStars(i)} />)
                                            }
                                        </div>
                                        <textarea type='text' placeholder='enter your review' className='border-2 outline-none w-48 h-28 resize-none rounded-lg my-2 px-5 py-4 text-sm md:text-md ' />
                                        <button className='border py-2 rounded-md text-[#428fca] border-[#428fca]'>POST</button>
                                    </div>
                                </div>

                                <h1 className='text-[black] md:text-lg'>Explore the feedback from our community members.<span className='text-[black] text-xl'>(2)</span></h1>
                                <Reviews />
                                <Reviews />
                                <Reviews />
                                <Reviews />

                            </div>

                        </div>

                    </div>


                    <div className='flex md:hidden fixed bottom-0 w-screen items-center justify-center py-4'>
                        {<button className='w-80 bg-[gold] py-2 rounded-md md:text-xl md:p-3'>ADD TO CART ₹{product?.price}</button>}
                    </div>
                </div>
            }
        </>
    )
}

export default SingleProduct
