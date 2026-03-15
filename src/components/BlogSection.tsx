import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  { slug: "luchshie-iptv-pleery-2026", title: "Лучшие IPTV плееры 2026 года", excerpt: "Обзор самых стабильных и удобных плееров для просмотра IPTV на всех устройствах.", date: "2026-03-15" },
  { slug: "kak-nastroit-m3u-pleylist", title: "Как настроить m3u плейлист за 5 минут", excerpt: "Пошаговая инструкция подключения IPTV плейлиста на Smart TV, Android и iOS.", date: "2026-03-14" },
  { slug: "top-sportivnyh-kanalov", title: "Топ спортивных каналов в MELORD TV", excerpt: "Полный список спортивных трансляций: футбол, хоккей, UFC, баскетбол и редкие каналы.", date: "2026-03-13" },
];

const BlogSection = () => (
  <section className="py-16 relative z-10" id="blog" aria-label="IPTV блог PROMELORD">
    <div className="container">
      <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-2">Блог</p>
      <h2 className="text-xl md:text-2xl font-bold text-center mb-10">Новости и инструкции IPTV</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="glass rounded-xl p-5 flex flex-col h-full hover:border-primary/30 transition-all group block"
            >
              <time className="text-foreground/40 text-xs mb-2">{post.date}</time>
              <h3 className="font-semibold text-sm mb-2 group-hover:text-gradient transition-colors">{post.title}</h3>
              <p className="text-foreground/60 text-xs mb-4 flex-1">{post.excerpt}</p>
              <span className="flex items-center gap-1 text-xs text-accent group-hover:gap-2 transition-all">
                Читать <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
