import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import NavLinks from './Navlinks';

const Navbar = () => {
    
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled ? "bg-black/90 backdrop-blur-md shadow-sm" : "bg-transparent"
  }`}
>
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
    {/* Logo / Brand Name */}
    <h1
      className={`text-2xl font-serif italic transition-colors duration-500 ${
        scrolled ? "text-white" : "text-black"
      }`}
    >
      @Tracyhot
    </h1>

    {/* Nav Links */}
    <NavLinks />

    {/* Social Icons */}
    <div className="flex items-center gap-4">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        className={`border-3 border-red-300 transition-all duration-300 ${
          scrolled ? "text-white" : "text-black"
        } hover:text-black hover:scale-125 hover:-translate-y-1 hover:bg-[#dd6d7c] shadow-[0_0_25px_#b74b4b] p-1 rounded-full`}
      >
        <FaFacebook className="w-6 h-6" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        className={`border-3 border-red-300 transition-all duration-300 ${
          scrolled ? "text-white" : "text-black"
        } hover:text-black hover:scale-125 hover:-translate-y-1 hover:bg-[#dd6d7c] shadow-[0_0_25px_#b74b4b] p-1 rounded-full`}
      >
        <FaTwitter className="w-6 h-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        className={`border-3 border-red-300 transition-all duration-300 ${
          scrolled ? "text-white" : "text-black"
        } hover:text-black hover:scale-125 hover:-translate-y-1 hover:bg-[#dd6d7c] shadow-[0_0_25px_#b74b4b] p-1 rounded-full`}
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
