import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-gray-700 w-full px-8 py-3">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo + Copyright */}
        <div className="flex  items-center gap-x-5">
          <img src={assets.logo} alt="logo" className="w-24" />
          <div className="hidden md:block h-7 w-px bg-gray-500/90"></div>
          <p className="text-base font-semibold">© 2024 TET. All rights reserved.</p>
        </div>
        {/* Social Media */}
        <div className="flex items-center gap-x-5">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-4 text-gray-600 text-lg">
            <a href="#">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
