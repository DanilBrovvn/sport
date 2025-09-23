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
      title: 'Более 20 игр',
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Зачем это нужно
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-blue-600 mb-4">
              Тимбилдинг помогает превратить сотрудников в настоящую команду.
            </p>
            <p className="text-lg text-gray-600">
              Если работа — это матч, то наше мероприятие — тренировка: 
              <span className="font-semibold text-sky-600"> соревновательная, увлекательная и запоминающаяся.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`${reason.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы укрепить сплоченность коллектива?
            </h3>
            <p className="text-white/80 mb-6">
              Подберём программу под ваши задачи и бюджет
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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