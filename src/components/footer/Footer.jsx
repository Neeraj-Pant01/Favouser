import React from "react";
import { FaAmazonPay, FaAppStore, FaCcVisa, FaGooglePay, FaGooglePlay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16 md:pb-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

        {/* CUSTOMER SERVICE */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Customer Service</h2>
          <ul className="space-y-1 text-gray-300">
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Company</h2>
          <ul className="space-y-1 text-gray-300">
            <li>About Us</li>
            <li>About Team</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* CONNECT WITH US */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Connect With Us</h2>
          <div className="flex gap-4 text-white text-2xl">
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-telegram"></i>
            <i className="fab fa-snapchat"></i>
          </div>
        </div>

        {/* KEEP UP TO DATE */}
        <div>
          <h2 className="font-bold uppercase mb-3 text-white">Keep Up to Date</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Mail ID"
              className="p-2 text-black flex-grow rounded-l-md"
            />
            <button className="bg-yellow-400 text-black px-4 rounded-r-md font-bold">
              SUBSCRIBE
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
          <h2 className="uppercase font-bold mb-2 text-white text-sm">Download Now</h2>
          <div className="flex text-xl md:text-3xl gap-3">
            <span className="text-green-500 bg-[white] p-2 rounded-full"><FaGooglePlay /></span>
            <span  className="bg-blue-700 p-2 rounded-full"><FaAppStore /></span>
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
    </footer>
  );
};

export default Footer;
