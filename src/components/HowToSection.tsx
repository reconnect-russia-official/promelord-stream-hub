import { motion } from "framer-motion";

const REFERRAL = "https://melord.net/welcome/signup/cb26f9e15332cb38";

const steps = [
  { num: "1", title: "Регистрация", desc: "Пройдите регистрацию в личном кабинете через VPN" },
  { num: "2", title: "Активация теста", desc: "Получите бесплатный тест на 24 часа" },
  { num: "3", title: "Скачайте плейлист", desc: "Загрузите m3u плейлист из личного кабинета" },
  { num: "4", title: "Смотрите!", desc: "Откройте плейлист в любом IPTV плеере без VPN" },
];

const HowToSection = () => (
  <section className="py-16 relative z-10" id="howto" aria-label="Как подключить IPTV">
    <div className="container">
      <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-2">Быстрый старт</p>
      <h2 className="text-xl md:text-2xl font-bold text-center mb-10">
        Подключение за 5 минут
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-5 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-3">
              {s.num}
            </div>
            <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
            <p className="text-foreground/60 text-xs">{s.desc}</p>
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
          Зарегистрироваться и начать тест
        </a>
      </div>
    </div>
  </section>
);

export default HowToSection;
