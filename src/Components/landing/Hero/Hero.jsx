// src/Components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Empower Your Learning Journey with{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              LearnSphere
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore interactive courses, expert mentors, and personalized
            learning paths — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Browse Courses
            </button>
            <button className="border-2 border-violet-300 text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-float-delayed"></div>
          <div className="absolute -bottom-5 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
