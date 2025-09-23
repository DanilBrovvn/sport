import React from 'react';
import { Target, Zap, Trophy, Heart } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      name: 'Танки-гусеницы',
      description: 'движение только при полной слаженности',
      icon: Target,
      color: 'blue-600',
      image: 'https://i.postimg.cc/k4c4XSZq/photo-12-2025-09-23-12-14-40.jpg'
    },
    {
      name: 'Аквидук',
      description: 'строим акведук',
      icon: Zap,
      color: 'orange-600',
      image: 'https://i.postimg.cc/zfk5nrkk/photo-29-2025-09-23-12-14-40.jpg'
    },
    {
      name: 'Мега-Дженга',
      description: 'проверка выдержки и усидчивости',
      icon: Trophy,
      color: 'green-600',
      image: 'https://i.postimg.cc/xjBCj9pk/photo-45-2025-09-23-12-14-40.jpg'
    },
    {
      name: 'Стрельба из лука',
      description: 'меткость и концентрация',
      icon: Target,
      color: 'purple-600',
      image: 'https://i.postimg.cc/cCgV5yf2/photo-42-2025-09-23-12-14-40.jpg'
    },
    {
      name: 'Реактивная акула',
      description: 'синхронный прыжковый заезд',
      icon: Zap,
      color: 'red-600',
      image: 'https://i.postimg.cc/7LPPthhR/photo-49-2025-09-23-12-14-40.jpg'
    },
    {
      name: 'Беличье колесо',
      description: 'Проверка силы и выносливости',
      icon: Heart,
      color: 'indigo-600',
      image: 'https://i.postimg.cc/DyDzZnCJ/photo-17-2025-09-23-12-14-40.jpg'
    }
  ];

  const additionalChallenges = [
    'Гигантский баскетбол и волейбол',
    'Корнхол — американская игра на меткость',
    'Перетягивание каната-сосиски',
    'Сумоисты, гигантские ботинки, надувные бабуки'
  ];

  return (
    <section id="challenges" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Испытания
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Программа включает разные активности — динамичные и спокойные, чередуя нагрузку.
          </p>
        </div>

        {/* Featured Challenges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <div key={index} className="group bg-white border border-gray-200 hover:border-blue-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={challenge.image}
                  alt={challenge.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`bg-${challenge.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <challenge.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {challenge.name}
                </h3>
                <p className="text-gray-600">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Challenges */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            В нашем арсенале также:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {additionalChallenges.map((challenge, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 border border-gray-200 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{challenge}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-orange-600 italic">
              И это далеко не всё — список игр постоянно пополняется.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;