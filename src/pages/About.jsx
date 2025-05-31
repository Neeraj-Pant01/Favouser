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
            Where fashion meets comfort and everyday style gets a bold, expressive edge.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Our Story */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🌟 Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded with a passion for self-expression and street-smart fashion, Favouser was born to make everyday wear anything but ordinary. From graphic tees that speak your vibe to accessories that complete your look, we create pieces that help you show up as your true self — effortlessly stylish, unapologetically bold.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">👕 What We Do</h2>
            <p className="text-gray-300 leading-relaxed">
              We design high-quality, comfortable, and stylish t-shirts and fashion accessories that cater to the modern Indian lifestyle. Every product at Favouser is crafted with care — using premium fabrics, unique designs, and reliable delivery — because we believe you deserve more than just "another tee."
            </p>
          </section>

          {/* Made in India */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🌏 Made in India, Made for Everyone</h2>
            <p className="text-gray-300 leading-relaxed">
              Proudly made in India, Favouser supports local talent, ethical sourcing, and sustainable practices wherever possible. Whether you're dressing up for a weekend hangout or keeping it casual on the daily, Favouser helps you do it with confidence.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">💡 Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower self-expression through accessible fashion that’s stylish, comfortable, and real. We believe fashion should make you feel good — inside and out.
            </p>
          </section>

          {/* Why You'll Love Us */}
          <section>
            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">❤️ Why You'll Love Us</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-1">
              <li>Trend-driven designs, updated regularly</li>
              <li>Soft, breathable fabrics perfect for Indian weather</li>
              <li>Affordable pricing without compromising on quality</li>
              <li>Fast, reliable shipping across India</li>
              <li>Real customer care that listens and responds</li>
            </ul>
            <p className="mt-4 text-gray-300">
              Favouser isn’t just a brand — it’s your go-to style partner. Join our growing community and wear what makes you feel like *you*.
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
