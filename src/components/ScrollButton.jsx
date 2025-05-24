import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // FontAwesome arrow

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 z-50 p-4 md:p-4 rounded-full bg-[#353935] text-white shadow-lg hover:bg-white hover:text-black border-2 border-white transition-all duration-300  ease-in-out"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl animate-pulse" />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
