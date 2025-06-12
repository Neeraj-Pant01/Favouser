import { useState, useEffect } from 'react';
import { FaHeart, FaTrash, FaShoppingBag, FaMagic, FaRegHeart } from 'react-icons/fa';
import Navbar from '../components/navbar/Navbar';
import { makeApiRequest } from '../utils/makeRequest';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishList, setWishlistFromDB } from '../redux/wishlistSlice';
import { toast } from 'react-toastify';
import { items } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = useSelector((state) => state.user?.currentUser?.token)
    const dispatch = useDispatch()
    const wlist = useSelector((wish) => wish.wishlist)



    const api = makeApiRequest(token)

    const fetchWishlist = async () => {
        setIsLoading(true)
        try {
            const response = await api.get(`/api/v1/wishlist`)
            dispatch(setWishlistFromDB(response.data))
            setWishlist(response?.data?.products)
            setIsLoading(false)
            console.log(response.data)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    // Mock data (replace with your API call)
    useEffect(() => {
        window.scrollTo(0, 0)
        fetchWishlist()
    }, []);

    const removeFromWishlist = async (id) => {
        try {
            const response = await api.put(`/api/v1/wishlist/remove/${id}`)
            if (response.status === 200) {
                dispatch(removeFromWishList({ id: id }))
                setWishlist((prev) => prev.filter(item => item?._id !== id))
            }
        } catch (err) {
            console.log(err)
            toast.warning('uable to remove item ! try again !')
        }
    };

    const cart = useSelector((cart) => cart.currentCart.currentUserCart)
    const usercart = useSelector((state) => state.cart);
    const navigate = useNavigate()

    const addToCart = async (p) => {
        if (!token) {
            toast.warn('login to add this item to your cart !')
            return;
        }
        if (p?.inStocks < 1) {
            toast.warn('This product is out of stock!');
            return;
        }
        const isAlreadyInCart = usercart.cartItems.some(item => item._id === p._id);

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



    return (
        <div className="min-h-screen bg-gradient-to-br">
            <div className=" mx-auto">
                <Navbar />
                {/* Header */}
                <div className="flex justify-between items-center mt-3 px-6">
                    <h1 className="text-2xl font-bold text-black">
                        My Wishlist 💖
                    </h1>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <FaMagic className="text-yellow-500" />
                        <span className="font-medium">Saved Items ({wishlist.length})</span>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-md animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                                <div className="flex justify-between">
                                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                                    <div className="h-8 bg-gray-200 rounded w-8"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Wishlist Items */}
                {!isLoading && (
                    <div className="grid grid-cols-1 px-6 py-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.isArray(wishlist) && wishlist?.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white rounded-xl  p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative cursor-pointer" onClick={() => navigate(`/product/${item?._id}`)}>
                                    <img
                                        src={item?.coverImage}
                                        alt={item?.productName}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <button
                                        onClick={() => removeFromWishlist(item?._id)}
                                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors"
                                    >
                                        <FaTrash className="text-pink-600" />
                                    </button>
                                </div>
                                <h3 className="text-lg font-semibold mb-1">{item?.productName}</h3>
                                <p className="text-gray-600 mb-4">₹{item?.price?.toFixed(2)}</p>
                                <div className="flex justify-between mr-auto items-center">
                                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black transition-colors" onClick={() => addToCart(item)}>
                                        <FaShoppingBag />
                                        <span>Add to Cart</span>
                                    </button>
                                    <button className="p-2 text-pink-600 hover:text-pink-800 transition-colors">
                                        {item.liked ? <FaHeart className="fill-current" /> : <FaRegHeart className='fill-current' />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && wishlist.length === 0 && (
                    <div className="text-center py-12">
                        <div className="mx-auto w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                            <FaHeart className="text-pink-500 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Your wishlist is empty 🥺</h3>
                        <p className="text-gray-600 mb-6">Start saving your favorite items!</p>
                        <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                            Browse Trending
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default wishlist;