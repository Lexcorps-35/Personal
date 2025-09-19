import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    url: "https://instagram.com/tracyyyhot2025",
    color: "text-pink-500",
    hoverColor: "hover:text-pink-500",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={24} />,
    url: "https://x.com/tracyyyyyhot",
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "https://linkedin.com/in/ozioma-mbajunwa-4167a3233",
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={24} />,
    url: "mailto:doozybooboo9@gmail.com",
    color: "text-red-500",
    hoverColor: "hover:text-red-500",
  },
  {
    name: "Call",
    icon: <FaPhone size={24} />,
    url: "tel:+2349126110656",
    color: "text-green-500",
    hoverColor: "hover:text-green-500",
  },
];


  return (
    <section
      id="contact"
      className="scroll-mt-40 py-20 px-6 bg-black text-center"
    >
      <div className="flex flex-wrap justify-center gap-6">
       {socialLinks.map(({ name, icon, url, color, hoverColor }) => (
  <a
    key={name}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      group flex flex-col items-center gap-3 p-6 w-36 h-36 
      rounded-2xl shadow-lg text-gray-200 transition-all duration-300 
      hover:shadow-xl  
      bg-white/10 backdrop-blur-md border border-white/20
      ${color} md:text-gray-200 ${hoverColor}
    `}
  >
    {icon}
    <span>{name}</span>
  </a>
))}

      </div>
    </section>
  );
};

export default ContactSection;
