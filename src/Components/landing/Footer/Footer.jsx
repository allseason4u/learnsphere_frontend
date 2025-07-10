import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              LearnSphere
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering students with quality education, interactive content,
              and accessible resources.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              >
                <span className="text-sm font-bold">t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              >
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  E-books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center text-xs">
                  📍
                </div>
                <p className="text-gray-300 text-sm">Hyderabad, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center text-xs">
                  📞
                </div>
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center text-xs">
                  ✉
                </div>
                <p className="text-gray-300 text-sm">support@learnsphere.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LearnSphere. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
