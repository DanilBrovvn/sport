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
    <section id="challenges" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Испытания
          </h2>
          <p className="text-2xl text-yellow-300 max-w-3xl mx-auto font-bold">
          Программа включает разные активности — динамичные и спокойные, чередуя нагрузку.
          </p>
        </div>

        {/* Featured Challenges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/30 hover:border-yellow-400 rounded-2xl shadow-2xl overflow-hidden hover:shadow-yellow-400/50 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={challenge.image}
                  alt={challenge.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r from-yellow-400 to-red-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <challenge.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-3">
                  {challenge.name}
                </h3>
                <p className="text-yellow-300 text-lg font-semibold">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Challenges */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-400/30 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-center">
            В нашем арсенале также:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {additionalChallenges.map((challenge, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-2 border-purple-400/30 p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-400">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                <span className="text-white font-bold text-lg">{challenge}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl text-yellow-400 italic font-bold">
              И это далеко не всё — список игр постоянно пополняется.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;