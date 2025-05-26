import React from "react";

const promos = [
  {
    image: "/assets/C1.png",
    topText: "BUY NOW",
    bottomLeft: "SAVE BIG",
    bottomRight: "BUY 3 @999",
  },
  {
    image: "/assets/JB1.png",
    topText: "BUY 3",
    topRight: "GET 1",
    bottomCenter: "FREE",
  },
  {
    image: "/assets/m12.png",
    topLeft: "LIMITED",
    topRight: "EDITION",
    bottomCenter: "BUY NOW @ 999",
  },
  {
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0eWxlfGVufDB8fDB8fHww",
    topText: "SPECIAL OFFER",
    bottomCenter: "50% OFF NOW",
  },
];

const PromoGrid = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6  mx-auto">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden h-64 md:h-72 w-full shadow-lg"
          >
            <img
              src={promo.image}
              alt={`Promo ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 text-white font-extrabold tracking-wide text-lg sm:text-3xl">
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
