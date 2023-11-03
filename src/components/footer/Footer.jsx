import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"
import { PiPaperPlaneRightFill } from "react-icons/pi"


const Footer = () => {
    return (
        <div className='flex flex-col bg-[black] px-4 py-4 gap-7'>
            <div className='flex flex-col text-[white]'>
                <b className='text-sm'>customer support</b>
                <p className='flex items-center gap-2'><span className='text-[grey]'>contact :</span> <span className='text-[white] text-sm'>8527737732</span></p>
            </div>
            <div className='flex flex-col text-[white]'>
                <b className='text-sm'>CONNECT WITH US</b>
                <div className='flex items-center text-[grey] gap-2 text-xl'>
                    <AiFillLinkedin className='cursor-pointer'/>
                    <AiFillFacebook className='cursor-pointer'/>
                    <AiFillTwitterSquare className='cursor-pointer'/>
                    <AiFillInstagram className='cursor-pointer'/>
                    <PiPaperPlaneRightFill className='cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col text-[white]'>
                <b className='text-sm leading-tight'>Online shopping at Favouser: Where hassle turns to ease, convenience reigns, and excitement prevails</b>
                <p className='text-xs text-[grey]'>Online shopping has always been a delightful and exhilarating endeavor for many, especially when your shopping haven is none other than the comfort of your own home. We've all had those days when we meticulously planned trips to brick-and-mortar clothing stores, daydreaming about our anticipated purchases. However, in today's fast-paced world, you can relish this experience without a second thought through online shopping. Welcome to the era of shopping from the cozy confines of your home, replete with an array of online shopping offers that range from fantastic deals and discounts to an exceptionally user-friendly interface, setting us apart from most online shopping sites in India. We've incorporated numerous shopping filters to ensure your shopping experience is genuinely hassle-free. This, in our own words, is what we proudly call Favouser.com.

                    Favouser, your ultimate destination for cutting-edge online fashion, presents an exquisite collection of high-quality products. Dive into the world of online shopping for men and women, exploring captivating categories that span from men's fashion to essential men's clothing and an extensive range of women's wear and women's apparel. Discover a plethora of accessories to complement your style. Fill up your shopping carts and experience swift home deliveries for all your orders. To sweeten the deal, we offer exclusive online shopping offers that create an enticing, irresistible, and exceptionally stylish package. You can even share these fantastic finds with your loved ones, knowing it will bring a smile to their faces.</p>
            </div>
            <div className='flex flex-col text-[white]'>
                <b className='text-sm leading-tight'>Our Idealism</b>
                <p className='text-xs text-[grey]'>Our commitment lies in designing fashion that allows you to shine, as it harmonizes seamlessly with the latest trends in both local and global fashion scenes. Simultaneously, we prioritize functionality, offering you great value for your money through the use of premium materials and designs that are both comfortable and flattering. When crafting our graphics, we immerse ourselves in the thoughts of our customers and find inspiration in the conversations and experiences that surround us, making sure our designs resonate with you.</p>
            </div>
            <hr className='mb-5 w-80 self-center'></hr>
        </div>
    )
}

export default Footer
