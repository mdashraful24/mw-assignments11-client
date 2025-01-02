import React, { useState } from "react";
import { IoTriangle } from "react-icons/io5";

const ExtraSection = () => {
    const faqData = [
        {
            question: "What is the registration process?",
            answer: "To register, visit our registration page, fill out the necessary details, and submit now button. You will receive a confirmation email with your registration details.",
        },
        {
            question: "Do I have to pay any registration fees?",
            answer: "No, no registration fees are required. Our registration process is completely free of charge. Please get in touch with our support team for clarification if you encounter any information suggesting otherwise.",
        },
        {
            question: "What is the marathon route?",
            answer: "The marathon route will take you through the main streets and landmarks of the city. A detailed route map will be provided on the event day.",
        },
        {
            question: "Is there an age limit for participants?",
            answer: "Participants must be at least 18 years old to join the marathon. Minors need to be accompanied by a guardian.",
        },
        {
            question: "What should I bring on the marathon day?",
            answer: "Please bring your registration confirmation, a valid ID, and any personal items you may need during the race. Water stations will be available along the route.",
        }
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-base font-bold text-center text-purple-700 mb-3">
                        How it works
                    </h2>
                    <h2 className="text-2xl md:text-5xl font-extrabold text-center text-purple-800 mb-5">
                        Frequently Asked Questions
                    </h2>
                    <div className="mb-10 h-1 w-36 bg-[#591a6a] mx-auto"></div>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="p-4 rounded-lg shadow-md hover:shadow-lg">
                                <button
                                    className="w-full text-left font-semibold flex items-center"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <IoTriangle
                                        className={`mr-2 text-[#591a6a] transform transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : 'rotate-90'}`}
                                    />
                                    <span className="md:text-xl">{faq.question}</span>
                                </button>
                                {expandedIndex === index && (
                                    <div className="ml-6 mt-2 text-md:lg">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
