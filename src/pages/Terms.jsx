import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <div className="bg-[#0f0f0f] text-gray-100 min-h-screen md:px-10 px-3 py-12">
                <div className="mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#e2dcc8]">Favouser – Terms & Conditions</h1>

                    <p className="mb-6 text-gray-300">
                        Welcome to Favouser! By visiting our website or placing an order, you're agreeing to the Terms & Conditions below. We've kept it simple so you can shop with confidence and clarity.
                    </p>

                    <Section title="About Favouser">
                        Favouser is an Indian clothing and accessories brand. We're here to offer stylish, quality apparel that's easy to shop and love. Everything listed on our website is subject to availability.
                    </Section>

                    <Section title="Who Can Shop">
                        You must be 18 years or older to place an order on our site. If you're under 18, please make sure a parent or guardian is supervising your purchase.
                    </Section>

                    <Section title="Product Info">
                        We do our best to show you exactly what you'll get — including accurate product descriptions, sizes, and colors. Please note that screen settings may slightly affect how colors appear.
                    </Section>

                    <Section title="Pricing & Payments">
                        <ul className="list-disc ml-6 space-y-2 text-gray-300">
                            <li>All prices are in Indian Rupees (INR ₹) and include taxes.</li>
                            <li>Prices and availability may change without notice.</li>
                            <li>Full payment is required at checkout.</li>
                            <li>All payments are processed securely — your safety is important to us.</li>
                        </ul>
                    </Section>

                    <Section title="Cancelling an Order">
                        If you need to cancel an order, please do so before it ships. Once it's been dispatched, cancellations aren't possible — but you can still request a return or exchange if eligible.
                    </Section>

                    <Section title="Our Content">
                        Everything you see on our website — from the photos to the designs and logos — belongs to Favouser. Please don't reuse or copy anything without asking us first.
                    </Section>

                    <Section title="We're Not Perfect (Limitations)">
                        While we do everything we can to give you a great experience, we're not responsible for indirect or accidental issues that might arise from using our website or services.
                    </Section>

                    <Section title="Your Privacy Matters">
                        We respect your privacy and protect your personal information. For full details, check out our <Link to="/favouser/privacy-policy" className="text-blue-400 underline">Privacy Policy</Link>.
                    </Section>

                    <Section title="Legal Stuff">
                        Our Terms & Conditions follow Indian law. If any legal matters come up, they'll be handled in the courts of [Insert City/State].
                    </Section>

                    <Section title="Need Help? Contact Us">
                        <p className="text-gray-300">We're here for you. If you have any questions about these terms or anything else, reach out to us at:</p>
                        <ul className="mt-2 space-y-1 text-gray-300">
                            <li>📧 <strong>favouserclothing@gmail.com</strong></li>
                            <li>📞 <strong>9891946805</strong></li>
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