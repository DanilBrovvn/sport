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
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                Как это проходит
              </h2>
              
              <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
                <div className="flex items-start space-x-4 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 p-4 rounded-xl transition-colors duration-200 border-2 border-yellow-400/30 hover:border-yellow-400">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-black text-lg">1</span>
                  </div>
                  <p className="text-white font-semibold">Участники делятся на команды, придумывают название и выбирают капитана</p>
                </div>
                <div className="flex items-start space-x-4 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20 p-4 rounded-xl transition-colors duration-200 border-2 border-red-400/30 hover:border-red-400">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-black text-lg">2</span>
                  </div>
                  <p className="text-white font-semibold">Разминка, настрой и старт программы</p>
                </div>
                <div className="flex items-start space-x-4 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 p-4 rounded-xl transition-colors duration-200 border-2 border-green-400/30 hover:border-green-400">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-black text-lg">3</span>
                  </div>
                  <p className="text-white font-semibold">Команды соревнуются друг с другом на каждом этапе</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-400">
              <p className="text-white text-2xl leading-relaxed font-bold">
                Тимбилдинг объединяет, развивает лидерство и создаёт атмосферу здорового соперничества.
              </p>
            </div>

            {/* Format Details */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-yellow-400/30 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:-translate-y-2 hover:border-yellow-400">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <span className="text-white font-bold text-lg">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeInRight">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-yellow-400 to-red-500">
              <img
                src="https://i.postimg.cc/YqyvW1SS/photo-6-2025-09-23-12-14-40.jpg"
                alt="Team building process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-yellow-400">
              <div className="text-center">
                <div className="text-4xl font-black">20+</div>
                <div className="text-lg font-bold">Игр в арсенале</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;