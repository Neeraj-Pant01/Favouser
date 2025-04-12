import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import "./style.css"

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

const Homebottom = ({item}) => {
    const navigate = useNavigate()
    return (
        <div className='ITEM border-2 mb-2 rounded-md' onClick={() => navigate(`/product/${index}`)}>
            <span className='text-[grey] text-center md:text-xl md:font-bold uppercase w-full'>title</span>
            <img className='item-img' src={item.img}/>
            <div className='flex items-center mt-4 gap-2 border-t-2 w-full justify-center py-5'><span className='text-[grey] line-through'>699</span><span className='text-[green]'>499</span><span>30% OFF</span></div>
        </div>
    )
}

export default Homebottom
