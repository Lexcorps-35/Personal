import React, { useState } from "react";

const NavLinks = () => {
  const [active, setActive] = useState("Home");

  const links = [
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "services", label: "Experiences" },
    { id: "booking", label: "Booking" },
  ];

  return (
    <>
      {/* Desktop Navbar Links */}
      <div className="hidden md:flex bg-red-200 rounded-full p-1 space-x-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                active === link.id
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-600 hover:bg-white/60"
              }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default NavLinks;
