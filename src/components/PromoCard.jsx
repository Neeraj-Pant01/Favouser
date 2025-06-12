import React from "react";

const promos = [
  {
    image: "/Offers/1.png",
    topText: "",
    bottomLeft: "",
    bottomRight: "",
  },
  {
    image: "/Offers/2.png",
    topText: "",
    topRight: "",
    bottomCenter: "",
  },
  {
    image: "/Offers/3.png",
    topLeft: "",
    topRight: "",
    bottomCenter: "9",
  },
  {
    image: "/Offers/4.png",
    topText: "",
    bottomCenter: "",
  },
];

const PromoGrid = () => {
  return (
    <div className=" bg-black px-4 py-10">
      <h1 className="md:text-4xl md:pb-6 text-xl font-bold uppercase text-white text-center pb-4">Don't Miss Out</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6  mx-auto">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden h-full w-full shadow-lg"
          >
            <img
              src={promo.image}
              alt={`Promo ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white font-extrabold tracking-wide text-lg sm:text-3xl">
              {/* Top */}
              <div className="flex justify-between">
                {promo.topLeft && <span>{promo.topLeft}</span>}
                {promo.topText && <span>{promo.topText}</span>}
                {promo.topRight && <span>{promo.topRight}</span>}
              </div>

              {/* Bottom */}
              <div className="flex justify-between items-end">
                {promo.bottomLeft && <span>{promo.bottomLeft}</span>}
                {promo.bottomCenter && (
                  <span className="text-center w-full text-2xl">{promo.bottomCenter}</span>
                )}
                {promo.bottomRight && <span>{promo.bottomRight}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoGrid;
