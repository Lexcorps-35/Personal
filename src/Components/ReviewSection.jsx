import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import "./ReviewSection.css";

const reviews = [
  {
    id: 1,
    name: "Jerry",
    subscribers: "1.56M subscribers",
    text: "A wonderful and genuine person, We had a fantastic initial meeting and an even better reunion. Her energy and vibes are exactly what i need. An unforgettable experience.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "JohnPaul",
    subscribers: "900K subscribers",
    text: "From our first meeting to the next,her company is always enjoyable and down-to-earth. She brings an amazing energy that is truly my type. A forever sweet connection",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Peter hills",
    subscribers: "1.2M subscribers",
    text: "An incredible person with a homely and vibrant energy, our time together is always fantastic and unforgettable. Truly my kind of vibe",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 4,
    name: "Anthony Eli",
    subscribers: "300K subscribers",
    text: "Tracy offers exactly what you crave, she is worth every dime and more, providing s truly premium amd satisfying experience. i highly recommend her and look forward to our next meeting.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];
const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/sarahjohnson",
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      url: "https://twitter.com/sarahjohnson",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: CiLinkedin,
      url: "https://linkedin.com/in/sarahjohnson",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: MdOutlineEmail,
      url: "mailto:sarah@sarahjohnson.com",
      hoverColor: "hover:text-indigo-500",
    },
  ];

const ReviewSection = () => {
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
      setKey((prev) => prev + 1); // reset animation
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setActive(index);
    setKey((prev) => prev + 1);
  };

  return (

    <section className="flex flex-col items-center justify-center py-12 px-6  bg-gray-50 dark:bg-neutral-900 text-center">
      <div>
        <h2 className="text-3xl font-bold text-red-300 mb-8">Customer Reviews</h2>
      </div>
      <div className="flex justify-center gap-6 mb-8 w-full transition-all duration-700 ease-in-out">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="relative cursor-pointer flex items-center justify-center"
            onClick={() => handleClick(index)}
          >
          
            {active === index && (
              <svg
                key={key}
                className="absolute transition-transform duration-500 ease-in-out"
                style={{
                  width: "118%", 
                  height: "118%",
                }}
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="45" className="progress-ring" />
              </svg>
            )}

            <img
              src={review.image}
              alt={review.name}
              className={`rounded-full object-cover transition-all duration-700 ease-in-out
                ${
                  active === index
                    ? "w-24 h-24 md:w-32 md:h-32 z-10 scale-110 opacity-100"
                    : "w-14 h-14 md:w-20 md:h-20 opacity-40"
                }
              `}
            />
          </div>
        ))}
      </div>

      
      <p
        key={key + "-text"}
        className="text-lg md:text-2xl dark:text-white font-medium max-w-2xl mb-6 transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn"
      >
        {reviews[active].text}
      </p>

      
      <div
        key={key + "-author"}
        className="transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn"
      >
        <span className="bg-cyan-100 text-cyan-800 px-4 py-1 rounded-full font-semibold">
          {reviews[active].name}
        </span>
      </div>

  <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-10 px-4 md:px-8 w-full mt-9">
      <div className="max-w-6xl mx-auto">
        
        
        {/* Copyright and Disclaimer */}
        <div className="text-center">
          <p className="text-sm mb-2">© 2025 Tracyhot | Discreet Companionship</p>
          <p className="text-xs text-gray-500 mb-4">This website is intended for audiences 18+. All interactions are based on mutual consent and respect.</p>
          
          <div className="inline-block bg-amber-800 text-white text-xs font-semibold px-3 py-1 rounded mb-4">
            Must be 18+ to access
          </div>
          
         
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            {/* Social Links */}
<div className="flex justify-center">
  <div className="flex space-x-6">
    {socialLinks.map(({ name, icon: IconComponent, url, hoverColor }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 transition-transform duration-300 hover:scale-110 hover:shadow-lg ${hoverColor}`}
        aria-label={name}
      >
        <IconComponent size={18} />
      </a>
    ))}
  </div>
</div>
          </div>
      </div>
    </footer>


      </section>
  
  );
};

export default ReviewSection;
