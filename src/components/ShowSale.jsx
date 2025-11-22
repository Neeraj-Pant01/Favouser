import React from "react";
import { useNavigate } from "react-router-dom";

const ShowSale = () => {
  const topImages = [
    {
      img: "/portraits/1.png", id: "685398d09ee52094c68f5258"
    },
    { img: "/portraits/2.png", id: "691da3a3999b774b059a1dcc" },
    { img: "/portraits/3.png", id: "691da538999b774b059a1ddf" },
    { img: "/portraits/4.png", id: "691da607999b774b059a1ded" }
  ];

  const bottomImages = [
    "https://unsplash.it/400/300?image=200",
    "https://unsplash.it/400/300?image=201",
    "https://unsplash.it/400/300?image=202",
  ];

  const navigate = useNavigate();

  return (
    <div className=" bg-black px-4 py-8 flex flex-col items-center justify-center gap-8">
      {/* Top Row - T-shirts */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {topImages.map((src, index) => (
          <div key={index} className="w-full cursor-pointer" onClick={() => navigate(`product/${src.id}`)}>
            <img
              src={src.img}
              alt={`T-shirt ${index + 1}`}
              className="rounded-2xl object-cover w-full h-full sm:h-72 md:h-full shadow-md"
            />
          </div>
        ))}
      </div>

      <div className="w-full">
        <img
          src='/banner/sale/s1.png'
          alt={`Banner image`}
          className="rounded-2xl object-cover w-full h-full shadow-md"
        />
      </div>
    </div>
  );
};

export default ShowSale;
