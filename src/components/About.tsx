import React from 'react';
import { Clock, Users, Award, Mic } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Users, label: '10-300+ участников', color: 'text-blue-600' },
    { icon: Clock, label: '1,5–2 часа', color: 'text-orange-600' },
    { icon: Award, label: 'Опытные инструкторы', color: 'text-green-600' },
    { icon: Mic, label: 'Полное оборудование', color: 'text-purple-600' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Как это проходит
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <div className="flex items-start space-x-3 hover:bg-blue-50 p-3 rounded-lg transition-colors duration-200 border border-blue-100">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p>Участники делятся на команды, придумывают название и выбирают капитана</p>
                </div>
                <div className="flex items-start space-x-3 hover:bg-orange-50 p-3 rounded-lg transition-colors duration-200 border border-orange-100">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p>Разминка, настрой и старт программы</p>
                </div>
                <div className="flex items-start space-x-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200 border border-green-100">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p>Команды соревнуются друг с другом на каждом этапе</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-white text-lg leading-relaxed">
                Тимбилдинг объединяет, развивает лидерство и создаёт атмосферу здорового соперничества.
              </p>
            </div>

            {/* Format Details */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  <span className="text-gray-700 font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeInRight">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/YqyvW1SS/photo-6-2025-09-23-12-14-40.jpg"
                alt="Team building process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-90">Игр в арсенале</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;