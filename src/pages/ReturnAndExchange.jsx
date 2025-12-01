import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const ReturnExchangePolicy = () => {
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#e2dcc8] mb-4">🔄 Return & Exchange Policy – FAVOUSER</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            At FAVOUSER, we work hard to deliver quality products you'll love. However, if something isn't right, we're here to help under the following terms:
                        </p>
                    </div>

                    {/* Return Policy Section */}
                    <section className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">📦 Return Policy</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉Return requests must be submitted on the same day of delivery.</li>
                                <li> 👉A clear and complete unpacking video is required — from the moment the package is opened, with no cuts or edits.</li>
                                <li> 👉Returns are only accepted for:
                                    <ul className=" ml-6 mt-1 space-y-1">
                                        <li> 👉Wrong product received</li>
                                        <li> 👉Damaged or defective items</li>
                                    </ul>
                                </li>
                                <li> 👉Product must be unused, unwashed, and in original packaging.</li>
                                <li> 👉<strong>Note:</strong> Returns will not be accepted without a valid unpacking video.</li>
                            </ul>
                        </div>

                        {/* Exchange Policy Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">♻️ Exchange Policy</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉You may request an exchange within 3–4 days of delivery.</li>
                                <li> 👉Exchanges are allowed for:
                                    <ul className=" ml-6 mt-1 space-y-1">
                                        <li> 👉Wrong size</li>
                                        <li> 👉Color or design mismatch (if applicable)</li>
                                    </ul>
                                </li>
                                <li> 👉A clear unpacking video and video showing the product's condition are required.</li>
                                <li> 👉Only one exchange per product is allowed.</li>
                                <li> 👉Product must be returned in original condition to qualify for exchange.</li>
                            </ul>
                        </div>

                        {/* Shipping & Refunds Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🚚 Shipping & Refunds</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉Shipping charges are non-refundable.</li>
                                <li> 👉Refunds (if approved) will be processed within 5–7 working days via your original payment method or UPI.</li>
                                <li> 👉For COD orders, store credit or UPI refund may be provided.</li>
                            </ul>
                        </div>

                        {/* Important Notes Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">❗ Important Notes</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉No returns or exchanges will be accepted for products without video proof.</li>
                                <li> 👉Products purchased under sale/discount offers are not eligible for returns unless damaged.</li>
                            </ul>
                        </div>

                        {/* Request Process Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">📬 To Request a Return/Exchange</h2>
                            <p className="text-gray-300 mb-2">Please email us at favouserclothing@gmail.com with the following:</p>
                            <ul className=" list-inside text-gray-300 space-y-1 ml-4">
                                <li> 👉Order ID</li>
                                <li> 👉Reason for return/exchange</li>
                                <li> 👉Unpacking video & product condition video</li>
                            </ul>
                            <p className="text-gray-300 mt-4">
                                We appreciate your understanding and support as a growing brand. Your satisfaction matters to us — and so does fairness.
                            </p>
                        </div>
                    </section>

                    {/* Order Cancellation Section */}
                    <section className="space-y-8 pt-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#e2dcc8] mb-4">❌ Order Cancellation FAVOUSER</h1>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                At FAVOUSER, we understand that sometimes plans change. You may cancel your order under the following terms:
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🕐 When Can You Cancel?</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉Orders can be cancelled only before they are shipped.</li>
                                <li> 👉Once your order is packed and handed over to the courier, cancellation is no longer possible.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">🔄 After Shipping</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉If your order has already been shipped:
                                    <ul className=" ml-6 mt-1 space-y-1">
                                        <li> 👉You can no longer cancel it.</li>
                                        <li> 👉However, you may request a return or exchange as per our Return & Exchange Policy.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">📩 How to Cancel</h2>
                            <p className="text-gray-300 mb-2">To request cancellation:</p>
                            <ul className=" list-inside text-gray-300 space-y-1 ml-4">
                                <li> 👉Email us at favouserclothing@gmail.com</li>
                                <li> 👉Include your Order ID and reason for cancellation</li>
                                <li> 👉If your order is still unshipped, we will cancel and initiate your refund</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">💸 Refund for Cancelled Orders</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉Refunds (if applicable) are processed within 5–7 working days via original payment method or UPI.</li>
                                <li> 👉For COD orders, cancellation is only accepted before shipping and refunds (if prepaid) will be issued via UPI.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-[#e2dcc8] mb-2">❗ Important Notes</h2>
                            <ul className=" list-inside text-gray-300 space-y-2">
                                <li> 👉No cancellations are accepted after dispatch.</li>
                                <li> 👉We reserve the right to cancel orders in case of fraud detection, address issues, or stock errors. In such cases, a full refund will be provided.</li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <p className="text-gray-300">
                                If you have any questions or concerns, feel free to contact us at favouserclothing@gmail.com — we're here to help.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ReturnExchangePolicy;