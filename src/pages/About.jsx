import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";

const AboutUs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-white min-h-screen px-3 md:px-10 py-16">
      <div className=" mx-auto space-y-16">
        {/* Main Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#e2dcc8] mb-4">About Us – Favouser</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Fit checks? Passed. Vibe check? Always.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Our Story */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🌟 Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Favouser — where your everyday isn’t just an outfit, it’s a whole mood. We’re an Indian-born clothing brand made for the bold, the expressive, and the ones who don’t try — they just are.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">👕 What We Do</h2>
            <p className="text-gray-300 leading-relaxed">
              Right now, we’re all about T-shirts — but not the plain, forgettable kind. Think premium fabrics, standout designs, and fits that move with you. Whether you’re showing up to class, heading out with the crew, or just vibing solo — we’ve got the tee that matches your energy.
            </p>
          </section>

          {/* Made in India */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🌏 Made in India, Made for Everyone</h2>
            <p className="text-gray-300 leading-relaxed">
              Every Favouser is: Soft, breathable, and built for Indian weather. Designed with meaning — from chill to chaotic energy. Affordable, but never basic. Made locally, supporting Indian creators and ethical production.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🎯 Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              We’re here to turn everyday wear into personal expression. No rules, no filters — just real fashion that helps you show up as you.
            </p>
          </section>

          {/* Why You'll Love Us */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">❤️ Why You'll Love Us</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-1">
              <li>New drops that actually get your vibe</li>
              <li>Quality you’ll feel in every thread</li>
              <li>Fast shipping across India</li>
              <li>Customer care that actually cares</li>
            </ul>
            <p className="mt-4 text-gray-300">
              Favouser isn’t just a brand — it’s your style partner in crime. So go ahead. Be loud. Be real. Wear your vibe. Favouser’s got your back — and your drip.
            </p>
          </section>

          {/* Second Section Heading */}
          <div className="text-center pt-6">
            <h2 className="text-3xl font-bold text-[#e2dcc8]">Who We Are</h2>
          </div>

          {/* Second Block Content */}
          <section className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              At Favouser, we believe fashion should be bold, expressive, and rooted in everyday confidence. Proudly born in India, we’re more than just a clothing and accessories brand — we’re a lifestyle that champions creativity, individuality, and comfort.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Favouser started with a simple idea: to create high-quality, stylish t-shirts and accessories that speak to the real, everyday lives of our customers. What began as a small venture quickly turned into a fast-growing movement — one built on originality, street-inspired designs, and a commitment to standing out without trying too hard.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We’re here to empower self-expression through clothing that feels as good as it looks. Our goal is to offer stylish, accessible fashion that helps you feel confident in your own skin — no matter where life takes you.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Favouser isn’t just about trends — it’s about timeless attitude, reliable quality, and a community that celebrates originality. When you wear Favouser, you're not just wearing a brand — you're wearing your personality.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
