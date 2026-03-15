import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REFERRAL = "https://melord.net/welcome/signup/cb26f9e15332cb38";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-2" : "py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.png" alt="PROMELORD" className="w-8 h-8 rounded" loading="lazy" />
          <span className="text-lg font-bold tracking-wide">
            PRO<span className="text-gradient">MELORD</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Главная</Link>
          <Link to="/blog" className="text-foreground/80 hover:text-foreground transition-colors">Блог</Link>
          <a href={REFERRAL} target="_blank" rel="noopener noreferrer" className="btn-glow px-5 py-2 rounded-lg text-primary-foreground text-sm font-semibold">
            Подключить
          </a>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground" aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3"
          >
            <Link to="/" className="text-foreground/80 hover:text-foreground py-2">Главная</Link>
            <Link to="/blog" className="text-foreground/80 hover:text-foreground py-2">Блог</Link>
            <a href={REFERRAL} target="_blank" rel="noopener noreferrer" className="btn-glow px-5 py-3 rounded-lg text-primary-foreground text-center font-semibold">
              Подключить
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
