import React, { useEffect } from 'react'
import Navbar from './Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import ContactSection from './ContactSection';
import MotionCardsDemo from './MotionCardDemo';
import Faqsect from './FaqSect';

 const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in providing premium experience focused on connection, engaging conversation and mutual enjoyment. For specific details about the nature of our time together, i prefer to discuss that personally once you contact me as i tailor each meeting to the connection and comfort level we establish ",
    },
    {
      question: "How do i book time with you?",
      answer:
        "Booking is simple and discreet, please reach out via the contact form on my website with your preferred date, time and the type of experience you're seeking,or through my social media links in the footer.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, I collaborate with clients from all over the world via online sessions and remote communication tools.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "My rates are a reflection of my time, attention ad the premium,personalized experience i provide. I offer both fixed-rate packages and hourly options.",
    },
  ];


const HomePage = () => {
     useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // run only once
    });
  }, []);

  return (
      <div>
           <div className="bg-black text-white font-sans">
      <Navbar />


      {/* About Section */}
<section id="about" className="py-20 px-6 bg-neutral-900 text-center md:text-left mt-10">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    
    <div className="relative" data-aos="fade-right">
      <img
        src="/1755594343016.jpg" 
        alt="Tracyhot"
        className="w-72 h-72 mx-auto md:mx-0 object-cover rounded-2xl shadow-[0_0_30px_#dd6d7c]"
      />

      <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl"></div>
    </div>


    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold tracking-tight">
        About <span className="text-red-500">Me</span>
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        I’m <span className="font-semibold text-white">Tracyhot</span> — a 
        <span className="text-red-400 font-medium"> free-spirited traveler</span> with 
        a love for <span className="italic">candlelit dinners</span>, 
        whispered conversations, and the thrill of new adventures.
      </p>
      <p className="text-lg leading-relaxed text-gray-300">
        Beyond elegance and charm, I value <span>genuine chemistry</span>, 
        because it is the spark that turns an evening into a memory.
      </p>
      <p className="text-lg leading-relaxed text-gray-300">
        Whether strolling through the city, sharing a glass of wine, or 
        escaping into a weekend getaway — I believe every moment should feel 
        <span className="text-red-400 font-semibold"> effortless</span> and 
        <span> unforgettable</span>.
      </p>
      
      <a
        href="#booking"
        data-aos="zoom-in"
        className="inline-block mt-4 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105"
      >
        Let’s Create Memories
      </a>
    </div>
  </div>
</section>


      {/* Gallery */}
      <section id="gallery" className="scroll-mt-40 py-20 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <img src="/photo_2025-09-19_02-17-46.jpg" alt="gallery" className="rounded-lg" />
          <img src="/photo_2025-09-19_02-18-09.jpg" alt="gallery" className="rounded-lg" />
          <img src="/1755594343016.jpg" alt="gallery" className="rounded-lg" />
        </div>
      </section>

      {/* Services */}
        <section id="services" className=" scroll-mt-40 py-20 px-6 bg-neutral-900">
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
          
       
            <div className="max-w-3xl mx-auto space-y-6">
               <h2 className="text-4xl font-bold text-center mb-10">Experiences</h2>
         <ul className="space-y-4 text-left">
  <li className="flex items-start">
    <span className="w-2 h-2 mt-2 bg-red-500 rounded-full mr-3"></span>
    <div>
      <h3 className="text-xl font-bold">Dinner Dates</h3>
      <p>Elegant evenings with fine dining and stimulating conversation.</p>
    </div>
  </li>

  <li className="flex items-start">
    <span className="w-2 h-2 mt-2 bg-red-500 rounded-full mr-3"></span>
    <div>
      <h3 className="text-xl font-bold">Travel Companion</h3>
      <p>Join me for unforgettable journeys, near or far.</p>
    </div>
  </li>

  <li className="flex items-start">
    <span className="w-2 h-2 mt-2 bg-red-500 rounded-full mr-3"></span>
    <div>
      <h3 className="text-xl font-bold">Private Encounters</h3>
      <p>Exclusive time together, tailored to your desires.</p>
    </div>
  </li>
</ul>


            </div>
            <MotionCardsDemo />
          </div>
      </section>

      {/* Booking */}
      <section id="booking" className="scroll-mt-40 py-20 px-6 bg-black text-center">
          <h2 className="text-4xl font-bold mb-6">Booking</h2>
          <p className=' text-2xl text-red-200'>Get in touch..</p>
        <p className="mb-8">Your privacy is my highest priority.</p>
        <ContactSection />
      </section>

      </div>
      
    <div className="flex flex-col">
      
      <Faqsect faqs={faqs} />
    </div>


    </div>
  )
}

export default HomePage