import React from 'react';

function Pricing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 px-4">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-4xl font-bold text-center mb-8">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            LearnSphere
          </span>{' '}
          <span className="text-black">Pricing Plans</span>{' '}
          
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border border-purple-300 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-gray-600 mb-4">Perfect for starters exploring online learning.</p>
            <p className="text-3xl font-bold mb-4 text-purple-600">₹999</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Basic Courses Access</li>
              <li>✔ Community Support</li>
              <li>❌ No Certification</li>
            </ul>
            <button
              onClick={() => alert('Basic Plan Selected!')}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Select Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border border-purple-300 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-gray-600 mb-4">Great for learners seeking certifications.</p>
            <p className="text-3xl font-bold mb-4 text-pink-500">₹2999</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ All Basic Features</li>
              <li>✔ Certifications Included</li>
              <li>✔ Monthly Live Sessions</li>
            </ul>
            <button
              onClick={() => alert('Pro Plan Selected!')}
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border border-purple-300 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-gray-600 mb-4">Best for professionals with mentorship needs.</p>
            <p className="text-3xl font-bold mb-4 text-red-500">₹5999</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ All Pro Features</li>
              <li>✔ 1-on-1 Mentorship</li>
              <li>✔ Personal Learning Coach</li>
            </ul>
            <button
              onClick={() => alert('Premium Plan Selected!')}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;