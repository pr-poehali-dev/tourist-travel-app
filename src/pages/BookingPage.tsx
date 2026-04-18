import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/85876a33-1c2e-4618-8fe5-620b571a02e1/files/d59feda7-2e1a-4287-bb5b-5583086ec269.jpg";

const steps = ["Тур", "Туристы", "Паспорта", "Оплата"];

export default function BookingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [step, setStep] = useState(0);
  const [tourists, setTourists] = useState([
    { name: "", surname: "", birthdate: "", passport: "", passportExpiry: "", citizenship: "РФ" }
  ]);

  const addTourist = () => {
    setTourists([...tourists, { name: "", surname: "", birthdate: "", passport: "", passportExpiry: "", citizenship: "РФ" }]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-5xl font-bold text-white mb-2">БРОНИРОВАНИЕ</h1>
          <p className="font-body text-white/50">Мальдивы — 10 дней — All inclusive — 89 900 ₽</p>
        </div>

        {/* Steps */}
        <div className="flex items-center mb-10 relative">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-white/10" />
          <div
            className="absolute top-4 left-0 h-0.5 gradient-orange transition-all duration-500"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((s, i) => (
            <div key={s} className="flex-1 flex flex-col items-center relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
                i < step ? "gradient-orange text-white" :
                i === step ? "gradient-orange text-white glow-orange" :
                "bg-secondary text-white/40 border border-white/10"
              }`}>
                {i < step ? <Icon name="Check" size={14} /> : i + 1}
              </div>
              <span className={`font-body text-xs mt-2 transition-colors ${i === step ? "text-neon-orange" : "text-white/40"}`}>{s}</span>
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="card-glass rounded-3xl p-8">
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-white mb-6">ВАШИ ДАННЫЕ</h2>
              <div className="relative rounded-2xl overflow-hidden mb-6 h-48">
                <img src={HERO_IMAGE} className="w-full h-full object-cover" alt="тур" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-6">
                  <div>
                    <div className="font-display text-2xl font-bold text-white">Мальдивы. Рай на земле</div>
                    <div className="text-white/60 font-body mt-1">10 дней · All inclusive · 5★</div>
                    <div className="font-display text-3xl font-bold text-gradient-orange mt-2">89 900 ₽</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="font-body text-sm text-white/50 mb-2 block">Дата вылета</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50" />
                </div>
                <div>
                  <label className="font-body text-sm text-white/50 mb-2 block">Количество туристов</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50">
                    {["1", "2", "3", "4"].map(n => <option key={n} className="bg-gray-900">{n} чел.</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm text-white/50 mb-2 block">Тип номера</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50">
                    {["Стандарт", "Делюкс", "Бунгало над водой", "Президентский"].map(r => <option key={r} className="bg-gray-900">{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm text-white/50 mb-2 block">Питание</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50">
                    {["All inclusive", "Завтрак+ужин", "Только завтрак", "Без питания"].map(m => <option key={m} className="bg-gray-900">{m}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-white mb-6">ДАННЫЕ ТУРИСТОВ</h2>
              {tourists.map((tourist, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-6 mb-4">
                  <div className="font-display text-base text-neon-orange mb-4">ТУРИСТ {idx + 1}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      ["Имя (как в паспорте)", "name"],
                      ["Фамилия (как в паспорте)", "surname"],
                    ].map(([label, field]) => (
                      <div key={field}>
                        <label className="font-body text-sm text-white/50 mb-2 block">{label}</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50"
                          placeholder={label} />
                      </div>
                    ))}
                    <div>
                      <label className="font-body text-sm text-white/50 mb-2 block">Дата рождения</label>
                      <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50" />
                    </div>
                    <div>
                      <label className="font-body text-sm text-white/50 mb-2 block">Гражданство</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50">
                        {["РФ", "Беларусь", "Казахстан", "Другое"].map(c => <option key={c} className="bg-gray-900">{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={addTourist} className="flex items-center gap-2 text-neon-cyan font-body hover:text-white transition-colors">
                <Icon name="Plus" size={18} /> Добавить туриста
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-white mb-6">ПАСПОРТНЫЕ ДАННЫЕ</h2>
              {tourists.map((_, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-6 mb-4">
                  <div className="font-display text-base text-neon-orange mb-4">ПАСПОРТ ТУРИСТА {idx + 1}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm text-white/50 mb-2 block">Номер паспорта</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50"
                        placeholder="AB 1234567" />
                    </div>
                    <div>
                      <label className="font-body text-sm text-white/50 mb-2 block">Действителен до</label>
                      <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="font-body text-sm text-white/50 mb-2 block">Кем выдан</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50"
                        placeholder="Наименование органа выдачи" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3 mt-4 p-4 bg-neon-orange/10 border border-neon-orange/20 rounded-xl">
                <Icon name="Info" size={16} className="text-neon-orange mt-0.5 shrink-0" />
                <p className="font-body text-sm text-white/60">Данные должны точно совпадать с паспортом. Срок действия загранпаспорта должен превышать срок поездки минимум на 6 месяцев.</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-white mb-6">ОПЛАТА</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {[
                  { icon: "CreditCard", label: "Банковская карта", desc: "Visa, Mastercard, МИР" },
                  { icon: "Wallet", label: "СБП", desc: "Быстрая оплата" },
                  { icon: "Calendar", label: "Рассрочка 0%", desc: "До 12 месяцев" },
                ].map((method) => (
                  <button key={method.label} className="card-glass rounded-xl p-4 text-left border border-white/10 hover:border-neon-orange/50 transition-all">
                    <Icon name={method.icon} fallback="CreditCard" size={24} className="text-neon-orange mb-2" />
                    <div className="font-display text-sm font-semibold text-white">{method.label}</div>
                    <div className="font-body text-xs text-white/40 mt-1">{method.desc}</div>
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="font-body text-sm text-white/50 mb-2 block">Номер карты</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50"
                    placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-white/50 mb-2 block">Срок действия</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50"
                      placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-white/50 mb-2 block">CVV</label>
                    <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body focus:outline-none focus:border-neon-orange/50"
                      placeholder="•••" />
                  </div>
                </div>
              </div>
              <div className="mt-6 p-5 bg-secondary rounded-2xl">
                <div className="flex justify-between font-body text-white/60 mb-2">
                  <span>Тур (1 чел.)</span><span>89 900 ₽</span>
                </div>
                <div className="flex justify-between font-body text-white/60 mb-2">
                  <span>Сборы и налоги</span><span>0 ₽</span>
                </div>
                <div className="flex justify-between font-body text-neon-orange mb-2">
                  <span>Бонусов применено</span><span>−500 ₽</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3 flex justify-between font-display text-xl font-bold text-white">
                  <span>ИТОГО</span><span className="text-gradient-orange">89 400 ₽</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => step > 0 ? setStep(step - 1) : onNavigate('catalog')}
              className="flex items-center gap-2 text-white/50 font-body hover:text-white transition-colors"
            >
              <Icon name="ArrowLeft" size={18} /> Назад
            </button>
            <button
              onClick={() => step < steps.length - 1 ? setStep(step + 1) : onNavigate('cart')}
              className="gradient-orange text-white font-display font-bold px-8 py-3 rounded-xl hover-scale glow-orange"
            >
              {step === steps.length - 1 ? "ОПЛАТИТЬ" : "ДАЛЕЕ →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
