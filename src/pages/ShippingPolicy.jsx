import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const NewShippingPolicy = () => {
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#e2dcc8] mb-4">Shipping Policy – FAVOUSER</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            At Favouser, we are committed to delivering high-quality t-shirts and accessories to your doorstep with care and speed. Please read our shipping policy to understand how your order will be processed and delivered.
                        </p>
                    </div>

                    {/* Section */}
                    <section className="space-y-8">
                        {/* 1. Shipping Origin */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">1. Shipping Origin</h2>
                            <p className="text-gray-300 leading-relaxed">
                                All orders are shipped from our fulfillment centers across India. The center used depends on product availability and your location.
                            </p>
                        </div>

                        {/* 2. Shipping Coverage */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">2. Shipping Coverage</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We currently ship to all locations within India.
                            </p>
                        </div>

                        {/* 3. Order Processing Time */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">3. Order Processing Time</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Orders are processed within 24 to 48 hours.</li>
                                <li>During festivals or busy times, processing may take up to 48 hours.</li>
                                <li>Orders placed on weekends or public holidays will be processed on the next working day.</li>
                            </ul>
                        </div>

                        {/* 4. Delivery Methods */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">4. Delivery Methods & Timelines</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li><strong>Standard Shipping:</strong> Delivery takes 4 to 7 working days after the order is shipped.</li>
                                <li><strong>Express Shipping:</strong> Available on request for bulk or urgent orders. Delivery time depends on your location.</li>
                            </ul>
                        </div>

                        {/* 5. Shipping Charges */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">5. Shipping Charges</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li><strong>Free Shipping:</strong> Orders over ₹1000 get free shipping.</li>
                                <li>For orders under ₹1,000, shipping charges will be shown at checkout.</li>
                            </ul>
                        </div>

                        {/* 6. Shipping Partner */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">6. Shipping Partner</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We use Shiprocket to deliver orders safely and on time across India.
                            </p>
                        </div>

                        {/* 7. Order Tracking */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">7. Order Tracking</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Once your order is shipped, you will get a tracking number by SMS or email. You can use this to track your order in real time.
                            </p>
                        </div>

                        {/* 8. Important Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">8. Important Information</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>No extra customs fees or duties apply within India.</li>
                                <li>If there is a delay in delivery, you will not be charged extra.</li>
                                <li>Shipping charges are non-refundable.</li>
                            </ul>
                        </div>

                        {/* 9. Returns & Exchanges */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[e2dcc8] mb-2">9. Returns & Exchanges</h2>
                            <p className="text-gray-300 mb-2"><strong>For a full refund (same-day return request):</strong></p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>A clear and time-stamped unpacking video must be recorded when you open the package.</li>
                                <li>You must also provide a second video showing the product's condition when making the return request.</li>
                            </ul>
                            
                            <p className="text-gray-300 mt-4 mb-2"><strong>For exchanges (within 3–4 days of delivery):</strong></p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>A valid unpacking video is required.</li>
                                <li>The product must be unused, undamaged, and in its original packaging.</li>
                                <li>A second video showing the item's condition at the time of return is also required.</li>
                            </ul>
                            
                            <p className="text-gray-300 mt-4 mb-2"><strong>Note:</strong></p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>Only one return or exchange is allowed per product.</li>
                                <li>Returns or exchanges will not be accepted without the required videos or if the product is used, damaged (not during delivery), or altered.</li>
                                <li>Refunds after the 3–4 day window are not allowed unless the item is defective or incorrect, and video proof is provided.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Info */}
                    <div className="pt-10 text-center">
                        <h3 className="text-2xl font-bold text-[#e2dcc8] mb-2">Need Help?</h3>
                        <p className="text-gray-300">
                            Our customer support team is always happy to help. For any questions about your order or shipping, please contact us through our <Link to="/favouser/contact" className="text-[e2dcc8] underline">website</Link> or <a
                                href="mailto:support@example.com?subject=Support Request&body=Hi, I need help with..."
                                className="text-[lightgrey] underline mr-1"
                            >
                                email
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewShippingPolicy;