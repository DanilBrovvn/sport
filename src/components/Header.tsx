import React, { useState } from 'react';
import { Users, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg border-b border-yellow-400/30 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl hover:scale-110 transition-transform duration-200 shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-white">Активный Тимбилдинг</h1>
              <p className="text-sm sm:text-base text-yellow-400 hidden sm:block font-semibold">Энергия и драйв</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-yellow-400 transition-colors font-semibold"
              >
                О программе
              </button>
              <button
                onClick={() => scrollToSection('challenges')}
                className="text-white hover:text-yellow-400 transition-colors font-semibold"
              >
                Испытания
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-yellow-400 transition-colors font-semibold"
              >
                Галерея
              </button>
            </nav>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-1 hover:scale-105"
            >
              Заказать
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl hover:scale-110 transition-transform duration-200 shadow-lg"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className={`py-4 space-y-4 border-t border-yellow-400/30 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-yellow-400 transition-all duration-200 font-semibold py-3 px-2 rounded-lg hover:bg-yellow-400/10"
            >
              О программе
            </button>
            <button
              onClick={() => scrollToSection('challenges')}
              className="block w-full text-left text-white hover:text-yellow-400 transition-all duration-200 font-semibold py-3 px-2 rounded-lg hover:bg-yellow-400/10"
            >
              Испытания
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-white hover:text-yellow-400 transition-all duration-200 font-semibold py-3 px-2 rounded-lg hover:bg-yellow-400/10"
            >
              Галерея
            </button>
            <button
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-1 mt-4"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;