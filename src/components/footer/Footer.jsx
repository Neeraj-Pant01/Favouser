// import React from "react";
// import { FaAmazonPay, FaAppStore, FaCcVisa, FaFacebook, FaGooglePay, FaGooglePlay, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { SiPaytm } from "react-icons/si";
// import { RiMastercardFill } from "react-icons/ri";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-4 md:px-16">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

//         {/* CUSTOMER SERVICE */}
//         <div>
//           <h2 className="font-bold uppercase mb-3 text-white">Customer Service</h2>
//           <ul className="space-y-1 flex flex-col gap-3 text-gray-300">
//             <Link to={'/favouser/contact'} className="hover:underline">Contact Us</Link>
//             <Link>Track Order</Link>
//             <Link>Return Order</Link>
//             <Link>Cancel Order</Link>
//           </ul>
//         </div>

//         {/* COMPANY */}
//         <div>
//           <h2 className="font-bold uppercase mb-3 text-white">Company</h2>
//           <ul className="space-y-1 flex flex-col text-gray-300 gap-3">
//             <Link className="hover:underline transition-all" to={'/favouser/about'}>About Us</Link>
//             <Link className="hover:underline transition-all" to={'/favouser/teams'}>About Team</Link>
//             <Link className="hover:underline transition-all" to={'/favouser/terms&conditions'}>Terms & Conditions</Link>
//             <Link className="hover:underline transition-all" to={'/favouser/privacy-policy'}>Privacy Policy</Link>
//           </ul>
//         </div>

//         {/* CONNECT WITH US */}
//         <div>
//           <h2 className="font-bold uppercase mb-3 text-white">Connect With Us</h2>
//           <div className="flex gap-4 text-white text-2xl">
//             <a className="text-[white]" href="https://www.instagram.com/favouseroffical?igsh=MTdxeHVnMG10OWJ4Zw==
// " target="blank"><FaInstagram /></a>
//             <a className="text-[white]" target="blank" href=" https://x.com/favouser?s=21
// "><FaXTwitter /></a>
//             <a className="text-[white]" href=""><FaFacebook /></a>
//             <a className="text-[white]" target="blank" href="https://www.linkedin.com/in/favouser-clothing-749a9b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
// "><FaLinkedin /></a>
//             <a className="text-white" target="blank" href="https://t.me/favouserclothing
// "><FaTelegram /></a>
//           </div>
//         </div>

//         {/* KEEP UP TO DATE */}
//         <div>
//           <h2 className="font-bold uppercase mb-3 text-white">Keep Up to Date</h2>
//           <div className="flex md:w-auto">
//             <input
//               type="email"
//               placeholder="Enter Mail ID"
//               className="p-2 text-black flex-grow rounded-l-md"
//             />
//             <button className="hidden md:block bg-yellow-400 md:w-auto  text-xs md:text-sm text-black px-4 rounded-r-md font-bold">
//               SUBSCRIBE
//             </button>
//             <button className=" md:hidden bg-yellow-400 md:w-auto  text-xs md:text-sm text-black px-4 rounded-r-md font-bold">
//               <AiOutlineArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="my-8 border-t border-gray-700"></div>

//       {/* App & Payment */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Download Now */}
//         <div>
//           {/* <h2 className="uppercase font-bold mb-2 text-white text-sm">Download Now</h2> */}
//           <div className="flex text-xl md:text-3xl gap-3">
//             {/* <span className="text-green-500 bg-[white] p-2 rounded-full"><FaGooglePlay /></span> */}
//             {/* <span  className="bg-blue-700 p-2 rounded-full"><FaAppStore /></span> */}
//           </div>
//         </div>

//         {/* Secure Payment */}
//         <div>
//           <h2 className="uppercase font-bold mb-2 text-white text-sm text-center md:text-left">
//             100% Secure Payment
//           </h2>
//           <div className="flex text-xl md:text-3xl flex-wrap justify-center md:justify-start gap-3">
//             <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaGooglePay /></span>
//             <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><SiPaytm /></span>
//             <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaAmazonPay /></span>
//             <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaCcVisa /></span>
//             <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><RiMastercardFill /></span>
//             {/* <span className="bg-[lightgrey] p-2 rounded-md"></span> */}
//           </div>
//         </div>
//       </div>
//       <p className="md:mt-40 text-center text-[lightgrey]">© 2025 FavoUser. All rights reserved. Unauthorized reproduction or distribution is prohibited.
//       </p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaAmazonPay, FaCcVisa, FaFacebook, FaGooglePay, FaInstagram, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 pt-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-5 md:mb-16 md:text-xl">
          <h2 className="font-light text-sm md:text-2xl mb-4 md:text-center uppercase">Thanks For Visiting Favouser ❤</h2>
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* CUSTOMER SERVICE */}
          <div>
            <h2 className="font-bold text-sm md:text-lg mb-4 uppercase">Customer Service</h2>
            <ul className="space-y-1 text-sm md:text-base flex flex-col gap-3 text-gray-300">
              <Link to={'/favouser/contact'} className="hover:underline">Contact Us</Link>
              <Link className="hover:underline transition-all" to={'/favouser/about'}>About Us</Link>
              <Link className="hover:underline transition-all" to={'/favouser/teams'}>About Team</Link>
              <Link>Cancel Order</Link>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h2 className="font-bold text-sm md:text-lg mb-4 uppercase">Company</h2>
            <ul className="space-y-1 text-sm md:text-base flex flex-col text-gray-300 gap-3">
              
              <Link className="hover:underline transition-all" to={'/favouser/terms&conditions'}>Terms & Conditions</Link>
              <Link className="hover:underline transition-all" to={'/favouser/privacy-policy'}>Privacy Policy</Link>
              <Link className="hover:underline transition-all" to={'/favouser/shipping-policy'}>Shipping Policy</Link>
              <Link className="hover:underline transition-all" to={'/favouser/return-exchange-policy'}>Return & Exchange Policy</Link>
            </ul>
          </div>

          {/* SECURE PAYMENT */}
          <div>
            <h2 className="font-bold text-sm md:text-lg mb-4 uppercase">100% Secure Payment</h2>
            <div className="flex text-xl md:text-2xl flex-wrap md:justify-start gap-3">
              <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaGooglePay /></span>
              <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><SiPaytm /></span>
              <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaAmazonPay /></span>
              <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><FaCcVisa /></span>
              <span className="bg-[lightgrey] p-2 rounded-md text-[black]"><RiMastercardFill /></span>
              {/* <span className="bg-[lightgrey] p-2 rounded-md"></span> */}
            </div>
          </div>

          {/* NEWSLETTER */}
        </div>

        {/* Brand Name */}
        <div className="flex items-center justify-center mb-8 mt-20 md:mt-24">
          <img src="/finalLogo.png" className="w-[50%] md:w-[30%]" alt="" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.instagram.com/favouserofficial/profilecard/?igsh=ZXFhYWRoOWVtaDht" className="text-white hover:text-yellow-400"><FaInstagram className="text-xl" /></a>
          <a className="text-[white]" target="blank" href=" https://x.com/favouser?s=21
 "><FaXTwitter /></a>
          <a className="text-[white]" target="blank" href="https://www.facebook.com/share/1AmbdRTduo/"><FaFacebook /></a>
          <a className="text-[white]" target="blank" href="https://www.linkedin.com/in/favouser-clothing-749a9b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
"><FaLinkedin /></a>
          <a className="text-white" target="blank" href="https://t.me/favouserclothing
 "><FaTelegram /></a>
        </div>


        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
          <p>Copyright @ favouser</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;