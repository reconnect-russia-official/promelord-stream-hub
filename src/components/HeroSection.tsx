import { motion } from "framer-motion";
import { Tv, Zap, Globe, Shield } from "lucide-react";

const REFERRAL = "https://melord.net/welcome/signup/cb26f9e15332cb38";

const features = [
  "IPTV телевидение и видеотека в HD, Full HD, UHD",
  "Российские и зарубежные телеканалы",
  "Легко настраивается на любом Smart TV",
  "Более 4500+ IPTV каналов",
  "Stalker Portal, VPortal в HD и Full HD",
  "Android, iOS, Smart TV, WebOS",
  "Бесплатный тест 1 день",
  "Архив каналов за 7 дней",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20" aria-label="IPTV сервис PROMELORD">
    <div className="container relative z-10">
      <div className="max-w-2xl mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-accent mb-3 tracking-widest uppercase">
            IPTV Сервис №1
          </p>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            4500+ IPTV каналов за <span className="text-gradient">2$ в месяц</span>
          </h1>
          <p className="text-foreground/70 text-sm md:text-base mb-6 leading-relaxed max-w-lg">
            Качественный IPTV сервис с поддержкой m3u, m3u8 плейлистов.
            Спорт, кино, ТВ в 4K и Full HD на любом устройстве.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-sm"
        >
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-foreground/80">
              <span className="text-accent mt-0.5">✓</span>
              {f}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={REFERRAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow animate-pulse-glow px-8 py-3 rounded-xl text-primary-foreground font-bold text-sm text-center"
          >
            🎁 БЕСПЛАТНЫЙ ТЕСТ 24 ЧАСА
          </a>
          <a
            href={REFERRAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow px-8 py-3 rounded-xl font-semibold text-sm text-center"
          >
            Подключить MELORD TV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 glass rounded-xl p-4 max-w-lg text-xs text-foreground/60 leading-relaxed"
        >
          <span className="text-accent font-semibold">ℹ️ Внимание:</span> Личный кабинет доступен через VPN (зеркало), но для просмотра IPTV и использования плейлиста VPN НЕ ТРЕБУЕТСЯ — максимальная скорость вашего провайдера.
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
