import React, { useState } from 'react'
import { AiFillStar, AiOutlineLike, AiOutlineVerified } from 'react-icons/ai'

const Reviews = ({rev}) => {
  const [readMore, setReadMore] = useState(false);

  const excerpt = rev?.revText.slice(0, 150);
  const isLong = rev?.revText.length > 150;

  return (
    <>
      <div className="flex flex-col gap-3 first:mt-0 px-4 py-3 rounded-xl bg-white/60 border border-[#0f3d3e]/20 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-yellow-400 text-base">
            {[...Array(rev?.starnumber)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <p className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">
            <AiOutlineVerified className="text-green-500 text-sm" /> Verified
          </p>
        </div>

        <p className="text-xs leading-snug text-gray-700 dark:text-gray-300 font-light tracking-wide">
          {readMore ? rev?.review : excerpt}
          {isLong && (
            <span
              className="text-blue-500 ml-1 cursor-pointer"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show less" : "Read more"}
            </span>
          )}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[#4a4a4a] dark:text-gray-300">
            <p className="text-xs font-medium">{rev?.username}</p>
            <p className="text-[10px] text-gray-500">{new Date(rev?.createdAt).toLocaleDateString()}</p>
          </div>

          {/* <div className="flex flex-col items-end">
            <AiOutlineLike className="text-lg text-[#0f3d3e] hover:text-blue-500 cursor-pointer transition-transform hover:scale-110" />
            <p className="text-[10px] text-gray-500 mt-0.5">8 people found this helpful</p>
          </div> */}
        </div>
      </div>
      <hr className="opacity-30" />
    </>
  );
};

export default Reviews
