import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeApiRequest } from '../../utils/makeRequest';
import { useDispatch, useSelector } from 'react-redux';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { removeFromCart } from '../../redux/CartSlice';
import { useEffect } from 'react';

const CartItem = ({ item, setCart, cart, onTotalChange }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const [isRemoving, setIsRemoving] = useState(false);
  const token = useSelector((state) => state.user.currentUser.token);
  const dispatch = useDispatch();
  const api = makeApiRequest(token);
  const [product, setProduct] = useState()


  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await api.get(`/api/v1/products/${item?._id}`)
        setProduct(response?.data)
      } catch (err) {
        console.log(err)
      }
    }
    getSingleProduct()
  }, [])


    useEffect(() => {
    if (product && product.price) {
      onTotalChange(item._id, product.price * quantity);
    } else {
      onTotalChange(item._id, 0);
    }
  }, [product, quantity, item._id, onTotalChange]);


  //   console.log('item', item)

  const removeCartItem = async () => {
    setIsRemoving(true);
    // console.log(item?._id)
    try {
      await api.put(`/api/v1/cart/remove/${item._id}`);
      setCart(cart.filter((cartItem) => cartItem._id !== item._id));
      dispatch(removeFromCart({ id: item._id }));
    } catch (err) {
      console.log(err);
    } finally {
      setIsRemoving(false);
    }
  };

  const updateQuantity = async (newQuantity) => {
    if (newQuantity < 1) return;

    try {
      setQuantity(newQuantity);
      //   const response = await api.put(`/api/v1/cart/update/${item._id}`, {
      //     quantity: newQuantity
      //   });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="flex p-4">
        {/* Product Image */}
        <Link to={`/product/${item._id}`} className="flex-shrink-0">
          <img
            src={product?.coverImage}
            alt={product?.productName}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </Link>

        {/* Product Info */}
        <div className="ml-4 flex-1">
          <div className="flex justify-between">
            <Link to={`/product/${item._id}`} className="font-medium hover:text-blue-600">
              {product?.productName}
            </Link>
            <button
              onClick={removeCartItem}
              disabled={isRemoving}
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FiTrash2 />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product?.productDesc}
          </p>

          {/* Price and Quantity */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(quantity - 1)}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <FiMinus size={14} />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => updateQuantity(quantity + 1)}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <FiPlus size={14} />
              </button>
            </div>

            <div className="text-right">
              <div className="font-semibold">₹{(product?.price * quantity).toFixed(2)}</div>
              <div className="flex items-center justify-end space-x-2 text-sm">
                {product?.maxPrice &&
                <span className="text-gray-400 line-through">
                  ₹{product?.maxPrice }
                </span>
}
                <span className="text-green-600">
                  Save ₹{product?.maxPrice - product?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;