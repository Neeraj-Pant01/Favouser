import React from "react";
import { allcats } from "../data";
import { Link } from "react-router-dom";

const saleItems = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=nXX2rD3NdRIh6pS295LOAWP1buYUhPCQpZ2J4tKkx8I=",
  "https://media.istockphoto.com/id/1388490348/photo/white-oversize-t-shirt-mockup-hanging-isolated-on-white-background-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNUE6fc2fyciCOEYRqVusHrj2ItpU3o__LswQdncY8k=",
  "https://images.unsplash.com/photo-1709899684187-72d8fb998319?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1654432007491-8c97c473a7b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1690034979551-65a363a0e4a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1388490348/photo/white-oversize-t-shirt-mockup-hanging-isolated-on-white-background-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNUE6fc2fyciCOEYRqVusHrj2ItpU3o__LswQdncY8k=",
  "https://media.istockphoto.com/id/1320367916/photo/man-wearing-black-blank-t-shirt-and-a-black-baseball-cap-with-space-for-your-logo-or-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=nXX2rD3NdRIh6pS295LOAWP1buYUhPCQpZ2J4tKkx8I=",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0eWxlfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1153381634/photo/a-confident-young-man-near-a-lake-in-the-autumn-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=iqg53XaBh_DHmigqQdz-aqvzU4UiWkep87hQjwmXcJc=",
];

const SaleTags = () => {
  return (
    <section className="w-full bg-white mb-10 mt-4">
      {/* SALE banner */}
      {/* <div className="bg-black text-white mb-4 text-sm font-bold uppercase tracking-widest text-center py-2">
        <div className="flex overflow-hidden -auto justify-center gap-8">
          {Array(15)
            .fill("SALE")
            .map((text, index) => (
              <span className="w-12 md:w-[7vw]" key={index}>{text}</span>
            ))}
        </div>
      </div> */}
      <div className="bg-black text-white mb-4 text-sm font-bold uppercase tracking-widest text-center py-2 overflow-hidden">
        <div className="relative w-full h-6">
          <div
            className="absolute whitespace-nowrap animate-marquee flex gap-8"
            style={{ willChange: 'transform' }}
          >
            {Array(30)
              .fill("SALE")
              .map((text, index) => (
                <span className="w-12 md:w-[7vw]" key={index}>{text}</span>
              ))}
          </div>
        </div>
      </div>

      {/* Product circles */}
      <div className=" flex px-4 flex-wrap justify-between md:gap-6 gap-3">
        {allcats.map((cat, index) => (
          <Link to={`/products?cat=${cat?.link}`} key={index} className="flex flex-col items-center justify-between">
            <div className="w-[5vh] h-[5vh] sm:w-[6vw] sm:h-[6vw] rounded-full overflow-hidden shadow-md">
              <img
                src={cat?.image || saleItems[0]}
                alt={`Sale Item ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="mt-2 text-xs md:text-sm font-semibold">{cat?.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SaleTags;
