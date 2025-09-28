import React,{ useState } from 'react'

  const images = [
    "/1755594343016.jpg",
    "/1759090259853.jpg",
    "/photo_2025-09-19_02-17-46.jpg",
    "/photo_2025-09-19_02-18-09.jpg",
  ];




const Gallery = () => {
    const [selected, setSelected] = useState(null);
  return (
       <section id="gallery" className="scroll-mt-40 py-10 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
                  
          </div>
           {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>
          <img
            src={selected}
            alt="Full view"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
    
  )
}

export default Gallery