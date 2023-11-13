import { useNavigate } from 'react-router-dom'
import './tshirt.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Tshirt = () => {
    const desc = "this is the product description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, aliquid?"
    const navigate = useNavigate();
  return (
    <>
        <div className='flex flex-col border my-1 PRODUCT md:pb-2'>
        <img src='https://static.vecteezy.com/system/resources/previews/008/520/862/original/black-oversize-t-shirt-mockup-hanging-file-png.png' className='w-full'/>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <span className='text-sm text-[grey] px-2 md:text-[white]'>product name/title </span>
                <span className='text-xs text-[grey] px-2 font-light md:text-[lightgrey]'>{desc.substring(0, 30)}<b className='text-[black] md:text-[lightgrey]'> ...</b></span>
            </div>
            <AiOutlineShoppingCart className='text-[goldenrod] text-2xl mr-1 cursor-pointer md:text-[lightgrey] md:text-3xl'onClick={()=>navigate(`/cart/123`)}/>
        </div>
        <div className='flex px-2 items-center'>
            <span className='text-[grey] text-sm'>₹<b className='text-[black] text-lg md:text-white'>699</b></span> <span className='text-[grey] line-through text-sm ml-2'>₹699</span> <span className='text-[green] text-sm ml-3 md:text-xl'>47% OFF</span>
        </div>
    </div>
    </>
  )
}

export default Tshirt
