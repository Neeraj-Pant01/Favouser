import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <>
    <Navbar />
    <div className="bg-[#0f0f0f] text-gray-100 min-h-screen md:px-10 px-3 py-12">
      <div className=" mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#e2dcc8]">Terms & Conditions</h1>
        <p className="text-sm text-gray-400 mb-10">Effective Date: [Insert Date]</p>

        <p className="mb-6 text-gray-300">
          Welcome to <strong>Favouser</strong>. These Terms & Conditions ("Terms") govern your use of our website and services. By accessing or making a purchase from Favouser, you agree to be bound by these Terms. Please read them carefully.
        </p>

        <Section title="1. General Information">
          Favouser is an Indian-based brand offering apparel and accessories. All products sold through our website are subject to availability and our policies stated here.
        </Section>

        <Section title="2. Eligibility">
          You must be at least 18 years old to use our services. If you are under 18, you may only use the site under the supervision of a parent or guardian.
        </Section>

        <Section title="3. Product Information">
          We make every effort to display our products accurately, including colors, sizing, and descriptions. However, actual colors may vary slightly due to different screen settings or lighting.
        </Section>

        <Section title="4. Pricing & Payments">
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>All prices are listed in INR (₹) and are inclusive of applicable taxes.</li>
            <li>We reserve the right to change prices or product availability at any time without prior notice.</li>
            <li>Payments must be made at the time of order placement through secure payment gateways.</li>
          </ul>
        </Section>

        <Section title="5. Shipping Policy">
          <p className="mb-2 text-gray-300">
            Refer to our <Link to="/favouser/privacy-policy" className="text-blue-400 underline">Shipping Policy</Link> for full details.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Orders are processed within 24–48 hours.</li>
            <li>Free shipping on orders over ₹1,000.</li>
            <li>Tracking details will be provided via SMS/email.</li>
            <li>Delays during festivals or peak seasons may occur.</li>
          </ul>
        </Section>

        <Section title="6. Returns & Exchanges">
          <p className="mb-2 text-gray-300">
            Refer to our <a href="/return-policy" className="text-blue-400 underline">Return & Exchange Policy</a> for full details.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Return requests must be submitted on the same day of delivery and include a clear unpacking video.</li>
            <li>Exchanges allowed within 3–4 days of delivery, also requiring unpacking and product condition videos.</li>
            <li>Only one return or exchange per product is allowed.</li>
            <li>Shipping fees are non-refundable.</li>
          </ul>
        </Section>

        <Section title="7. Order Cancellation">
          Orders can only be canceled before they are shipped. Once shipped, cancellation is not possible, and the return/exchange process must be followed.
        </Section>

        <Section title="8. Intellectual Property">
          All website content, including logos, images, designs, and text, is the intellectual property of Favouser. Unauthorized use, reproduction, or distribution is strictly prohibited.
        </Section>

        <Section title="9. Limitation of Liability">
          Favouser is not liable for any indirect, incidental, or consequential damages arising from the use of our website, services, or products.
        </Section>

        <Section title="10. Privacy Policy">
          We are committed to protecting your privacy. Please review our <Link to="/favouser/privacy-policy" className="text-blue-400 underline">Privacy Policy</Link> to understand how we collect, use, and protect your information.
        </Section>

        <Section title="11. Governing Law">
          These Terms & Conditions are governed by the laws of India. Any disputes arising shall be handled in the courts of [Insert Your City or State].
        </Section>

        <Section title="12. Contact Us">
          <p className="text-gray-300">For questions regarding these Terms or any other policy, please contact us at:</p>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>📧 <strong>[Insert your business email]</strong></li>
            <li>📞 <strong>[Insert your customer support number]</strong></li>
          </ul>
        </Section>
      </div>
    </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold mb-2 text-[#e2dcc8]">{title}</h2>
    <div>{children}</div>
  </div>
);

export default TermsAndConditions;
