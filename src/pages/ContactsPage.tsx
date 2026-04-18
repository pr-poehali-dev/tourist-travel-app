import { useState } from "react";
import Icon from "@/components/ui/icon";

const offices = [
  { city: "Москва", address: "ул. Тверская, 18, офис 412", phone: "+7 495 123-45-67", email: "moscow@voyag.ru", hours: "Пн–Пт 9:00–20:00" },
  { city: "Санкт-Петербург", address: "Невский пр., 56, офис 8", phone: "+7 812 987-65-43", email: "spb@voyag.ru", hours: "Пн–Пт 9:00–19:00" },
  { city: "Екатеринбург", address: "ул. Ленина, 24б, офис 3", phone: "+7 343 111-22-33", email: "ekb@voyag.ru", hours: "Пн–Пт 10:00–19:00" },
];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 gradient-orange rounded-full" />
            <span className="text-neon-orange font-body text-sm uppercase tracking-widest">Всегда на связи</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white">КОНТАКТЫ</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <div className="card-glass rounded-3xl p-8">
              {sent ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 gradient-orange rounded-full flex items-center justify-center mx-auto mb-6 glow-orange">
                    <Icon name="Check" size={36} className="text-white" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">ОТПРАВЛЕНО!</h3>
                  <p className="font-body text-white/50">Мы свяжемся с вами в течение 30 минут в рабочее время</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-neon-cyan font-body hover:text-white transition-colors">
                    Отправить ещё раз
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-white mb-6">НАПИШИТЕ НАМ</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm text-white/50 mb-2 block">Имя</label>
                        <input
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-neon-orange/50 transition-colors"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm text-white/50 mb-2 block">Телефон</label>
                        <input
                          value={form.phone}
                          onChange={e => setForm({...form, phone: e.target.value})}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-neon-orange/50 transition-colors"
                          placeholder="+7 000 000-00-00"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm text-white/50 mb-2 block">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-neon-orange/50 transition-colors"
                        placeholder="your@email.ru"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-white/50 mb-2 block">Сообщение</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body placeholder-white/30 focus:outline-none focus:border-neon-orange/50 transition-colors resize-none"
                        placeholder="Расскажите, какое путешествие вы мечтаете совершить..."
                      />
                    </div>
                    <button type="submit" className="w-full gradient-orange text-white font-display font-bold text-lg py-4 rounded-xl hover-scale glow-orange">
                      ОТПРАВИТЬ СООБЩЕНИЕ
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Quick contacts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                { icon: "Phone", label: "Позвонить", value: "8 800 123-45-67", sub: "Бесплатно по РФ", color: "text-neon-orange" },
                { icon: "MessageCircle", label: "WhatsApp", value: "Написать", sub: "Отвечаем быстро", color: "text-neon-cyan" },
                { icon: "Mail", label: "Email", value: "info@voyag.ru", sub: "До 1 рабочего дня", color: "text-neon-pink" },
              ].map(item => (
                <button key={item.label} className="card-glass rounded-2xl p-4 text-center card-hover">
                  <div className={`${item.color} flex justify-center mb-2`}>
                    <Icon name={item.icon} fallback="Phone" size={22} />
                  </div>
                  <div className="font-display text-sm font-bold text-white">{item.label}</div>
                  <div className={`font-body text-sm ${item.color} mt-1`}>{item.value}</div>
                  <div className="font-body text-xs text-white/30 mt-0.5">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white mb-6">НАШИ ОФИСЫ</h2>
            {offices.map((office, i) => (
              <div key={office.city} className="card-glass rounded-2xl p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-orange rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="MapPin" size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white">{office.city}</h3>
                    <p className="font-body text-white/50 text-sm mt-1">{office.address}</p>
                    <div className="mt-3 space-y-1">
                      <a href={`tel:${office.phone}`} className="flex items-center gap-2 font-body text-sm text-neon-orange hover:text-white transition-colors">
                        <Icon name="Phone" size={13} /> {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-2 font-body text-sm text-neon-cyan hover:text-white transition-colors">
                        <Icon name="Mail" size={13} /> {office.email}
                      </a>
                      <div className="flex items-center gap-2 font-body text-xs text-white/30">
                        <Icon name="Clock" size={13} /> {office.hours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Support */}
            <div className="card-glass rounded-2xl p-6 border border-neon-cyan/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
                <span className="font-display text-lg font-bold text-white">СЛУЖБА ПОДДЕРЖКИ</span>
              </div>
              <p className="font-body text-white/50 text-sm mb-4">Онлайн-чат работает круглосуточно. Среднее время ответа — 3 минуты</p>
              <button className="gradient-cyan text-white font-display font-semibold px-6 py-3 rounded-xl hover-scale glow-cyan">
                ОТКРЫТЬ ЧАТ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
