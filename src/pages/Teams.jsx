import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import teamData from '../data';
import { BsEmojiFrown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Teams = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % teamData.length);
        setFade(true); // Start fade-in
      }, 300); // Fade-out duration
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  let showTeam = false;

  const member = teamData[current];

  if (!showTeam) {
    return (
      <>
        <Navbar />
        <div className="bg-white rounded-xl min-h-[80vh] shadow-sm overflow-hidden flex flex-col items-center justify-center p-8 my-4">
          <BsEmojiFrown className="text-6xl text-[#e2dcc8] mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-[#0f3d3e] mb-2">Team Data Not Unavailable</h2>
          <p className="text-gray-500 mb-4 text-center">
            Sorry, our team details are not available right now.<br />
            We’ll be back soon!
          </p>
          <Link
            to="/"
            className="bg-[#e2dcc8] text-[#0f3d3e] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#0f3d3e] hover:text-[#e2dcc8] transition"
          >
            Go to Homepage
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[90vh] bg-[#f2ebd3] pt-10 text-black font-sans flex flex-col items-center  justify-center">
        <div className="w-full px-5 md:px-[10%] flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LEFT TEXT SECTION */}
          <div
            className={`flex-1  text-left transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <h1 className="text-5xl font-bold mb-4">{member.heading || 'North Bound'}</h1>
            <p className="uppercase text-sm tracking-wide mb-2 font-bold">{member.position}</p>
            <p className="mb-4">{member.description}</p>
            <a
              href={member.link || 'https://northbound.co'}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              {member.link || 'www.northbound.co'}
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`flex-1 md:flex-[0.75] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg w-full h-[300px] max-w-md mx-auto object-cover"
            />
          </div>
        </div>

        {/* TEAM CIRCLE CAROUSEL */}
        <div className="flex mt-auto py-5 items-center justify-center bg-[rgba(0,0,0,0.6)] w-full ">
          <div className="lex gap-6 flex justify-center px-2">
            {teamData.map((m, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 text-center ${index === current ? 'opacity-100 scale-105' : 'opacity-50'
                  }`}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-20 h-20 rounded-full object-cover mb-1 border-2 border-white shadow"
                />
                <p className="text-sm">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
