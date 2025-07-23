import React from "react";
import { Mail } from "lucide-react";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-36 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-32">
        {/* Section 1: Icon, Name, and Description */}
        <div className="text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="">
              <img src={assets.logo_dark} alt="" />
            </div>
          </div>
          <p className="text-gray-300">
            Tamadon is your trusted partner in creative printing, delivering
            professional and high-quality services. Tamadon is your trusted
            partner in creative printing, 
          </p>
        </div>

        {/* Section 2: Links */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-300 hover:text-white transition"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Newsletter */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to receive our latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
