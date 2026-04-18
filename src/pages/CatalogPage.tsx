import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/d59feda7-2e1a-4287-bb5b-5583086ec269.jpg";
const EUROPE_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/5c58dfbe-d19e-4599-a7a4-ffc5c7d486b1.jpg";
const CRUISE_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/da1b2222-cc76-4805-bf63-f396f412053e.jpg";

const tabs = ["Все туры", "Россия", "Заграница", "Круизы"];

const allTours = [
  { id: 1, name: "Мальдивы. Рай на земле", country: "Заграница", days: 10, price: 89900, image: HERO_IMAGE, badge: "🔥", stars: 5, meals: "All inclusive", rating: 4.9, reviews: 312 },
  { id: 2, name: "Романтический Париж", country: "Заграница", days: 7, price: 62500, image: EUROPE_IMAGE, badge: "💎", stars: 4, meals: "BB", rating: 4.7, reviews: 198 },
  { id: 3, name: "Средиземноморский круиз", country: "Круизы", days: 14, price: 118000, image: CRUISE_IMAGE, badge: "🚢", stars: 5, meals: "All inclusive", rating: 4.8, reviews: 87 },
  { id: 4, name: "Сочи. Лучшее лето", country: "Россия", days: 7, price: 34900, image: HERO_IMAGE, badge: "🌊", stars: 4, meals: "BB", rating: 4.5, reviews: 445 },
  { id: 5, name: "Байкал. Дикая природа", country: "Россия", days: 8, price: 42000, image: CRUISE_IMAGE, badge: "🏔️", stars: 4, meals: "HB", rating: 4.6, reviews: 156 },
  { id: 6, name: "Барселона. Гауди и море", country: "Заграница", days: 9, price: 74000, image: EUROPE_IMAGE, badge: "🏛️", stars: 5, meals: "BB", rating: 4.8, reviews: 267 },
  { id: 7, name: "Атлантический круиз", country: "Круизы", days: 21, price: 185000, image: CRUISE_IMAGE, badge: "🌊", stars: 5, meals: "All inclusive", rating: 4.9, reviews: 43 },
  { id: 8, name: "Алтай. Горные вершины", country: "Россия", days: 10, price: 38000, image: HERO_IMAGE, badge: "🏔️", stars: 4, meals: "FB", rating: 4.7, reviews: 89 },
  { id: 9, name: "Токио и Киото", country: "Заграница", days: 12, price: 132000, image: EUROPE_IMAGE, badge: "🎌", stars: 5, meals: "BB", rating: 4.9, reviews: 134 },
];

export default function CatalogPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [activeTab, setActiveTab] = useState("Все туры");
  const [sortBy, setSortBy] = useState("popular");
  const [priceMax, setPriceMax] = useState(200000);

  const filtered = allTours.filter(t => activeTab === "Все туры" || t.country === activeTab);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 gradient-orange rounded-full" />
            <span className="text-neon-orange font-body text-sm uppercase tracking-widest">5000+ направлений</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white">КАТАЛОГ ТУРОВ</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="card-glass rounded-2xl p-6 sticky top-24">
              <h3 className="font-display text-lg font-bold text-white mb-6">ФИЛЬТРЫ</h3>

              <div className="mb-6">
                <label className="font-body text-sm text-white/50 uppercase tracking-wider mb-3 block">Направление</label>
                <div className="space-y-2">
                  {tabs.map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl font-body text-sm transition-all ${
                        activeTab === tab
                          ? "gradient-orange text-white font-semibold"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="font-body text-sm text-white/50 uppercase tracking-wider mb-3 block">
                  Макс. цена: <span className="text-neon-orange">{priceMax.toLocaleString()} ₽</span>
                </label>
                <input
                  type="range"
                  min={20000}
                  max={200000}
                  step={5000}
                  value={priceMax}
                  onChange={e => setPriceMax(+e.target.value)}
                  className="w-full accent-neon-orange"
                />
              </div>

              <div className="mb-6">
                <label className="font-body text-sm text-white/50 uppercase tracking-wider mb-3 block">Сортировка</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-body text-sm focus:outline-none focus:border-neon-orange/50"
                >
                  <option value="popular" className="bg-gray-900">По популярности</option>
                  <option value="cheap" className="bg-gray-900">Сначала дешевле</option>
                  <option value="expensive" className="bg-gray-900">Сначала дороже</option>
                  <option value="days" className="bg-gray-900">По длительности</option>
                </select>
              </div>

              <button className="w-full gradient-orange text-white font-display font-semibold py-3 rounded-xl hover-scale">
                ПРИМЕНИТЬ
              </button>
            </div>
          </aside>

          {/* Tours grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <span className="font-body text-white/50">Найдено: <span className="text-white font-semibold">{filtered.length}</span> туров</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((tour, i) => (
                <div
                  key={tour.id}
                  className="card-glass rounded-2xl overflow-hidden card-hover cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
                  onClick={() => onNavigate('booking')}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-3 left-3 text-xl">{tour.badge}</div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <span className="text-neon-gold text-xs">★</span>
                      <span className="text-white text-xs font-body">{tour.rating}</span>
                      <span className="text-white/40 text-xs font-body">({tour.reviews})</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-bold text-white mb-1">{tour.name}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-white/40 font-body text-xs flex items-center gap-1">
                        <Icon name="Clock" size={12} /> {tour.days} дней
                      </span>
                      <span className="text-white/40 font-body text-xs">{tour.meals}</span>
                      <span className="text-white/40 font-body text-xs">{tour.country}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/30 text-xs font-body">от</div>
                        <div className="font-display text-xl font-bold text-gradient-orange">{tour.price.toLocaleString()} ₽</div>
                      </div>
                      <button className="gradient-orange text-white font-display text-sm font-semibold px-5 py-2 rounded-xl hover-scale">
                        ВЫБРАТЬ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
