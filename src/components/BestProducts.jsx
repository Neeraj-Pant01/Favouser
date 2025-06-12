import React from "react";
import { Carousel } from "react-responsive-carousel";

const bestProducts = [
  {
    title: "",
    image: "/bestProducts/1.png",
    offer: "",
  },
  {
    title: "",
    image: "/bestProducts/2.png",
    offer: "",
  },
  {
    title: "",
    image: "/bestProducts/3.png",
    offer: "",
  },
];

const BestProduct = () => {
  return (
    <section className="bg-black text-white py-16 px-4 mt-2 mb-2">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-widest mb-10">
        BEST PRODUCT
      </h2>

          <div className='md:hidden bg-white pb-2 mt-2'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        showArrows
        swipeable
        emulateTouch
        className="rounded-3xl"
      >
        {bestProducts.map((item, idx) => (
          <div  key={idx} className="rounded-2xl border-4 border-white p-4 flex flex-col items-center justify-between bg-black">
            <h3 className="font-bold text-lg sm:text-xl mb-4">{item?.title}</h3>
            <img src={item?.image} alt={`slide-${idx}`} className='w-full md:h-72 object-cover md:rounded-3xl' />
            <p className="text-lg font-extrabold">{item?.offer}</p>
          </div>
        ))}
      </Carousel>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mx-auto">
        {bestProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-white p-4 flex flex-col items-center justify-between bg-black"
          >
            <h3 className="font-bold text-lg sm:text-xl mb-4">{product.title}</h3>
            <img
              src={product.image}
              alt={`Product ${index + 1}`}
              className="rounded-xl w-full h-72 object-cover mb-4"
            />
            <p className="text-lg font-extrabold">{product.offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProduct;
