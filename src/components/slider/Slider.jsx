import React, { useState } from 'react'
import { slider } from '../../data'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

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

    console.log(index)
    let colors = ["#cee2d6", "#e2d3d4"]

  return (
    <div className={`flex overflow-x-hidden w-full flex-col mb-10 pb-4 bg-[url("${slider[index].img}")] bg-cover bg-[#cee2d6]`}>
        <div className={`flex items-center justify-center px-10 pt-10`}>
                <div className={`w-screen h-64 flex flex-col transition-all duration-300 ease-linear gap-2`}>
                    <span className='text-3xl text-[white] font-extrabold'>{slider[index].title}</span>
                    <h1 className='text-[black] font-bold text-lg'>{slider[index].desc}</h1>
                    <span className='text-[#585656] text-xl'>{slider[index].trend}</span>
                    <button className='border border-black text-white px-5 py-2 bg-black w-fit' onClick={()=>navigate(`/products`)}>SHOP NOW</button>
                </div>
        </div>
      <div className={`flex items-center justify-center gap-2 mt-5`}>
        <button className={`cursor-pointer ${cursor==="left"? 'text-[#585656]':'text-black'} text-2xl font-extrabold`} onClick={()=>hnadleLeft("left")}><AiOutlineLeft /></button>
        <button className={`cursor-pointer ${cursor==="right"? 'text-[#585656]':'text-black'} text-2xl font-extrabold`} onClick={()=>hnaldeRight("right")}><AiOutlineRight /></button>
      </div>
    </div>
  )
}

export default Slider
