import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";

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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">Shipping Policy – Favouser</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Delivering your style with speed, care, and reliability.
                        </p>
                    </div>

                    {/* Section */}
                    <section className="space-y-8">
                        {/* 1. Shipping Origin */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">📦 1. Shipping Origin</h2>
                            <p className="text-gray-300 leading-relaxed">
                                All orders are shipped from various fulfillment centers across India, based on inventory availability and your location.
                            </p>
                        </div>

                        {/* 2. Shipping Coverage */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🌍 2. Shipping Coverage</h2>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Domestic Shipping:</strong> We currently ship to all locations within India.
                                <br />
                                <strong>International Shipping:</strong> Coming soon! We're working on expanding globally — stay tuned!
                            </p>
                        </div>

                        {/* 3. Order Processing Time */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">⏱️ 3. Order Processing Time</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Standard orders are processed within 24 to 48 hours.</li>
                                <li>During festivals or peak seasons, processing may take up to 48 hours.</li>
                                <li>Orders placed on weekends or holidays are handled the next business day.</li>
                            </ul>
                        </div>

                        {/* 4. Delivery Methods */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🚚 4. Delivery Methods & Timelines</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li><strong>Standard Shipping:</strong> Delivery within 4–7 business days after dispatch.</li>
                                <li><strong>Express Shipping:</strong> Available for bulk or urgent orders upon request.</li>
                            </ul>
                        </div>

                        {/* 5. Shipping Charges */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">💰 5. Shipping Charges</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Free shipping on all orders above ₹1,000.</li>
                                <li>For orders below ₹1,000, charges are calculated at checkout.</li>
                            </ul>
                        </div>

                        {/* 6. Shipping Partner */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🤝 6. Shipping Partner</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We use <strong>Shiprocket</strong> to ensure safe and timely delivery across India.
                            </p>
                        </div>

                        {/* 7. Order Tracking */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">📲 7. Order Tracking</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You'll receive a tracking link via SMS or email as soon as your order is dispatched. Track your order in real time!
                            </p>
                        </div>

                        {/* 8. Important Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">⚠️ 8. Important Information</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>No customs or extra charges for domestic orders.</li>
                                <li>No extra fees on delayed deliveries.</li>
                                <li>Shipping fees are non-refundable.</li>
                                <li>Full refunds only if return is requested same day with:
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>A time-stamped unboxing video showing the unopened product.</li>
                                        <li>Second video proving condition at return request.</li>
                                    </ul>
                                </li>
                                <li>Exchanges allowed within 3–4 days with:
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Unboxing video</li>
                                        <li>Original packaging, unused condition</li>
                                        <li>Return condition video</li>
                                    </ul>
                                </li>
                                <li>One exchange or return per item. No repeats.</li>
                                <li>Returns/refunds rejected without valid videos or signs of use/damage.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Info */}
                    <div className="pt-10 text-center">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Need Help?</h3>
                        <p className="text-gray-300">
                            Our support team is here for you. Reach out via our <a href="/contact" className="text-yellow-300 underline">contact page</a> or email us directly.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShippingPolicy;

