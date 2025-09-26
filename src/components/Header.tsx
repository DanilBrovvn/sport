import React from 'react';
import { Users } from 'lucide-react';

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg border-b border-yellow-400/30 z-50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl hover:scale-110 transition-transform duration-200 shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Активный Тимбилдинг</h1>
              <p className="text-base text-yellow-400 hidden sm:block font-semibold">Энергия и драйв</p>
            </div>
          </div>
          
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-2 hover:scale-105"
          >
            Заказать
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;