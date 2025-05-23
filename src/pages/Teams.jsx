import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Teams = () => {
      useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <>
    <Navbar />
    <div className='min-h-[50vh] flex flex-col items-center justify-center'>
        <p>
      under maintainance we'll back soon ! 
      </p>
      <Link to={'/'} className='underline text-blue-700'>Continue shopping !</Link>
      </div>
    </>
  )
}

export default Teams
