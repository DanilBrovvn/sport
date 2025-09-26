import React from 'react';
import { Users, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t-4 border-yellow-400 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-3 rounded-xl">
                <Users className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Активный Тимбилдинг</h3>
                <p className="text-lg text-yellow-400 font-bold">Энергия, драйв и командный дух</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg font-semibold">
              Профессиональная организация тимбилдинговых мероприятий для команд от 10 до 300+ человек. 
              Превращаем коллег в настоящую команду через активности, игры и командные испытания.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-400">Быстрые ссылки</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg font-semibold">
                  О программе
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg font-semibold">
                  Испытания
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg font-semibold">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-6 text-green-400">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-green-400" />
                <a href="tel:+79202770781" className="text-gray-300 hover:text-green-400 transition-colors text-lg font-semibold">
                  +7 920 277-07-81
                </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-yellow-400/30 pt-10 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 text-lg font-semibold">
              <span>© 2024 Активный Тимбилдинг. Сделано с</span>
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-yellow-400 text-lg font-bold">
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