import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/d59feda7-2e1a-4287-bb5b-5583086ec269.jpg";
const EUROPE_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/5c58dfbe-d19e-4599-a7a4-ffc5c7d486b1.jpg";
const CRUISE_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/da1b2222-cc76-4805-bf63-f396f412053e.jpg";

const hotTours = [
  { id: 1, name: "Мальдивы", days: 10, price: 89900, oldPrice: 145000, image: HERO_IMAGE, badge: "🔥 Горящий", stars: 5, meals: "Всё включено" },
  { id: 2, name: "Париж", days: 7, price: 62500, oldPrice: 98000, image: EUROPE_IMAGE, badge: "💎 Хит", stars: 4, meals: "Завтраки" },
  { id: 3, name: "Средиземноморский круиз", days: 14, price: 118000, oldPrice: 180000, image: CRUISE_IMAGE, badge: "🚢 Круиз", stars: 5, meals: "Всё включено" },
];

const categories = [
  { icon: "🏖️", name: "Пляжный отдых", count: 234 },
  { icon: "🏔️", name: "Горные туры", count: 87 },
  { icon: "🏛️", name: "Экскурсии", count: 156 },
  { icon: "🚢", name: "Круизы", count: 43 },
  { icon: "🎿", name: "Горные лыжи", count: 68 },
  { icon: "🌿", name: "Эко-туры", count: 92 },
];

export default function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [search, setSearch] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [tourists, setTourists] = useState("2");

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[hsl(var(--background))]" />

        {/* Animated blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, #FF6B2C, transparent)' }} />
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-orange/30 bg-neon-orange/10 text-neon-orange text-sm font-body mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
              Горящие туры — скидки до 60%
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none mb-6 animate-fade-in"
              style={{ animationDelay: '0.1s', opacity: 0 }}>
              ОТКРОЙ
              <br />
              <span className="text-gradient-orange">МИР С НАМИ</span>
            </h1>

            <p className="font-body text-xl text-white/70 mb-10 max-w-xl animate-fade-in"
              style={{ animationDelay: '0.2s', opacity: 0 }}>
              Более 5000 направлений, горящие предложения каждый день, система лояльности и рассрочка без переплат
            </p>

            {/* Search box */}
            <div className="card-glass rounded-2xl p-4 md:p-6 animate-fade-in"
              style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="md:col-span-1">
                  <label className="text-xs text-white/40 font-body uppercase tracking-wider mb-1 block">Куда</label>
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-neon-orange/50 transition-colors"
                    placeholder="Направление"
                    value={where}
                    onChange={e => setWhere(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 font-body uppercase tracking-wider mb-1 block">Когда</label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-neon-orange/50 transition-colors"
                    value={when}
                    onChange={e => setWhen(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 font-body uppercase tracking-wider mb-1 block">Туристов</label>
                  <select
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50 transition-colors"
                    value={tourists}
                    onChange={e => setTourists(e.target.value)}
                  >
                    {["1","2","3","4","5","6+"].map(n => (
                      <option key={n} value={n} className="bg-gray-900">{n} чел.</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => onNavigate('catalog')}
                    className="w-full gradient-orange text-white font-display font-semibold text-lg py-3 px-6 rounded-xl hover-scale glow-orange transition-all"
                  >
                    НАЙТИ ТУР
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 md:gap-16 justify-center">
              {[["5000+", "направлений"], ["180K+", "туристов"], ["98%", "довольных"], ["24/7", "поддержка"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient-orange">{num}</div>
                  <div className="font-body text-xs text-white/50 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOT TOURS */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-1 gradient-orange rounded-full" />
              <span className="text-neon-orange font-body text-sm uppercase tracking-widest">Лучшие предложения</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">ГОРЯЩИЕ ТУРЫ</h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="hidden md:flex items-center gap-2 text-neon-cyan font-body hover:gap-4 transition-all"
          >
            Все туры <Icon name="ArrowRight" size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotTours.map((tour, i) => (
            <div
              key={tour.id}
              className="card-glass rounded-2xl overflow-hidden card-hover cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              onClick={() => onNavigate('booking')}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="hot-badge text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {tour.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="font-display text-2xl font-bold text-white">{tour.name}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: tour.stars }).map((_, j) => (
                      <span key={j} className="text-neon-gold text-xs">★</span>
                    ))}
                    <span className="text-white/60 text-xs ml-2 font-body">{tour.meals}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-white/50 font-body text-sm">
                    <Icon name="Clock" size={14} />
                    {tour.days} дней
                  </div>
                  <div className="text-right">
                    <div className="text-white/40 text-xs font-body line-through">{tour.oldPrice.toLocaleString()} ₽</div>
                    <div className="font-display text-2xl font-bold text-gradient-orange">{tour.price.toLocaleString()} ₽</div>
                  </div>
                </div>
                <button className="w-full gradient-orange text-white font-display font-semibold py-3 rounded-xl hover-scale transition-all">
                  ЗАБРОНИРОВАТЬ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-8 h-1 gradient-cyan rounded-full" />
              <span className="text-neon-cyan font-body text-sm uppercase tracking-widest">Все виды отдыха</span>
              <div className="w-8 h-1 gradient-cyan rounded-full" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">КАТЕГОРИИ ТУРОВ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => onNavigate('catalog')}
                className="card-glass rounded-2xl p-6 text-center card-hover group animate-fade-in"
                style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-body font-semibold text-white text-sm group-hover:text-neon-orange transition-colors">{cat.name}</div>
                <div className="text-white/40 text-xs mt-1 font-body">{cat.count} туров</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "ShieldCheck", title: "Гарантия безопасности", desc: "Все туроператоры сертифицированы и проверены", color: "text-neon-orange" },
            { icon: "CreditCard", title: "Рассрочка 0%", desc: "Оплата частями без переплат до 12 месяцев", color: "text-neon-cyan" },
            { icon: "Headphones", title: "Поддержка 24/7", desc: "Помогаем до, во время и после путешествия", color: "text-neon-pink" },
            { icon: "Gift", title: "Бонусы за туры", desc: "Накапливайте баллы и получайте скидки", color: "text-neon-gold" },
          ].map((item, i) => (
            <div key={item.title} className="card-glass rounded-2xl p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
              <div className={`${item.color} mb-4`}>
                <Icon name={item.icon} fallback="Star" size={36} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="font-body text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden gradient-orange p-10 md:p-16 glow-orange">
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: `url(${EUROPE_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">НЕ УПУСТИ МОМЕНТ!</h2>
                <p className="font-body text-white/80 text-lg">Горящие туры заканчиваются быстро. Зарегистрируйся и получи доступ к эксклюзивным предложениям</p>
              </div>
              <button
                onClick={() => onNavigate('profile')}
                className="shrink-0 bg-white text-neon-orange font-display font-bold text-xl px-10 py-4 rounded-2xl hover-scale transition-all shadow-2xl"
              >
                ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}