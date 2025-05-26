import React from "react";
import { FaAmazonPay, FaAppStore, FaCcVisa, FaFacebook, FaGooglePay, FaGooglePlay, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

        {/* CUSTOMER SERVICE */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Customer Service</h2>
          <ul className="space-y-1 flex flex-col gap-3 text-gray-300">
            <Link>Contact Us</Link>
            <Link>Track Order</Link>
            <Link>Return Order</Link>
            <Link>Cancel Order</Link>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Company</h2>
          <ul className="space-y-1 flex flex-col text-gray-300 gap-3">
            <Link className="hover:underline transition-all" to={'/favouser/about'}>About Us</Link>
            <Link className="hover:underline transition-all" to={'/favouser/teams'}>About Team</Link>
            <Link className="hover:underline transition-all" to={'/favouser/terms&conditions'}>Terms & Conditions</Link>
            <Link className="hover:underline transition-all" to={'/favouser/privacy-policy'}>Privacy Policy</Link>
          </ul>
        </div>

        {/* CONNECT WITH US */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Connect With Us</h2>
          <div className="flex gap-4 text-white text-2xl">
            <a className="text-[#E1306C]" href="" target="blank"><FaInstagram /></a>
            <a className="text-[#1DA1F2]" href=""><FaTwitter /></a>
            <a className="text-[#1877F2]" href=""><FaFacebook /></a>
            <a className="text-[#0A66C2]" href=""><FaLinkedin /></a>
          </div>
        </div>

        {/* KEEP UP TO DATE */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Keep Up to Date</h2>
          <div className="flex md:w-auto">
            <input
              type="email"
              placeholder="Enter Mail ID"
              className="p-2 text-black flex-grow rounded-l-md"
            />
            <button className="hidden md:block bg-yellow-400 md:w-auto  text-xs md:text-sm text-black px-4 rounded-r-md font-bold">
              SUBSCRIBE
            </button>
             <button className=" md:hidden bg-yellow-400 md:w-auto  text-xs md:text-sm text-black px-4 rounded-r-md font-bold">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* App & Payment */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Download Now */}
        <div>
          {/* <h2 className="uppercase font-bold mb-2 text-white text-sm">Download Now</h2> */}
          <div className="flex text-xl md:text-3xl gap-3">
            {/* <span className="text-green-500 bg-[white] p-2 rounded-full"><FaGooglePlay /></span> */}
            {/* <span  className="bg-blue-700 p-2 rounded-full"><FaAppStore /></span> */}
          </div>
        </div>

        {/* Secure Payment */}
        <div>
          <h2 className="uppercase font-bold mb-2 text-white text-sm text-center md:text-left">
            100% Secure Payment
          </h2>
          <div className="flex text-xl md:text-3xl flex-wrap justify-center md:justify-start gap-3">
            <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaGooglePay /></span>
            <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><SiPaytm /></span>
            <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaAmazonPay /></span>
            <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaCcVisa /></span>
            <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><RiMastercardFill /></span>
            {/* <span className="bg-[lightgrey] p-2 rounded-md"></span> */}
          </div>
        </div>
      </div>
      <p className="md:mt-40 text-center text-[lightgrey]">© 2025 FavoUser. All rights reserved. Unauthorized reproduction or distribution is prohibited.
</p>
    </footer>
  );
};

export default Footer;
