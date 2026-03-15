import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send } from "lucide-react";

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Лучшие IPTV плееры 2026 года",
    excerpt: "Обзор самых стабильных и удобных плееров для просмотра IPTV на всех устройствах.",
    date: "2026-03-15",
    content: "TiviMate, OTT Navigator и IPTV Smarters Pro — тройка лидеров. TiviMate идеален для Android TV, OTT Navigator отлично работает на Fire Stick, а Smarters Pro — универсальный выбор для iOS и Android.",
  },
  {
    id: 2,
    title: "Как настроить m3u плейлист за 5 минут",
    excerpt: "Пошаговая инструкция подключения IPTV плейлиста на Smart TV, Android и iOS.",
    date: "2026-03-14",
    content: "Скачайте плейлист из личного кабинета MELORD TV. Откройте ваш IPTV плеер, добавьте плейлист по URL или загрузите файл. Каналы появятся автоматически. VPN для просмотра не нужен!",
  },
  {
    id: 3,
    title: "Топ спортивных каналов в MELORD TV",
    excerpt: "Полный список спортивных трансляций: футбол, хоккей, UFC, баскетбол и редкие каналы.",
    date: "2026-03-13",
    content: "MELORD TV включает более 200 спортивных каналов. Смотрите Лигу Чемпионов, EPL, UFC, NBA и многое другое в Full HD и 4K качестве без задержек.",
  },
];

const STORAGE_KEY = "promelord_blog";

const loadData = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { likes: {} as Record<number, number>, comments: {} as Record<number, Comment[]> };
};

const BlogSection = () => {
  const [data, setData] = useState(loadData);
  const [openPost, setOpenPost] = useState<number | null>(null);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const handleLike = (postId: number) => {
    setData((prev: any) => ({
      ...prev,
      likes: { ...prev.likes, [postId]: (prev.likes[postId] || 0) + 1 },
    }));
  };

  const handleComment = (postId: number) => {
    if (!commentText.trim()) return;
    const newComment: Comment = {
      id: Date.now(),
      name: commentName.trim() || "Гость",
      text: commentText.trim(),
      date: new Date().toLocaleDateString("ru-RU"),
    };
    setData((prev: any) => ({
      ...prev,
      comments: {
        ...prev.comments,
        [postId]: [...(prev.comments[postId] || []), newComment],
      },
    }));
    setCommentText("");
    setCommentName("");
  };

  return (
    <section className="py-16 relative z-10" id="blog" aria-label="IPTV блог PROMELORD">
      <div className="container">
        <p className="text-center text-accent text-sm font-semibold tracking-widest uppercase mb-2">Блог</p>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10">
          Новости и инструкции IPTV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {initialPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5 flex flex-col"
            >
              <time className="text-foreground/40 text-xs mb-2">{post.date}</time>
              <h3 className="font-semibold text-sm mb-2">{post.title}</h3>
              <p className="text-foreground/60 text-xs mb-4 flex-1">{post.excerpt}</p>

              <div className="flex items-center gap-4 mb-3">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1 text-xs text-foreground/60 hover:text-accent transition-colors"
                >
                  <Heart size={14} className={data.likes[post.id] ? "fill-accent text-accent" : ""} />
                  {data.likes[post.id] || 0}
                </button>
                <button
                  onClick={() => setOpenPost(openPost === post.id ? null : post.id)}
                  className="flex items-center gap-1 text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  <MessageCircle size={14} />
                  {(data.comments[post.id] || []).length}
                </button>
              </div>

              {openPost === post.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="border-t border-border pt-3"
                >
                  <p className="text-foreground/70 text-xs mb-3">{post.content}</p>

                  {(data.comments[post.id] || []).map((c: Comment) => (
                    <div key={c.id} className="bg-muted/30 rounded-lg p-2 mb-2">
                      <p className="text-xs font-semibold text-foreground/80">{c.name} <span className="font-normal text-foreground/40">· {c.date}</span></p>
                      <p className="text-xs text-foreground/60 mt-1">{c.text}</p>
                    </div>
                  ))}

                  <div className="flex flex-col gap-2 mt-2">
                    <input
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      placeholder="Имя"
                      className="bg-muted/30 rounded-lg px-3 py-2 text-xs text-foreground outline-none border border-border focus:border-primary/50"
                    />
                    <div className="flex gap-2">
                      <input
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Комментарий..."
                        className="flex-1 bg-muted/30 rounded-lg px-3 py-2 text-xs text-foreground outline-none border border-border focus:border-primary/50"
                        onKeyDown={(e) => e.key === "Enter" && handleComment(post.id)}
                      />
                      <button
                        onClick={() => handleComment(post.id)}
                        className="btn-glow p-2 rounded-lg"
                      >
                        <Send size={14} className="text-primary-foreground" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
