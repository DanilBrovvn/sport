import React from 'react';
import { Phone, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Контакты
          </h2>
          <p className="text-2xl text-yellow-300 max-w-2xl mx-auto font-bold">
            Подберём программу под ваш бюджет и задачи.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl">
                <Phone className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-white">Телефон</h3>
              <a href="tel:+79202770781" className="text-2xl text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110 inline-block font-bold">
                +7 920 277-07-81
              </a>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl">
                <User className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-white">Организатор</h3>
              <p className="text-2xl text-purple-400 font-bold">Александр Мышев</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;