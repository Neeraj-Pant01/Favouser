import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";


const Accordion = ({c}) => {
    const [isOPen, setIsOpen] = useState(false)
    const [cat, setCat] = useState("")
  return (
    <div className='flex flex-col border-b border-[lightgrey] py-3 w-72 mb-2'>
        <div className='flex items-center justify-between transition-all'>
            <p style={{fontWeight:"350"}} className='ml-1 text-[black] text-md'>{c.name}</p>
            {
                isOPen ?
                <RiArrowUpSFill className='flex cursor-pointer mr-2 text-2xl text-[#242323]' onClick={()=>setIsOpen(false)}/>
                :
                <RiArrowDownSFill className='flex cursor-pointer mr-2 text-2xl text-[#242323]' onClick={()=>setIsOpen(true)}/>
            }
        </div>
        {
            isOPen &&
            <ul className='flex flex-col gap-3 transition-all pl-5 mt-3'>
                {
                    c.types?.map((t,i)=>
                    {
                        return (
                            <li key={i} className='text-[black] text-sm font-light cursor-pointer'>{t}</li>
                        )
                    }
                    )
                }
                {
                    c.name === "Color" &&
                    <div className='flex flex-wrap items-center gap-3'>
                        {
                            c.colors.map((col,i)=>{
                                return (
                                    <div style={{backgroundColor:`${col}`}} key={i} className='rounded-md w-7 h-7 cursor-pointer border-2' onClick={()=>setCat(col)}></div>
                                )
                            })
                        }
                    </div>
                }
            </ul>
        }
    </div>
  )
}

export default Accordion
