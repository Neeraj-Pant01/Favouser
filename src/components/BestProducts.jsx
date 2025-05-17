import React from "react";

const bestProducts = [
  {
    title: "TITLE",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R5bGV8ZW58MHx8MHx8fDA%3D",
    offer: "30% OFF",
  },
  {
    title: "TITLE",
    image: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R5bGV8ZW58MHx8MHx8fDA%3D",
    offer: "30% OFF",
  },
  {
    title: "TITLE",
    image: "https://plus.unsplash.com/premium_photo-1672907031715-fa4214fc3803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0eWxlfGVufDB8fDB8fHww",
    offer: "30% OFF",
  },
];

const BestProduct = () => {
  return (
    <section className="bg-black text-white py-16 px-4 mt-2 mb-2">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-widest mb-10">
        BEST PRODUCT
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mx-auto">
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
