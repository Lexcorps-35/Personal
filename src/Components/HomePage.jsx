import React, { useEffect } from 'react'
import Navbar from './Navbar'
import AOS from "aos";
import "aos/dist/aos.css";


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
        src="src/assets/bmw.webp" 
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
      <p className="text-lg leading-relaxed text-gray-400">
        Beyond elegance and charm, I value <span className="text-yellow-400 font-semibold">genuine chemistry</span>, 
        because it is the spark that turns an evening into a memory.
      </p>
      <p className="text-lg leading-relaxed text-gray-300">
        Whether strolling through the city, sharing a glass of wine, or 
        escaping into a weekend getaway — I believe every moment should feel 
        <span className="text-red-400 font-semibold"> effortless</span> and 
        <span className="text-yellow-400 font-semibold"> unforgettable</span>.
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
        <h2 className="text-3xl font-semibold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <img src="src/assets/bmw.webp" alt="gallery" className="rounded-lg" />
          <img src="src/assets/bmw.webp" alt="gallery" className="rounded-lg" />
          <img src="/src/assets/bmw.webp" alt="gallery" className="rounded-lg" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className=" scroll-mt-40 py-20 px-6 bg-neutral-900">
        <h2 className="text-3xl font-semibold text-center mb-10">Experiences</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-bold">Dinner Dates</h3>
            <p>Elegant evenings with fine dining and stimulating conversation.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Travel Companion</h3>
            <p>Join me for unforgettable journeys, near or far.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Private Encounters</h3>
            <p>Exclusive time together, tailored to your desires.</p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="scroll-mt-40 py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6">Booking</h2>
        <p className="mb-8">Your privacy is my highest priority.</p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-neutral-800 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-neutral-800 text-white"
          />
          <input
            type="text"
            placeholder="Preferred Date/Time"
            className="w-full p-3 rounded bg-neutral-800 text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded bg-neutral-800 text-white"
          ></textarea>
          <button className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full">
            Submit Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-neutral-900 text-center text-sm text-neutral-400">
        © 2025 Sofia | Discreet Companionship <br />
        <p className="mt-2">
          This website is intended for audiences 18+. All interactions are based
          on mutual consent and respect.
        </p>
      </footer>
    </div>
    </div>
  )
}

export default HomePage