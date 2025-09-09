import React, { useState } from "react";

const BottomNav = () => {
  const [active, setActive] = useState("Home");

  const links = [
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "services", label: "Experiences" },
    { id: "booking", label: "Booking" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-red-200 border-t border-gray-300 shadow-lg z-50">
      <div className="flex justify-around">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`flex-1 text-center py-3 text-sm font-medium transition-all duration-300
              ${
                active === link.id
                  ? "bg-white text-gray-900 shadow-inner"
                  : "text-gray-600 hover:bg-white/60"
              }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
