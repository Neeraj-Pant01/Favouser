import React from "react";

const bestSellingImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=nXX2rD3NdRIh6pS295LOAWP1buYUhPCQpZ2J4tKkx8I=",
  "https://media.istockphoto.com/id/1388490348/photo/white-oversize-t-shirt-mockup-hanging-isolated-on-white-background-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNUE6fc2fyciCOEYRqVusHrj2ItpU3o__LswQdncY8k=",
  "https://images.unsplash.com/photo-1709899684187-72d8fb998319?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1654432007491-8c97c473a7b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1690034979551-65a363a0e4a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1388490348/photo/white-oversize-t-shirt-mockup-hanging-isolated-on-white-background-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNUE6fc2fyciCOEYRqVusHrj2ItpU3o__LswQdncY8k=",
  "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=nXX2rD3NdRIh6pS295LOAWP1buYUhPCQpZ2J4tKkx8I=",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
];

const BestSelling = () => {
  return (
    <section className="bg-black text-white py-16 px-4 mt-2 mb-2">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-widest mb-10">
        BEST SELLING
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6  mx-auto">
        {bestSellingImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl">
            <img
              src={src}
              alt={`Best Selling ${index + 1}`}
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
