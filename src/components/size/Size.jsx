import React, { useState } from 'react'

const sizes = ["S","M","L","XL","2XL","3XL"]

const Size = () => {
    const[size, setSize] = useState(null)
  return (
    <div className='flex gap-2 flex-col px-5 mt-5'>
        <div>
            <b className='text-sm'>Select Size</b>
        </div>
      <div className='flex gap2 w-full items-center justify-between'>
        {
            sizes.map((s,i)=>{
                return (
        <div key={i} className={`flex border border-black w-10 h-10 items-center cursor-pointer justify-center rounded-md ${size===s ? 'bg-[#c0bfbf] text-black' : ''}`} onClick={()=>setSize(s)}>
            <span className={`text-sm ${size===s ? 'text-black': 'text-[grey]'}`}>{s}</span>
        </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Size
