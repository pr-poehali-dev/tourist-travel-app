import { useState } from "react";
import Icon from "@/components/ui/icon";

const EUROPE_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/5c58dfbe-d19e-4599-a7a4-ffc5c7d486b1.jpg";
const CRUISE_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/da1b2222-cc76-4805-bf63-f396f412053e.jpg";

const tabs = ["Поездки", "Документы", "Бонусы", "Профиль"];

const trips = [
  { name: "Романтический Париж", dates: "10–17 авг 2024", status: "Завершён", image: EUROPE_IMAGE, booking: "BK-2891" },
  { name: "Средиземноморский круиз", dates: "5–19 сен 2025", status: "Подтверждён", image: CRUISE_IMAGE, booking: "BK-3104" },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("Поездки");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Profile header */}
        <div className="card-glass rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl gradient-orange flex items-center justify-center">
              <span className="font-display text-4xl font-bold text-white">АИ</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} className="text-white" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-3xl font-bold text-white">Алексей Иванов</h1>
            <p className="font-body text-white/50 mt-1">aleksey@mail.ru · +7 999 123-45-67</p>
            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
              <span className="px-3 py-1 bg-neon-orange/20 text-neon-orange text-xs font-body rounded-full">⭐ Статус: Путешественник</span>
              <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-xs font-body rounded-full">✓ Верифицирован</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-gradient-orange">2 840</div>
            <div className="font-body text-white/40 text-sm">бонусных баллов</div>
            <button className="mt-3 text-neon-cyan font-body text-sm hover:text-white transition-colors">
              Списать баллы →
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-secondary rounded-2xl p-1.5">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-xl font-display font-semibold text-sm transition-all ${
                activeTab === tab ? "gradient-orange text-white" : "text-white/40 hover:text-white"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "Поездки" && (
          <div className="space-y-4 animate-fade-in">
            {trips.map((trip, i) => (
              <div key={i} className="card-glass rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-48 h-36 md:h-auto relative shrink-0">
                  <img src={trip.image} alt={trip.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{trip.name}</h3>
                    <p className="font-body text-white/40 text-sm mt-1">{trip.dates}</p>
                    <p className="font-body text-white/30 text-xs mt-1">Бронь: {trip.booking}</p>
                  </div>
                  <div className="flex flex-col gap-3 items-start md:items-end">
                    <span className={`px-3 py-1 text-sm font-body rounded-full ${
                      trip.status === "Завершён" ? "bg-white/10 text-white/50" : "bg-neon-orange/20 text-neon-orange"
                    }`}>{trip.status}</span>
                    <div className="flex gap-2">
                      <button className="text-neon-cyan font-body text-sm flex items-center gap-1 hover:text-white transition-colors">
                        <Icon name="FileText" size={14} /> Документы
                      </button>
                      <button className="text-white/30 font-body text-sm flex items-center gap-1 hover:text-white transition-colors">
                        <Icon name="MapPin" size={14} /> Трек
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Документы" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Авиабилеты (Париж)", "Страховой полис", "Ваучер отеля", "Круизный билет"].map((doc, i) => (
                <div key={doc} className="card-glass rounded-2xl p-5 flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}>
                  <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="FileText" size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-base font-semibold text-white">{doc}</div>
                    <div className="font-body text-xs text-white/40 mt-0.5">PDF · 2.4 MB</div>
                  </div>
                  <button className="text-neon-cyan hover:text-white transition-colors">
                    <Icon name="Download" size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 card-glass rounded-2xl p-6 border border-neon-orange/20">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Upload" size={20} className="text-neon-orange" />
                <h3 className="font-display text-lg font-semibold text-white">Загрузить документ</h3>
              </div>
              <p className="font-body text-white/40 text-sm mb-4">Паспорт, загранпаспорт, страховка — до 10 МБ</p>
              <button className="gradient-orange text-white font-display font-semibold px-6 py-3 rounded-xl hover-scale">
                ВЫБРАТЬ ФАЙЛ
              </button>
            </div>
          </div>
        )}

        {activeTab === "Бонусы" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Накоплено", value: "2 840", icon: "Star", color: "text-neon-gold" },
                { label: "Потрачено", value: "500", icon: "ShoppingBag", color: "text-neon-orange" },
                { label: "Сгорает", value: "340", icon: "Clock", color: "text-neon-pink" },
              ].map(item => (
                <div key={item.label} className="card-glass rounded-2xl p-6 text-center">
                  <div className={`${item.color} flex justify-center mb-3`}>
                    <Icon name={item.icon} fallback="Star" size={32} />
                  </div>
                  <div className="font-display text-3xl font-bold text-white">{item.value}</div>
                  <div className="font-body text-white/40 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-4">ИСТОРИЯ НАЧИСЛЕНИЙ</h3>
              <div className="space-y-3">
                {[
                  { desc: "Бронирование тура в Париж", date: "15 авг 2024", points: "+1200" },
                  { desc: "Бонус за отзыв", date: "20 авг 2024", points: "+100" },
                  { desc: "Списание при оплате", date: "5 сен 2024", points: "-500" },
                  { desc: "Бронирование круиза", date: "1 янв 2025", points: "+1890" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/5">
                    <div>
                      <div className="font-body text-sm text-white">{item.desc}</div>
                      <div className="font-body text-xs text-white/30 mt-0.5">{item.date}</div>
                    </div>
                    <div className={`font-display font-bold text-lg ${item.points.startsWith('+') ? 'text-neon-orange' : 'text-white/30'}`}>
                      {item.points} ⭐
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Профиль" && (
          <div className="animate-fade-in">
            <div className="card-glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-6">ЛИЧНЫЕ ДАННЫЕ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[["Имя", "Алексей"], ["Фамилия", "Иванов"], ["Email", "aleksey@mail.ru"], ["Телефон", "+7 999 123-45-67"]].map(([label, val]) => (
                  <div key={label}>
                    <label className="font-body text-sm text-white/50 mb-2 block">{label}</label>
                    <input defaultValue={val} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50" />
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6 mt-2">
                <h4 className="font-display text-base font-semibold text-white mb-4">СОГЛАСИЯ</h4>
                <div className="space-y-3">
                  {[
                    "Согласие на обработку персональных данных",
                    "Согласие на получение рекламных рассылок",
                    "Согласие на использование cookies",
                  ].map(consent => (
                    <label key={consent} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-neon-orange/50 bg-neon-orange/10 flex items-center justify-center shrink-0">
                        <Icon name="Check" size={12} className="text-neon-orange" />
                      </div>
                      <span className="font-body text-sm text-white/60 group-hover:text-white transition-colors">{consent}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button className="mt-8 gradient-orange text-white font-display font-bold px-8 py-3 rounded-xl hover-scale glow-orange">
                СОХРАНИТЬ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
