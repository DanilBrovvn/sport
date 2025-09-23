import React from 'react';
import { Users, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Активный Тимбилдинг</h3>
                <p className="text-sm text-blue-400">Энергия, драйв и командный дух</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Профессиональная организация тимбилдинговых мероприятий для команд от 10 до 300+ человек. 
              Превращаем коллег в настоящую команду через активности, игры и командные испытания.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  О программе
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Испытания
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+79202770781" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +7 920 277-07-81
                </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-300">
              <span>© 2024 Активный Тимбилдинг. Сделано с</span>
              <Heart className="h-4 w-4 text-red-500" />
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-blue-400 text-sm">
                Александр Мышев • Организатор мероприятий
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;