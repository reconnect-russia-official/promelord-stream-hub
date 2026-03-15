import { motion } from "framer-motion";
import { Tv, Globe, Smartphone, Shield, Zap, Film } from "lucide-react";

const REFERRAL = "https://melord.net/welcome/signup/cb26f9e15332cb38";

const items = [
  { icon: Tv, title: "4500+ каналов", desc: "HD, Full HD, 4K качество. Российские и зарубежные каналы" },
  { icon: Globe, title: "Работает по всему миру", desc: "Стабильный поток на скорости от 10 Mb/s в любой точке" },
  { icon: Film, title: "Спорт и Кино", desc: "Редкие спортивные трансляции, мировое кино, сериалы, VOD" },
  { icon: Smartphone, title: "Любое устройство", desc: "Smart TV, Android, iOS, MAG, PC, Fire Stick, Kodi" },
  { icon: Shield, title: "Архив 7 дней", desc: "Пропустили передачу? Смотрите запись из архива каналов" },
  { icon: Zap, title: "Всего 2$/мес", desc: "Самая низкая цена за премиальный IPTV контент" },
];

const FeaturesSection = () => (
  <section className="py-16 relative z-10" id="features" aria-label="Преимущества IPTV сервиса">
    <div className="container">
      <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-2">Почему PROMELORD?</p>
      <h2 className="text-xl md:text-2xl font-bold text-center mb-10">
        Всё для идеального IPTV опыта
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-5 hover:border-primary/30 transition-all group"
          >
            <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
            <p className="text-foreground/60 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href={REFERRAL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-block px-8 py-3 rounded-xl text-primary-foreground font-bold text-sm"
        >
          Начать бесплатный тест
        </a>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
