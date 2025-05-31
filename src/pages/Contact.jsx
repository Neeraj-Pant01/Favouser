import React, { useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/navbar/Navbar'

const ContactPage = () => {
    const user = useSelector((state) => state.user?.currentUser)
    const usercart = useSelector((state) => state.cart);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
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
                    <div className="flex absolute items-center justify-center text-xs w-[15px] h-[15px] bg-[red] text-[white] rounded-full top-0 right-1">{usercart.quantity}</div>
                </Link>
            </div> */}
            <div className="min-h-screen bg-black text-white px-4 py-12 font-[Poppins]">
                {/* Contact Cards */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                    {[
                        {
                            title: 'Email Address',
                            subtitle: 'Contact us on email',
                            value: 'favouserclothing@gmail.com'
                        },
                        {
                            title: 'Phone Number',
                            subtitle: 'Contact us on Call',
                            value: '+91 98919 46805'
                        },
                        {
                            title: 'Office Address',
                            subtitle: 'Contact in-person',
                            value: '609, Sec–115, Noida, UP–201301'
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#dcd1b9] w-full md:w-80 rounded-lg py-6 px-4 flex flex-col justify-center items-start shadow-md"
                        >
                            <div className="flex justify-center w-[100%] items-center gap-5">
                                <div className="w-10 h-10 bg-black rounded-full"></div>
                                <div>
                                    <h4 className="text-black font-bold text-lg">{item.title}</h4>
                                    <p className="text-black text-sm opacity-60">{item.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-black text-center w-[100%] font-medium text-md mt-2">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Form Title */}
                <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
                    Get In Touch
                </h2>

                {/* Contact Form */}
                <form className="md:max-w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                    <div>
                        <label className="block text-sm mb-1">Full Name*</label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Email Address*</label>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Phone Number*</label>
                        <input
                            type="tel"
                            placeholder="Enter Number"
                            className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Enter Subject"
                            className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-500 outline-none"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm mb-1">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Enter Message"
                            className="w-full px-4 py-2 resize-none rounded-md bg-[#1a1a1a] text-white placeholder-gray-500 outline-none"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center mt-6">
                        <button
                            type="submit"
                            className="bg-[#dcd1b9] text-black font-bold py-2 px-12 rounded-md hover:scale-105 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactPage
