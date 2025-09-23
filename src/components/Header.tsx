import React from 'react';
import { Users } from 'lucide-react';

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 hover:shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-transform duration-200">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Активный Тимбилдинг</h1>
              <p className="text-sm text-blue-600 hidden sm:block">Энергия и драйв</p>
            </div>
          </div>
          
          <button
            onClick={scrollToContact}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Заказать
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;