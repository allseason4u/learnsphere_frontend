// src/Components/Testimonials.jsx
import React from "react";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      feedback:
        "I understood the concepts of marketing plans and managing them to target large audiences. The interactive approach made complex topics simple!",
      role: "Marketing Manager",
      avatar: "AS",
    },
    {
      name: "Rohan Mehta",
      feedback:
        "The best platform for understanding concepts. I enhanced my skills with confidence thanks to the beneficial courses and amazing mentors!",
      role: "Full Stack Developer",
      avatar: "RM",
    },
    {
      name: "Priya Verma",
      feedback:
        "As a parent, I trust LearnSphere for my child. The interactive content keeps them engaged, motivated, and excited about learning.",
      role: "Parent",
      avatar: "PV",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Learners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who transformed their careers with
            LearnSphere
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-4">
                "{testimonial.feedback}"
              </p>
              <div className="flex text-yellow-400">{"★".repeat(5)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
