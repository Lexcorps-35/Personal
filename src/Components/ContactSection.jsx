import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/yourprofile",
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/yourprofile",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/yourprofile",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:youremail@example.com",
      hoverColor: "hover:text-red-500",
    },
    {
      name: "Call",
      icon: <FaPhone size={24} />,
      url: "tel:+1234567890",
      hoverColor: "hover:text-green-500",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-40 py-20 px-6 bg-black text-center"
    >

      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map(({ name, icon, url, hoverColor }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
             className={`group flex flex-col items-center gap-3 p-6 w-36 h-36 
              rounded-2xl shadow-lg text-gray-200 transition-all duration-300 
              hover:shadow-xl ${hoverColor}
              bg-white/10 backdrop-blur-md border border-white/20`}
          >
            <div  className="w-12 h-12 flex items-center justify-center 
              rounded-full bg-white/20 backdrop-blur-sm border border-white/30 
              group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <span className="text-sm font-medium">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
