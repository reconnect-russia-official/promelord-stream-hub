import { motion } from "framer-motion";

const REFERRAL = "https://melord.net/welcome/signup/cb26f9e15332cb38";

interface Props {
  article: { title: string; date: string; content: string[] };
}

const BlogArticle = ({ article }: Props) => (
  <div className="container max-w-3xl">
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 md:p-8"
    >
      <time className="text-foreground/40 text-xs">{article.date}</time>
      <h1 className="text-xl md:text-2xl font-bold mt-2 mb-6">{article.title}</h1>
      {article.content.map((p, i) => (
        <p key={i} className="text-foreground/75 text-sm leading-relaxed mb-4">{p}</p>
      ))}
      <div className="mt-8 text-center">
        <a
          href={REFERRAL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-block px-8 py-3 rounded-xl text-primary-foreground font-bold text-sm"
        >
          Подключить MELORD TV
        </a>
      </div>
    </motion.article>
  </div>
);

export default BlogArticle;
