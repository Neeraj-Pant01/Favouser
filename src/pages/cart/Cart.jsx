import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineVerified } from 'react-icons/ai';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { makeApiRequest } from "../../utils/makeRequest";
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import GlobalLoader from '../../components/GlobalLoader';
import CartItem from "../../components/product/Product"

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.user.currentUser.token);
  const api = makeApiRequest(token);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemTotals, setItemTotals] = useState({});

  useEffect(() => {
    setLoading(true);
    const getUserCart = async () => {
      try {
        const response = await api.get("/api/v1/cart");
        setCart(response.data.products);
        console.log(response.data.products);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getUserCart();
  }, []);

  const handleItemTotal = useCallback((id, total) => {
    setItemTotals(prev => ({ ...prev, [id]: total }));
  }, []);

  // Update cartTotal whenever itemTotals changes
  React.useEffect(() => {
    const total = Object.values(itemTotals).reduce((sum, val) => sum + val, 0);
    setCartTotal(total);
  }, [itemTotals]);


  return (
    <>
      <Navbar />
      {loading ? (
        <GlobalLoader />
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Cart Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
            <span className="text-gray-600">{cart?.length} {cart?.length === 1 ? 'item' : 'items'}</span>
          </div>

          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item, i) => (
                  <CartItem
                    key={item._id + i}
                    item={item}
                    setCart={setCart}
                    cart={cart}
                    onTotalChange={handleItemTotal}
                  />
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-4">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="text-green-600">-₹{cartTotal.toFixed(2)}</span>
                  </div> */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">₹70</span>
                  </div>
                  <div className="border-t pt-3 mt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{(cartTotal + 70).toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-gray-100 p-8 rounded-full mb-6">
                <AiOutlineShoppingCart className="text-4xl text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
              <Link
                to="/products"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Continue Shopping
              </Link>
            </div>
          )}

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center p-4">
              <AiOutlineShoppingCart className="text-3xl text-yellow-500 mb-2" />
              <span className="text-sm text-gray-700">100% Secure Payments</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <AiOutlineVerified className="text-3xl text-green-500 mb-2" />
              <span className="text-sm text-gray-700">Quality Assurance</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <AiOutlineGlobal className="text-3xl text-blue-500 mb-2" />
              <span className="text-sm text-gray-700">Global Delivery</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;