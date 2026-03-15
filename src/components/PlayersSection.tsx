import { motion } from "framer-motion";

const players = [
  "TiviMate", "OTT Navigator", "IPTV Smarters", "Smarters Pro",
  "VLC Player", "Kodi", "Perfect Player", "SS IPTV",
  "Smart IPTV", "GSE IPTV", "STB Emu", "Lazy IPTV",
  "Net IPTV", "Set IPTV", "Nanomid", "OTT Player",
];

const PlayersSection = () => (
  <section className="py-16 relative z-10" id="players" aria-label="Поддерживаемые IPTV плееры">
    <div className="container">
      <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-2">Совместимость</p>
      <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
        Поддержка всех популярных плееров
      </h2>
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {players.map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="glass px-4 py-2 rounded-lg text-xs font-medium text-foreground/80 hover:text-foreground hover:border-primary/30 transition-all cursor-default"
          >
            {p}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default PlayersSection;
