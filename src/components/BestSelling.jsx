import React from "react";
import { bestSellings } from "../data";
import { useNavigate } from "react-router-dom";

const BestSelling = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white py-16 px-4 mt-2 mb-2">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-widest mb-10">
        BEST SELLING
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6  mx-auto">
        {bestSellings.map((item, index) => (
          // onClick={()=>navigate(`/product/${item?.id || '1230QlMe6n0WnSUMyKC0qhF'}`)}
          <div  key={index} className="overflow-hidden cursor-pointer rounded-2xl">
            <img
              src={item?.image}
              alt={`Best Selling ${index + 1}`}
              className="w-full h-32 md:h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
