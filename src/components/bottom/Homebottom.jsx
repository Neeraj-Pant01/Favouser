import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

const images = [
    {
        img: "/assets/d1b.png",
        title: "",
        desc: ""
    },
    {
        img: "/assets/d1w.png",
        title: "",
        desc: ""
    }, {
        img: "/assets/d2b.png",
        title: "",
        desc: ""
    }, {
        img: "/assets/d94.png",
        title: "",
        desc: ""
    }
]

const Homebottom = () => {
    const navigate = useNavigate()
    return (
        <div className='pics'>
            {
                images.map((item,index) => {
                    return (
                        <div key={index} className='ITEM border mb-2' onClick={()=>navigate(`/product/${index}`)}>
                        <span className='text-[grey] text-center md:text-xl md:font-bold uppercase w-full'>title</span>
                        <img src={item.img} />
                        <div className='flex items-center gap-2 border-t-2 w-full justify-center'><span className='text-[grey] line-through'>699</span><span className='text-[green]'>499</span><span>30% OFF</span></div>
                    </div>
                    )
                })
            }

{
                images.map((item,index) => {
                    return (
                        <div key={index} className='ITEM border mb-2' onClick={()=>navigate(`/product/${index}`)}>
                        <span className='text-[grey] text-center md:text-xl md:font-bold uppercase w-full'>title</span>
                        <img src={item.img} />
                        <div className='flex items-center gap-2 border-t-2 w-full justify-center'><span className='text-[grey] line-through'>699</span><span className='text-[green]'>499</span><span>30% OFF</span></div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Homebottom
