import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/d59feda7-2e1a-4287-bb5b-5583086ec269.jpg";
const EUROPE_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/5c58dfbe-d19e-4599-a7a4-ffc5c7d486b1.jpg";

const cartItems = [
  { id: 1, name: "Мальдивы. Рай на земле", dates: "15 июня — 25 июня 2025", tourists: 2, image: HERO_IMAGE, price: 89900, meals: "All inclusive", status: "В корзине" },
  { id: 2, name: "Романтический Париж", dates: "10 августа — 17 августа 2025", tourists: 2, image: EUROPE_IMAGE, price: 62500, meals: "BB", status: "Отложен" },
];

export default function CartPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.tourists, 0);
  const bonusPoints = Math.floor(total * 0.05);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-2">КОРЗИНА</h1>
          <p className="font-body text-white/50">{cartItems.length} тура выбрано</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, i) => (
              <div key={item.id} className="card-glass rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-36 md:h-auto relative shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
                      <button className="text-white/30 hover:text-neon-pink transition-colors ml-4">
                        <Icon name="X" size={18} />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="flex items-center gap-1 text-white/50 font-body text-sm">
                        <Icon name="Calendar" size={13} /> {item.dates}
                      </span>
                      <span className="flex items-center gap-1 text-white/50 font-body text-sm">
                        <Icon name="Users" size={13} /> {item.tourists} туриста
                      </span>
                      <span className="flex items-center gap-1 text-white/50 font-body text-sm">
                        <Icon name="UtensilsCrossed" size={13} /> {item.meals}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`text-xs font-body px-2.5 py-1 rounded-full ${
                          item.status === "В корзине" ? "bg-neon-orange/20 text-neon-orange" : "bg-white/10 text-white/40"
                        }`}>{item.status}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-white/40 text-xs font-body">{item.tourists} × {item.price.toLocaleString()} ₽</div>
                        <div className="font-display text-2xl font-bold text-gradient-orange">
                          {(item.price * item.tourists).toLocaleString()} ₽
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo */}
            <div className="card-glass rounded-2xl p-5">
              <div className="flex gap-3">
                <input
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-neon-orange/50"
                  placeholder="Промокод или номер карты лояльности"
                />
                <button className="gradient-orange text-white font-display font-semibold px-6 py-3 rounded-xl hover-scale shrink-0">
                  ПРИМЕНИТЬ
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="card-glass rounded-2xl p-6 sticky top-24">
              <h3 className="font-display text-xl font-bold text-white mb-6">ИТОГО</h3>

              <div className="space-y-3 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between font-body text-sm">
                    <span className="text-white/50 truncate mr-2">{item.name}</span>
                    <span className="text-white shrink-0">{(item.price * item.tourists).toLocaleString()} ₽</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-3 flex justify-between font-body text-sm">
                  <span className="text-neon-orange">Бонусные баллы</span>
                  <span className="text-neon-orange">+{bonusPoints.toLocaleString()} ⭐</span>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-body text-white/60">К оплате</span>
                  <div className="font-display text-3xl font-bold text-gradient-orange">
                    {total.toLocaleString()} ₽
                  </div>
                </div>
                <div className="font-body text-xs text-white/30 mt-1">или {Math.ceil(total / 12).toLocaleString()} ₽ × 12 мес. в рассрочку</div>
              </div>

              <button
                onClick={() => onNavigate('booking')}
                className="w-full gradient-orange text-white font-display font-bold text-lg py-4 rounded-xl hover-scale glow-orange mb-3"
              >
                ОФОРМИТЬ ЗАКАЗ
              </button>
              <button
                onClick={() => onNavigate('catalog')}
                className="w-full bg-white/5 border border-white/10 text-white font-display font-semibold py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                + ДОБАВИТЬ ТУР
              </button>

              {/* Trust */}
              <div className="mt-6 flex flex-col gap-2">
                {[["ShieldCheck", "Безопасная оплата"], ["Lock", "Данные защищены"], ["RefreshCw", "Возврат в 48 часов"]].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2 text-white/40 font-body text-xs">
                    <Icon name={icon} fallback="Check" size={13} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
