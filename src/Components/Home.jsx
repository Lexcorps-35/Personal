import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { TbMichelinStarFilled } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <div className="bg-[#FFF9EE] min-h-screen">
     

      {/* Hero Section */}
          <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-16 pt-25">
              
               <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full slow-bounce opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-red-400 rounded-full slow-bounce opacity-40"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-red-600 rounded-full slow-bounce opacity-50"></div>
        {/* Left Content */}
        <div className="max-w-lg">
          <p className="uppercase text-sm tracking-wider mb-3">
            Hello, I'm Tracyhot
          </p>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Offering Discreet <br />
            Companionship for <br /> Exclusive Moments
          </h1>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-[#EDE6F8] text-sm px-6 py-3 rounded-full border-3 border-black/10 hover:shadow-[0_0_25px_#b74b4b]  shadow-2xl transition"
          >
            BOOK 1:1 COACHING CALL <FiArrowRight />
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Circular image */}
          <img
                      src="/1755594343016.jpg"
            alt="Wilma"
            className="w-85 h-85 rounded-full object-cover"
          />
          {/* Decorative circle */}
           <TbMichelinStarFilled  className="absolute top-0 right-0 w-15 h-15 text-gray-800 bg-red-400 rounded-full slow-spin"/> 
        </div>
      </section>
      <HomePage/>
    </div>
  );
}
