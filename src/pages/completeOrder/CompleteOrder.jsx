import React, { useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CompleteOrder = () => {
    const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if coming from payment flow
    if (!location.state?.fromPayment) {
      navigate('/'); // Redirect if accessed directly
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full text-center transform transition-all duration-300 hover:shadow-2xl">
        {/* Pulse Animation Checkmark */}
        <div className="relative mb-8">
          <AiFillCheckCircle className="text-7xl text-emerald-500 mx-auto animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>

        {/* Confetti Dots (CSS-only) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-0 animate-confetti"
              style={{
                backgroundColor: `hsl(${Math.random() * 90 + 30}, 80%, 60%)`,
                top: '-10px',
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">Order Confirmed! 🎉</h1>
        <p className="text-gray-600 mb-8">Your items will arrive in 2-3 business days</p>

        <div className="space-y-4">
          <Link 
            to="/products" 
            className="block w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Continue Shopping
          </Link>

          <Link 
            to="/myOrders" 
            className="block w-full border-2 border-blue-500 text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
          >
            View Order Details
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Need help? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
          </p>
        </div>
      </div>

      {/* Add this to your global CSS file or style tag */}
      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CompleteOrder;