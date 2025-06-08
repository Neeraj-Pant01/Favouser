import { useState, useEffect } from 'react';
import { FaHeart, FaTrash, FaShoppingBag, FaMagic, FaRegHeart } from 'react-icons/fa';
import Navbar from '../components/navbar/Navbar';
import { makeApiRequest } from '../utils/makeRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setWishlistFromDB } from '../redux/wishlistSlice';

const wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = useSelector((state) => state.user?.currentUser?.token)
    const dispatch = useDispatch()


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
        fetchWishlist()
    }, []);

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
            <div className=" mx-auto">
                <Navbar />
                {/* Header */}
                <div className="flex justify-between items-center mb-8 mt-3 px-6">
                    <h1 className="text-3xl font-bold text-pink-600">
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
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative">
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
                                <div className="flex justify-between items-center">
                                    <button className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                                        <FaShoppingBag />
                                        <span>Add to Cart</span>
                                    </button>
                                    <button className="p-2 text-pink-600 hover:text-pink-800 transition-colors">
                                        {item.liked ? <FaHeart className="fill-current" /> : <FaRegHeart />}
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