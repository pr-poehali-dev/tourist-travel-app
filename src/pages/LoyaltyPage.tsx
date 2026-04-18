import Icon from "@/components/ui/icon";

const levels = [
  { name: "Новичок", points: "0–999", icon: "🌱", color: "from-gray-500 to-gray-600", benefits: ["1% кэшбэк баллами", "Базовые скидки"] },
  { name: "Путешественник", points: "1000–4999", icon: "✈️", color: "from-neon-orange to-amber-500", benefits: ["3% кэшбэк", "Приоритетная поддержка", "Ранний доступ к горящим"] },
  { name: "Исследователь", points: "5000–14999", icon: "🌍", color: "from-cyan-500 to-blue-600", benefits: ["5% кэшбэк", "Бесплатная страховка", "VIP-зал в аэропорту", "Гибкий возврат"] },
  { name: "Элита", points: "15000+", icon: "👑", color: "from-yellow-400 to-amber-600", benefits: ["10% кэшбэк", "Персональный менеджер", "Трансфер бесплатно", "Апгрейд номера", "Все привилегии"] },
];

const howToEarn = [
  { icon: "ShoppingBag", text: "Бронируй туры", desc: "2–10% от стоимости тура", points: "+до 15 000 ⭐" },
  { icon: "Star", text: "Оставляй отзывы", desc: "После каждой поездки", points: "+100 ⭐" },
  { icon: "Users", text: "Приглашай друзей", desc: "По реферальной ссылке", points: "+500 ⭐" },
  { icon: "Bell", text: "Акции и события", desc: "Двойные баллы по пятницам", points: "+2× ⭐" },
];

export default function LoyaltyPage() {
  const currentPoints = 2840;
  const currentLevel = 1;
  const nextLevelPoints = 5000;
  const progress = (currentPoints / nextLevelPoints) * 100;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-1 gradient-gold rounded-full" />
            <span className="text-neon-gold font-body text-sm uppercase tracking-widest">Программа привилегий</span>
            <div className="w-10 h-1 gradient-gold rounded-full" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">КАМЧАТКА <span className="text-gradient-orange">STARS</span></h1>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">Путешествуй больше — получай больше. Накапливай звёздные баллы с каждой поездки</p>
        </div>

        {/* Current status */}
        <div className="relative card-glass rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 gradient-orange opacity-10" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center">
                <div className="text-7xl mb-3">✈️</div>
                <div className="font-display text-2xl font-bold text-white">Путешественник</div>
                <div className="font-body text-white/40 text-sm">Ваш текущий статус</div>
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between font-body text-sm mb-2">
                  <span className="text-white/60">Ваши баллы: <span className="text-white font-semibold">{currentPoints.toLocaleString()}</span></span>
                  <span className="text-white/60">До Исследователя: <span className="text-neon-cyan font-semibold">{(nextLevelPoints - currentPoints).toLocaleString()}</span></span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-orange rounded-full glow-orange transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between font-body text-xs text-white/30 mt-1">
                  <span>1 000 ⭐</span><span>5 000 ⭐</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[["14", "туров"], ["2840", "баллов"], ["3", "года с нами"]].map(([val, label]) => (
                    <div key={label} className="text-center">
                      <div className="font-display text-3xl font-bold text-gradient-orange">{val}</div>
                      <div className="font-body text-xs text-white/40">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Levels */}
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-10">УРОВНИ ПРИВИЛЕГИЙ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {levels.map((level, i) => (
              <div
                key={level.name}
                className={`rounded-2xl p-6 card-hover animate-fade-in ${
                  i === currentLevel ? "ring-2 ring-neon-orange glow-orange" : ""
                }`}
                style={{
                  background: i === currentLevel
                    ? 'linear-gradient(135deg, rgba(255,107,44,0.2), rgba(255,45,138,0.1))'
                    : 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              >
                {i === currentLevel && (
                  <div className="text-xs font-body text-neon-orange mb-3 font-semibold uppercase tracking-wider">← Ваш уровень</div>
                )}
                <div className="text-4xl mb-3">{level.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-1">{level.name}</h3>
                <div className="font-body text-xs text-white/40 mb-4">{level.points} баллов</div>
                <ul className="space-y-2">
                  {level.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 font-body text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-orange shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How to earn */}
        <div>
          <h2 className="font-display text-4xl font-bold text-white text-center mb-10">КАК КОПИТЬ БАЛЛЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {howToEarn.map((item, i) => (
              <div key={item.text} className="card-glass rounded-2xl p-6 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="w-14 h-14 gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} fallback="Star" size={24} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">{item.text}</h3>
                <p className="font-body text-sm text-white/40 mb-3">{item.desc}</p>
                <div className="font-display text-neon-orange font-bold">{item.points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}