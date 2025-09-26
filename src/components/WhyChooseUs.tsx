import React from 'react';
import { Users, Gamepad2, Heart, Wallet } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Профессиональное оборудование и команда с многолетним опытом проведения корпоративных мероприятий',
      color: 'text-blue-600',
      bg: 'bg-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'Более 40 активностей',
      description: 'Разнообразная программа с постоянно обновляющимся арсеналом активностей',
      color: 'text-orange-600',
      bg: 'bg-orange-600'
    },
    {
      icon: Heart,
      title: 'Для всех возрастов',
      description: 'Программы адаптируются под любую возрастную категорию участников',
      color: 'text-green-600',
      bg: 'bg-green-600'
    },
    {
      icon: Wallet,
      title: 'Под ваш бюджет',
      description: 'Гибкое ценообразование и программы под различные финансовые возможности',
      color: 'text-purple-600',
      bg: 'bg-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Зачем это нужно
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-yellow-400 mb-6 font-bold">
              Тимбилдинг помогает превратить сотрудников в настоящую команду.
            </p>
            <p className="text-xl text-gray-300 font-semibold">
              Если работа — это матч, то наше мероприятие — тренировка: 
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600"> соревновательная, увлекательная и запоминающаяся.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/30 hover:border-yellow-400 rounded-2xl p-10 shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 h-full">
                <div className={`bg-gradient-to-r from-yellow-400 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <reason.icon className="h-10 w-10 text-black" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-6">
                  {reason.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg font-semibold">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl max-w-3xl mx-auto hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-400">
            <h3 className="text-3xl font-black text-white mb-6">
              Готовы укрепить сплоченность коллектива?
            </h3>
            <p className="text-white/90 mb-8 text-xl font-semibold">
              Подберём программу под ваши задачи и бюджет
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2 hover:scale-105"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;