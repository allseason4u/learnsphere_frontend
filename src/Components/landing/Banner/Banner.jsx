// src/Components/Banner.jsx

/*import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Elevate Your Experience  <br />
            
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Join thousands of learners and get access to the best online courses, mentors, and learning tools to shape your future.<br /><br/>
            This emphasizes the community aspect of online learning, creating a sense of belonging and shared experience among students. 
          </p> <br/>
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"> 
            Click to know more
          </button>
          
        </div>

        <div className="w-half md:w-1/8">
          <img
          
  src="https://cdn-icons-png.flaticon.com/128/1831/1831971.png"
  alt="Education Banner"
  className="w-full"

/>
        
        </div>
      </div>
    </section>
  );
};

export default Banner;*/
// src/Components/Banner.jsx
import React from "react";
const Banner = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Elevate Your Learning & Experience
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of learners and get access to the best online
              courses, mentors, and learning tools to shape your future.
            </p>
            <p className="text-gray-600 mb-8">
              This emphasizes the community aspect of online learning, creating
              a sense of belonging and shared experience among students.
            </p>
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Click to know more
            </button>
          </div>

          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1831/1831971.png"
                alt="Teacher and students"
                className="w-48 h-48 mx-auto mb-8 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10K+", label: "Learners" },
                { value: "200+", label: "Courses" },
                { value: "100+", label: "Mentors" },
                { value: "10+", label: "Countries" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
