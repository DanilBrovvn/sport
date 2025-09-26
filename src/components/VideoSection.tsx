import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  // Embed-ссылка Rutube
  const videoUrl = "https://rutube.ru/play/embed/252d8555cc522b2d286cdac71797a3a6/?p=null";
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-sky-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Посмотрите, как это происходит
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Взгляните на атмосферу наших мероприятий!
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="aspect-video">
              {/* Вставка Rutube через embed */}
              <iframe
                width="720"
                height="405"
                src={videoUrl}
                title="Активный Тимбилдинг - Видео"
                className="w-full h-full"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                webkitAllowFullScreen
                mozallowFullScreen
                allowFullScreen
              ></iframe>
              
              {/* Фолбэк — placeholder */}
              {false && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="bg-blue-600/80 backdrop-blur-sm p-6 rounded-full mb-4 mx-auto w-24 h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-300">Видео будет здесь</h3>
                    <p className="text-gray-300">Замените URL в коде на ссылку вашего видео</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;