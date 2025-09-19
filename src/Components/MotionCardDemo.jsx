"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { GiSelfLove } from "react-icons/gi";
import { MdTravelExplore, MdDinnerDining } from "react-icons/md";
import { RiChatPrivateLine } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa6";
import { useState } from "react";

const cards = [
  { icon: <FaAddressBook className="w-6 h-6" />, text: "Social Dates" },
  { icon: <GiSelfLove className="w-6 h-6" />, text: "Intimate Rendezvous" },
  { icon: <MdTravelExplore className="w-6 h-6" />, text: "Travel Companion" },
  { icon: <MdDinnerDining className="w-6 h-6" />, text: "Dinner Dates" },
  { icon: <RiChatPrivateLine className="w-6 h-6" />, text: "Private Encounters" },
];

export default function MotionCardsDemo() {
  const [offset, setOffset] = useState(0);

  // Infinite upward scroll
  useAnimationFrame(() => {
    setOffset((prev) => (prev - 0.4) % (cards.length * 80)); // 80px ≈ card height + gap
  });

  return (
    <div className="flex items-center justify-center bg-neutral-900 overflow-hidden">
      <div className="relative h-[320px] w-[340px] overflow-hidden flex flex-col items-center">
        {/* Fade overlays */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-neutral-900 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent z-10" />

        <div
          className="flex flex-col gap-3"
          style={{ transform: `translateY(${offset}px)` }}
        >
          {[...cards, ...cards].map((card, index) => {
            // Find center
            const containerCenter = 160; // half of container (320px)
            const cardY = index * 80 + offset;
            const distance = Math.abs(containerCenter - cardY);

            // Scale & fade based on distance
            const opacity = Math.max(0.3, 1 - distance / 200);
            const scale = Math.max(0.9, 1 - distance / 500);

            // Active card check
            const isActive = distance < 40;

            return (
              <motion.div
                key={index}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-md transition-all duration-500 ${
                  isActive
                    ? "bg-red-400 text-white scale-105"
                    : "bg-white/70 text-neutral-800"
                }`}
                style={{
                  opacity,
                  scale,
                }}
              >
                {card.icon}
                <span className="font-semibold">{card.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
