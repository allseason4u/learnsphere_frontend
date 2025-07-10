// src/Components/FAQ.jsx
import React, { useState } from "react";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is LearnSphere?",
      answer:
        "LearnSphere is a comprehensive online learning platform offering interactive courses, quizzes, and resources tailored for students of all levels. We provide personalized learning paths and expert mentorship.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "Simply create an account, browse our extensive course catalog, and click 'Enroll Now' on any course that interests you. Premium courses require payment, while many foundational courses are free.",
    },
    {
      question: "Can parents track student progress?",
      answer:
        "Absolutely! We offer a comprehensive parent dashboard where you can monitor your child's progress, quiz scores, time spent learning, and overall performance across all enrolled courses.",
    },
    {
      question: "Is there a certificate after course completion?",
      answer:
        "Yes! Most of our courses offer downloadable certificates upon successful completion. These certificates are recognized by industry professionals and can boost your resume.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-violet-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-bold text-violet-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
