import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://i.postimg.cc/0QxjsnVV/photo-10-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/3w2NVVFy/photo-11-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/k4c4XSZq/photo-12-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/RhZ03F5f/photo-13-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/wM4jDpgr/photo-14-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/T2twzrgc/photo-15-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/X7XJ4pg6/photo-16-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/DyDzZnCJ/photo-17-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/rwrwR3bh/photo-18-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/8CgPRwgT/photo-19-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/NFsK1DTK/photo-1-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/s2PfwS37/photo-20-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/rm8Vbmpb/photo-21-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/900WmnZY/photo-22-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Wzyshw7L/photo-23-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/HWvYZT1Z/photo-24-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/MKhWwtT1/photo-25-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/L8Lm8fYw/photo-26-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/jdWsBBss/photo-27-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/PqHTpx1x/photo-28-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/zfk5nrkk/photo-29-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/ZnwCjNFV/photo-2-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/50NJgR7W/photo-30-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/85KS0m9J/photo-31-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/7h5k8TrB/photo-32-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/HnFCpspT/photo-33-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/SQP4LVcH/photo-34-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/VLb8KMRv/photo-35-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/CxTVX1PN/photo-36-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/bwxjhh4j/photo-37-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/d0JcQfKZ/photo-38-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/7LX85Nxs/photo-39-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Qtr9Mhdk/photo-3-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/PxxGY8Jt/photo-40-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/W3fBnbq0/photo-41-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/cCgV5yf2/photo-42-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/44YyTYPk/photo-43-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/tJK8KS5T/photo-44-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/xjBCj9pk/photo-45-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/65RQyFFM/photo-46-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/t4j4P2jp/photo-47-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/6pf5hnWR/photo-48-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/7LPPthhR/photo-49-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/B6c8Lk8W/photo-4-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/vBkQmvhR/photo-50-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/cC3dt8kv/photo-51-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Xv2jRWyY/photo-52-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/FR7rm6jg/photo-53-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/CMnhQWMw/photo-54-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/kXrJ3fDK/photo-55-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/TYrRRgWS/photo-56-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/4xsXny63/photo-57-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/4xPscGPQ/photo-59-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/KcfkZXSB/photo-5-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/TPHxkcZy/photo-60-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Bvvsczw9/photo-61-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/j5wbB7bM/photo-62-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Twz6x32f/photo-63-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/wMDdjY3J/photo-64-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/zDhNjKpB/photo-65-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/sDRr0x0J/photo-66-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/65LXsKkx/photo-67-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/L89M27SY/photo-68-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/rpb6Gwrx/photo-69-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/YqyvW1SS/photo-6-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/9fz5q7rc/photo-70-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/ht2Rjr4C/photo-71-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/ydSMLCm5/photo-72-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Fz52qCGK/photo-73-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Fzy2QbnV/photo-74-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/9Ff40xCS/photo-7-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/9QRrtr4Y/photo-8-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/Dw9mCnLk/photo-9-2025-09-23-12-14-40.jpg'
  ];

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Фотогалерея
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите, как проходят наши мероприятия — энергия, эмоции и командный дух в каждом кадре
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {images.slice(0, 12).map((image, index) => (
            <div
              key={index}
              className="gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Team building activity ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => openModal(0)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Посмотреть все фото ({images.length})
          </button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center gallery-modal"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={images[currentImage]}
                alt={`Team building activity ${currentImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full">
                {currentImage + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;