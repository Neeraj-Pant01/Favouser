import React from "react";

const ShowSale = () => {
  const topImages = [
    "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with real images later
    "https://plus.unsplash.com/premium_photo-1664869376894-9e047086bb46?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517267367903-519607b9060c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const bottomImages = [
    "https://unsplash.it/400/300?image=200",
    "https://unsplash.it/400/300?image=201",
    "https://unsplash.it/400/300?image=202",
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-8 flex flex-col items-center justify-center gap-8">
      {/* Top Row - T-shirts */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {topImages.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              alt={`T-shirt ${index + 1}`}
              className="rounded-2xl object-cover w-full h-64 sm:h-72 md:h-72 shadow-md"
            />
          </div>
        ))}
      </div>

          <div className="w-full">
            <img
              src='https://plus.unsplash.com/premium_photo-1673429738836-b3581b1b6636?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNhbGV8ZW58MHx8MHx8fDA%3D'
              alt={`Banner image`}
              className="rounded-2xl object-cover w-full h-60 sm:h-64 md:h-72 shadow-md"
            />
          </div>
    </div>
  );
};

export default ShowSale;
