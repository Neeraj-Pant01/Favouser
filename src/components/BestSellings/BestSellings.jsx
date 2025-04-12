import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const BestSellings = () => {
    const navigate = useNavigate()
    return (
        <div className='flex bg-cover bg-no-repeat items-center justify-center text-[black] h-32 md:h-52 md:bg-contain cursor-pointer border relative rounded-md md:rounded-lg' onClick={() => navigate(`/product/123`)}>
            <img className='border h-full' src='https://www.hawtcelebs.com/wp-content/uploads/2022/06/thylane-blondeau-at-kenzo-spring-summer-2023-show-at-paris-fashion-week-06-26-2022-6.jpg'></img>
            <div className='flex absolute top-0 w-full h-full items-center rounded-md md:rounded-lg bg-[black] bg-opacity-40 justify-center'>
                <div className='flex gap-3 items-center justify-center'>
                    <AiOutlineShoppingCart className='AiOutlineShoppingCart text-2xl md:text-4xl mr-1 rounded-full px-1 bg-[white] text-[black] cursor-pointer opacity-100 cart md:rounded-full md:bg-[white] md:flex md:justify-center md:p-2 ' />
                </div>
            </div>
        </div>
    )
}

export default BestSellings
