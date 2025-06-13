import { Link, useNavigate } from 'react-router-dom'
import './tshirt.css'
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { items } from '../../redux/CartSlice';
import { makeApiRequest } from '../../utils/makeRequest';
import { toast } from 'react-toastify';
import { wishlistItems } from '../../redux/wishlistSlice';

const Tshirt = ({ p }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((cart) => cart.currentCart.currentUserCart)
  const wishlist = useSelector((wish)=>wish.wishlist)
  const token = useSelector((state) => state.user?.currentUser?.token)

  const api = makeApiRequest(token)

  const usercart = useSelector((state) => state.cart);

  const addToCart = async () => {
    if(!token){
       toast.warn('login to add this item to your cart !')
       return;
    }
    const isAlreadyInCart = usercart.cartItems.some(item => item._id === p._id);

    if(p?.inStocks < 1){
      toast.warn('This product is out of stock!');
      return;
    }

    if (isAlreadyInCart) {
      toast.info("This product is already in your cart.");
      return;
    }

    try {
      const response = cart ? await api.put(`/api/v1/cart/add-product`, { productId: p._id, ...p }) : await api.post(`/api/v1/cart`, { productId: p._id, ...p })
      if (response.status === 200) {
        dispatch(items(response.data))
        toast.success("Product added to the cart! ");
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong! try again");
    }
  }


    const addToWishlist = async () => {
    if(!token){
       toast.warn('login to add this item to your wishlist !')
       return;
    }
    const isAlreadyInCart = wishlist.wishlistItems.some(item => item._id === p._id);

    if (isAlreadyInCart) {
      toast.info("This product is already in your wishlist !");
      return;
    }

    try {
      const response = await api.post(`/api/v1/wishlist/`, { productId: p._id, ...p })
      if (response.status === 200) {
        dispatch(wishlistItems(response.data))
        toast.success("Product added to the wishlist! ");
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong! try again");
    }
  }

  return (
    <>
      <div className="w-[48%] md:w-[24%] lg:w-[24%] bg-white border rounded-md shadow hover:shadow-lg transition-all mt-2 h-max duration-300 cursor-pointer relative overflow-hidden">
        {/* Top Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">
          BUY 2 FOR {Math.floor(p?.price + p?.price)}
        </div>

        {/* Product Image */}
        <div className="w-full h-[220px] flex items-center justify-center bg-gray-50">
          <img
            src={p?.coverImage}
            alt={p?.productName}
            onClick={() => navigate(`/product/${p?._id}`)}
            className="h-full object-cover rounded-sm"
          />
        </div>

        {/* Product Info */}
        <div className="p-2 flex flex-col gap-1">
          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-yellow-500 font-semibold">
            <span>★</span>
            <span className="text-black text-xs">4.4</span>
          </div>

          {/* Name */}
          <Link to={`/product/${p?._id}`} className="text-sm font-medium text-black line-clamp-1">
            {p?.productName}
          </Link>

          {/* Description */}
          <p className="text-xs text-gray-500 font-light h-[35px] line-clamp-2">
            {p?.productDesc?.substring(0, 45)}...
          </p>

          {/* Pricing */}
          <div className="flex items-center gap-2 mt-1">
            <span className="line-through text-xs text-gray-400">
              ₹{p?.maxPrice || Math.floor(p?.price + (p?.price * 0.4))}
            </span>
            <span className="text-sm font-semibold text-black">₹{p?.price}</span>
            <span className="text-green-600 text-xs font-semibold">{p?.offer || "40% OFF"}</span>
          </div>
        </div>

        {/* Cart Icon */}
        <div className="absolute flex flex-col md:flex-row gap-1 bottom-2 right-2">
          <BsFillBagHeartFill
            className="text-red-500 text-xl hover:scale-110 transition-transform"
            onClick={addToWishlist}
          />
          <BsCart4
            className="text-yellow-500 text-xl hover:scale-110 transition-transform"
            onClick={addToCart}
          />
        </div>
      </div>

    </>
  )
}

export default Tshirt
