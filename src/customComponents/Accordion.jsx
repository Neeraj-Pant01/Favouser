// import React, { useState } from 'react'
// import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
// import { RiArrowUpSFill } from "react-icons/ri";
// import { RiArrowDownSFill } from "react-icons/ri";


// const Accordion = ({c}) => {
//     const [isOPen, setIsOpen] = useState(false)
//     const [cat, setCat] = useState("")
//   return (
//     <div className='flex flex-col border-b border-[lightgrey] py-3 w-64 mb-2'>
//         <div className='flex items-center justify-between transition-all'>
//             <p style={{fontWeight:"350"}} className='ml-1 text-[black] text-md'>{c.name}</p>
//             {
//                 isOPen ?
//                 <RiArrowUpSFill className='flex cursor-pointer mr-2 text-2xl text-[#242323]' onClick={()=>setIsOpen(false)}/>
//                 :
//                 <RiArrowDownSFill className='flex cursor-pointer mr-2 text-2xl text-[#242323]' onClick={()=>setIsOpen(true)}/>
//             }
//         </div>
//         {
//             isOPen &&
//             <ul className='flex flex-col gap-3 transition-all pl-5 mt-3'>
//                 {
//                     c.types?.map((t,i)=>
//                     {
//                         return (
//                             <li key={i} className='text-[black] text-sm font-light cursor-pointer'>{t}</li>
//                         )
//                     }
//                     )
//                 }
//                 {
//                     c.name === "Color" &&
//                     <div className='flex flex-wrap items-center gap-3'>
//                         {
//                             c.colors.map((col,i)=>{
//                                 return (
//                                     <div style={{backgroundColor:`${col}`}} key={i} className='rounded-md w-7 h-7 cursor-pointer border-2' onClick={()=>setCat(col)}></div>
//                                 )
//                             })
//                         }
//                     </div>
//                 }
//             </ul>
//         }
//     </div>
//   )
// }

// export default Accordion


import React, { useState } from 'react'
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'

const Accordion = ({ c }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cat, setCat] = useState("")

  return (
    <div className="w-full">
      <div
        className="flex items-center w-64 justify-between cursor-pointer py-2 px-2 hover:bg-gray-50 rounded-md transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-gray-700 text-sm font-medium">{c.name}</p>
        {isOpen ? (
          <RiArrowUpSFill className="text-gray-600 text-xl" />
        ) : (
          <RiArrowDownSFill className="text-gray-600 text-xl" />
        )}
      </div>

      {isOpen && (
        <div className="pl-4 py-2 space-y-2 animate-fade-in">
          {c.types?.map((t, i) => (
            <li
              key={i}
              className="list-none text-gray-600 text-sm font-light hover:text-blue-600 cursor-pointer"
            >
              {t}
            </li>
          ))}

          {c.name === "Color" && (
            <div className="flex flex-wrap gap-2 pt-2">
              {c.colors.map((col, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: col }}
                  className={`w-6 h-6 rounded-md border-2 cursor-pointer transition-all duration-150 ${
                    cat === col
                      ? "ring-2 ring-black scale-110"
                      : "hover:scale-105"
                  }`}
                  onClick={() => setCat(col)}
                ></div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Accordion

