import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-gray-800 font-medium hover:bg-gray-50 rounded-xl transition"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              {faq.question}
              <IoIosAdd
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-${index}`}
              className={`px-5 pb-5 text-gray-600 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
