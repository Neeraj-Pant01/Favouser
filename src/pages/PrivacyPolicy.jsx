import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-white min-h-screen px-6 md:px-10 py-16">
                <div className="mx-auto space-y-12">
                    {/* Page Heading */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#e2dcc8] mb-4">Privacy Policy – FAVOUSER</h1>
                        <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                            Welcome to FAVOUSER – where fashion meets individuality. Your privacy matters to us, and we're committed to protecting the personal details you share when you interact with us.
                        </p>
                    </div>

                    {/* Section */}
                    <section className="space-y-8">
                        <p className="text-gray-300 leading-relaxed">
                            This Privacy Policy outlines how we gather, use, and safeguard your data — so you can shop with peace of mind.
                        </p>

                        {/* 1. Information We Collect */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">1. Information We Collect</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To help us serve you better, we collect certain information when you browse, register, or make a purchase with us. This may include:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Your full name, email address, and phone number.</li>
                                <li>Shipping and billing addresses.</li>
                                <li>Payment details (securely handled through trusted third-party gateways).</li>
                                <li>Order history and product preferences.</li>
                                <li>Technical details such as your IP address, browser, and device type.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                We collect only the information needed to fulfill your orders and provide a smooth, personalized shopping experience.
                            </p>
                        </div>

                        {/* 2. How We Use Your Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">2. How We Use Your Information</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Here's how we use the information you share with us:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>To process your purchases and send order updates.</li>
                                <li>To personalize your experience on our platform.</li>
                                <li>To send curated offers, promotions, and product launches (you can opt out anytime).</li>
                                <li>To answer your questions and assist with support requests.</li>
                                <li>To understand customer behavior and enhance our website and product offerings.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                We exclusively utilise your data for the aforementioned objectives since we value transparency.
                            </p>
                        </div>

                        {/* 3. Data Sharing & Security */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">3. Data Sharing & Security</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>We do not sell, trade, or rent your personal information to anyone — ever.</li>
                                <li>Your payment details are never stored by us. They are processed safely via industry-leading payment providers like Razorpay, Paytm, UPI, and others.</li>
                                <li>We use secure socket layer (SSL) technology, data encryption, and strong internal protocols to keep your information safe.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Your trust is our top priority.
                            </p>
                        </div>

                        {/* 4. Your Privacy Rights */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">4. Your Privacy Rights</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                You have full control over your personal data. You can:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>View, update, or remove your personal information.</li>
                                <li>Unsubscribe from marketing emails and messages.</li>
                                <li>Request clarity on how we use your data.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                To take any of these actions, simply drop us a message at support@favouser.com. We're here to help.
                            </p>
                        </div>

                        {/* 5. Children's Privacy */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">5. Children's Privacy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                FAVOUSER is designed for users aged 13 and above. We don't intentionally gather information from kids.
                            </p>
                        </div>

                        {/* 6. Third-Party Services & Links */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">6. Third-Party Services & Links</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Our site may include links to external platforms like Instagram or third-party payment services. Please note that we are not responsible for how these platforms handle your data. We encourage you to check their privacy policies before sharing any personal details.
                            </p>
                        </div>

                        {/* 7. Updates to This Policy */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">7. Updates to This Policy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                From time to time, we may revise this policy to reflect changes in our services or legal requirements. When we do, the updated version will be posted here with a new effective date. You agree to such changes if you keep using our website.
                            </p>
                        </div>
                    </section>

                    {/* Contact Info */}
                    <div className="pt-10 text-center">
                        <h3 className="text-2xl font-bold text-[#e2dcc8] mb-2">📬 Get in Touch</h3>
                        <p className="text-gray-300 mb-4">
                            Have questions or need more information? We're happy to assist.
                        </p>
                        <ul className="space-y-1 text-gray-300">
                            <li>📧 Email: <strong>favouserclothing@gmail.com</strong></li>
                            <li>🌐 Mobile: <strong>+91 98919 46805</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShippingPolicy;