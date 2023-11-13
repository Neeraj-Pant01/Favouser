import React, { useState } from 'react'
import { slider } from '../../data'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import "../../pages/homepage/home.css"

const Slider = () => {
    const [index, setIndex] = useState(1)
    const [cursor, setCursor] = useState("left")
    const navigate = useNavigate()
    const hnadleLeft = (arg) =>{
        setCursor(arg)
        if(index === 0 ){
            setIndex(slider.length-1)
        }else{
            setIndex(index-1)
        }
    }
    const hnaldeRight = (arg) =>{
        setCursor(arg)
        if(index === slider.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }


  return (
    <div className={`flex overflow-x-hidden w-full flex-col mb-10 pb-4 bg-[url("${slider[index].img}")] bg-cover md:overflow-hidden SLIDER`} style={{backgroundColor: index===0 ? '#cee2d6' : index===1 ? "#e2d3d4" : ''}}>
        <div className={`flex items-center justify-center px-10 pt-10`}>
                <div className={`w-screen h-64 flex flex-col transition-all duration-300 ease-linear gap-2`}>
                    <span className='text-3xl text-[white] font-extrabold'>{slider[index].title}</span>
                    <h1 className='text-[black] font-bold text-lg md:text-2xl uppercase'>{slider[index].desc}</h1>
                    <span className='text-[#585656] text-xl'>{slider[index].trend}</span>
                    <button className='border border-black text-white px-5 py-2 bg-black w-fit md:mt-14' onClick={()=>navigate(`/products`)}>SHOP NOW</button>
                </div>
        </div>
      <div className={`flex items-center justify-center gap-2 mt-5 md:mt-48`}>
        <button className={`cursor-pointer rounded-full bg-[#c5bdbd] p-1 md:p-3 md:bg-[black] ${cursor==="left"? 'text-[lightgrey]':'text-[white]'} text-2xl font-extrabold`} onClick={()=>hnadleLeft("left")}><AiOutlineLeft className=''/></button>
        <button className={`cursor-pointer rounded-full bg-[#c5bdbd] p-1 md:p-3 md:bg-[black] ${cursor==="right"? 'text-[lightgrey]':'text-[white]'} text-2xl font-extrabold`} onClick={()=>hnaldeRight("right")}><AiOutlineRight /></button>
      </div>
    </div>
  )
}

export default Slider
