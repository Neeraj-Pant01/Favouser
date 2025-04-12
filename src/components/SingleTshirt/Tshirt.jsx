import { Link, useNavigate } from 'react-router-dom'
import './tshirt.css'
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { items } from '../../redux/CartSlice';
import { makeApiRequest } from '../../utils/makeRequest';
import { userCart } from '../../redux/CurrentUserCart';

const Tshirt = ({p}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const cart  = useSelector((cart)=>cart.currentCart.currentUserCart)
  const token = useSelector((state)=>state.user?.currentUser?.token)

  const api = makeApiRequest(token)

  console.log(p)

  const addToCart = async () =>{
    try{
        const response = cart ? await api.put(`/api/v1/cart/add-product`,{productId:p._id, ...p}) : await api.post(`/api/v1/cart`,{productId:p._id, ...p})
        dispatch(userCart(response.data))
        console.log(response)
    }catch(err){
        console.log(err)
    }
  }
  return (
    <>
        <div className='flex flex-col border my-1 PRODUCT md:pb-2 rounded-md cursor-pointer'>
        <img onClick={()=>navigate(`/product/${p?._id}`)} src={ "/assets/black2.png"} className='w-[100%]'/>
        <div className='flex mt-3 justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <Link to={`product/${p?._id}`} className='text-sm text-[grey] px-2 md:text-[white]'>product name/title </Link>
                <span className='text-xs text-[grey] px-2 font-light md:text-[lightgrey]'>{p?.productDesc.substring(0, 30)}<b className='text-[black] md:text-[lightgrey]'> ...</b></span>
            </div>
            <BsCart4 className='text-[goldenrod] text-2xl mr-1 cursor-pointer md:text-[lightgrey] md:text-2xl'onClick={addToCart}/>
        </div>
        <div className='flex px-2 mt-3 items-center'>
            
            <span className='text-[grey] line-through text-sm mr-2'>₹1699</span>
            <span className='text-[grey] text-sm mr-1'>₹<b className='text-[black] text-lg md:text-white'>{p?.price}</b></span>
             <span className='text-[green] text-sm ml-3 md:text-xl'>47% OFF</span>
        </div>
    </div>
    </>
  )
}

export default Tshirt
