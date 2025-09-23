import React from 'react';
import { Phone, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подберём программу под ваш бюджет и задачи.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-blue-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-all duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Телефон</h3>
              <a href="tel:+79202770781" className="text-lg text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 inline-block">
                +7 920 277-07-81
              </a>
            </div>
            <div className="text-center group">
              <div className="bg-green-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-all duration-300">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Организатор</h3>
              <p className="text-lg text-gray-600">Александр Мышев</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;