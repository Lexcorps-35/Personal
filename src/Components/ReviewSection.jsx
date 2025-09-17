import React, { useEffect, useState } from "react";
import "./ReviewSection.css";

const reviews = [
  {
    id: 1,
    name: "The Tech Chap",
    subscribers: "1.56M subscribers",
    text: "There are so many VPNs to choose from — but my wife and I always use Surfshark.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    subscribers: "900K subscribers",
    text: "Surfshark is simply the best choice for privacy and speed.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Jane & Kate",
    subscribers: "1.2M subscribers",
    text: "We feel secure online thanks to Surfshark.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 4,
    name: "Michael",
    subscribers: "600K subscribers",
    text: "The speed difference is insane. I can’t use anything else now.",
    image: "",
  },
];

const ReviewSection = () => {
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
      setKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setActive(index);
    setKey((prev) => prev + 1);
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-6 bg-white dark:bg-neutral-900 text-center">
      {/* Profiles in a row */}
      <div className="flex gap-8 mb-10 justify-center items-center">
        {reviews.map((review, index) => {
          const isActive = active === index;
          return (
            <div
              key={review.id}
              className="relative cursor-pointer flex items-center justify-center"
              onClick={() => handleClick(index)}
            >
              {/* Animated progress ring */}
              {isActive && (
                <svg
                  key={key}
                  className="absolute w-[90px] h-[90px] countdown-circle"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="45" />
                </svg>
              )}

              <img
                src={review.image}
                alt={review.name}
                className={`rounded-full object-cover transition-all duration-500
                  ${isActive ? "w-24 h-24 md:w-32 md:h-32 scale-110 ring-4 ring-cyan-500" : "w-16 h-16 md:w-20 md:h-20 opacity-50"}
                `}
              />
            </div>
          );
        })}
      </div>

      {/* Review Text */}
      <p className="text-lg md:text-2xl font-medium max-w-2xl mb-6 transition-opacity duration-500">
        {reviews[active].text}
      </p>

      {/* Author */}
      <div>
        <span className="bg-cyan-100 text-cyan-800 px-4 py-1 rounded-full font-semibold">
          {reviews[active].name}
        </span>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {reviews[active].subscribers}
        </p>
      </div>
    </section>
  );
};

export default ReviewSection;
