import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/j5wbB7bM/photo-62-2025-09-23-12-14-40.jpg"
          alt="Team building activity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
            <span className="animate-fadeInUp block">Тимбилдинг для команд</span><br />
            <span className="animate-fadeInRight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">от 10 до 300+ человек</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-yellow-300 mb-12 font-bold animate-fadeInLeft">
            Энергия, драйв и командный дух
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2 hover:scale-105"
            >
              Узнать подробнее
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-4 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-2 hover:scale-105"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-125 transition-transform" onClick={scrollToAbout}>
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-3 rounded-full">
          <ChevronDown className="h-10 w-10 text-black" />
        </div>
      </div>
    </section>
  );
};

export default Hero;