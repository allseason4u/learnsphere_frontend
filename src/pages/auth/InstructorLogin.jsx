import React from 'react';
import { Link } from "react-router-dom";

function InstructorLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-black">Instructor Login</span>{' '}
         
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          <Link
            to="/instructor/Dashboard"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </Link>
         
        </form>
      </div>
    </div>
  );
}

export default InstructorLogin;