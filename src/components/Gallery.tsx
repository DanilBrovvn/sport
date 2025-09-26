import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSection, setCurrentSection] = useState<'board' | 'team'>('board');

  const boardGames = [
    'https://i.postimg.cc/YqyvW1SS/photo_6_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/L89M27SY/photo_68_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/ydSMLCm5/photo-72-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/kXrJ3fDK/photo-55-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/9fz5q7rc/photo_70_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/sDRr0x0J/photo_66_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/65LXsKkx/photo_67_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/CMnhQWMw/photo_54_2025-09-23_12-14-40.jpg'
  ];

  const teamBuilding = [
    'https://i.postimg.cc/Xv2jRWyY/photo_52_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/B6c8Lk8W/photo_4_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/vBkQmvhR/photo_50_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/cCgV5yf2/photo_42_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/HnFCpspT/photo_33_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/HWvYZT1Z/photo_24_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/900WmnZY/photo_22_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/rwrwR3bh/photo_18_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/wM4jDpgr/photo_14_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/s2PfwS37/photo_20_2025-09-23_12-14-40.jpg',
    'https://i.postimg.cc/Twz6x32f/photo-63-2025-09-23-12-14-40.jpg',
    'https://i.postimg.cc/65RQyFFM/photo-46-2025-09-23-12-14-40.jpg'
  ];

  const allImages = [...boardGames, ...teamBuilding];

  const openModal = (index: number, section: 'board' | 'team') => {
    const sectionImages = section === 'board' ? boardGames : teamBuilding;
    const globalIndex = section === 'board' ? index : boardGames.length + index;
    setCurrentImage(globalIndex);
    setCurrentSection(section);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);
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

        {/* Настольные игры */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Настольные игры
            </h3>
            <p className="text-lg text-gray-600">
              Интеллектуальные развлечения для сплочения команды
            </p>
          </div>

          <div className="gallery-grid">
            {boardGames.map((image, index) => (
              <div
                key={index}
                className="gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(index, 'board')}
              >
                <img
                  src={image}
                  alt={`Настольные игры ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Тимбилдинг */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Тимбилдинг
            </h3>
            <p className="text-lg text-gray-600">
              Активные командные испытания и соревнования
            </p>
          </div>

          <div className="gallery-grid">
            {teamBuilding.map((image, index) => (
              <div
                key={index}
                className="gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(index, 'team')}
              >
                <img
                  src={image}
                  alt={`Тимбилдинг ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
                src={allImages[currentImage]}
                alt={`Мероприятие ${currentImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full">
                {currentImage + 1} / {allImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;