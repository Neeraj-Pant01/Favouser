import React from 'react'
import { AiFillStar, AiOutlineLike, AiOutlineVerified } from 'react-icons/ai'

const Reviews = () => {
  return (
    <>
    <div className='flex flex-col gap-3 my-3 first:mt-0'>
        <div className='flex gap-5 items-center'>
      <div className='flex items-center'>
      <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
                <AiFillStar className='text-[goldenrod]'/>
      </div>
      <p className='flex items-center gap-1 bg-[#c4d6db] opacity-80 px-2 text-xs'>
        <AiOutlineVerified className='text-[green]'/> verified User</p>
      </div>
      <div className='flex flex-col gap-1'>
      <p className='text-sm text-[#5b5959] font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, voluptate earum totam quam rerum eum, odio quia praesentium, aut sapiente accusamus molestiae impedit adipisci mollitia vel non explicabo ullam optio.</p>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
        <p className='text-sm text-[#5b5959] font-light mt-3'>username</p>
      <p className='text-xs text-[#5b5959] font-light float-right'>{new Date().toLocaleString()}</p>
        </div>
        <div className='flex flex-col'>
            <p className='flex items-end justify-end'><AiOutlineLike className='mt-3 text-2xl'/></p>
            <p className='text-xs text-[grey]'>8 people found this helpfull</p>
        </div>
      </div>
      </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Reviews
