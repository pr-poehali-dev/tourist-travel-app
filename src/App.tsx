import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Icon from "@/components/ui/icon";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import BookingPage from "@/pages/BookingPage";
import CartPage from "@/pages/CartPage";
import AccountPage from "@/pages/AccountPage";
import LoyaltyPage from "@/pages/LoyaltyPage";
import ContactsPage from "@/pages/ContactsPage";

type Page = "home" | "catalog" | "booking" | "cart" | "account" | "loyalty" | "contacts";

const navItems = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "catalog", label: "Туры", icon: "Globe" },
  { id: "loyalty", label: "Бонусы", icon: "Star" },
  { id: "contacts", label: "Контакты", icon: "Phone" },
];

const App = () => {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (p: string) => {
    setPage(p as Page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background noise-bg">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="mx-4 mt-4">
            <div className="card-glass rounded-2xl px-6 py-4 flex items-center justify-between">
              <button onClick={() => navigate("home")} className="flex items-center gap-3 hover-scale">
                <div className="w-9 h-9 gradient-orange rounded-xl flex items-center justify-center">
                  <Icon name="Plane" size={18} className="text-white" />
                </div>
                <span className="font-display text-xl font-bold text-white tracking-wide">СУРОВАЯ КАМЧАТКА</span>
              </button>

              <div className="hidden md:flex items-center gap-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm transition-all ${
                      page === item.id
                        ? "gradient-orange text-white font-semibold"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon name={item.icon} fallback="Circle" size={15} />
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate("cart")}
                  className="relative p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Icon name="ShoppingBag" size={20} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 gradient-orange rounded-full text-white text-xs flex items-center justify-center font-display font-bold">2</span>
                </button>
                <button
                  onClick={() => navigate("account")}
                  className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl font-body text-sm hover:border-neon-orange/50 transition-all"
                >
                  <Icon name="User" size={15} />
                  Кабинет
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden p-2 rounded-xl text-white/60 hover:text-white transition-colors"
                >
                  <Icon name={menuOpen ? "X" : "Menu"} size={22} />
                </button>
              </div>
            </div>

            {menuOpen && (
              <div className="card-glass rounded-2xl mt-2 p-4 animate-fade-in">
                {[...navItems, { id: "account", label: "Личный кабинет", icon: "User" }, { id: "cart", label: "Корзина", icon: "ShoppingBag" }].map(item => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm transition-all mb-1 ${
                      page === item.id ? "gradient-orange text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon name={item.icon} fallback="Circle" size={16} />
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Page content */}
        <main>
          {page === "home" && <HomePage onNavigate={navigate} />}
          {page === "catalog" && <CatalogPage onNavigate={navigate} />}
          {page === "booking" && <BookingPage onNavigate={navigate} />}
          {page === "cart" && <CartPage onNavigate={navigate} />}
          {page === "account" && <AccountPage />}
          {page === "loyalty" && <LoyaltyPage />}
          {page === "contacts" && <ContactsPage />}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 gradient-orange rounded-xl flex items-center justify-center">
                    <Icon name="Plane" size={18} className="text-white" />
                  </div>
                  <span className="font-display text-xl font-bold text-white">СУРОВАЯ КАМЧАТКА</span>
                </div>
                <p className="font-body text-white/40 text-sm">Ваш надёжный партнёр в мире путешествий с 2010 года</p>
              </div>
              {[
                { title: "Туры", links: ["Горящие туры", "Россия", "Заграница", "Круизы"] },
                { title: "Компания", links: ["О нас", "Лицензии", "Отзывы", "Блог"] },
                { title: "Поддержка", links: ["FAQ", "Условия бронирования", "Возврат", "Страхование"] },
              ].map(col => (
                <div key={col.title}>
                  <h4 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-4">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map(link => (
                      <li key={link}>
                        <button className="font-body text-sm text-white/40 hover:text-neon-orange transition-colors">{link}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-body text-white/30 text-xs">© 2025 Суровая Камчатка. Все права защищены. Лицензия турагента РТО-000123</p>
              <div className="flex items-center gap-4">
                {["Telegram", "VK", "Instagram"].map(soc => (
                  <button key={soc} className="font-body text-xs text-white/30 hover:text-neon-orange transition-colors">{soc}</button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
};

export default App;