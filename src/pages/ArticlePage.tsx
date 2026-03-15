import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogArticle from "@/components/BlogArticle";

const articles: Record<string, { title: string; date: string; content: string[] }> = {
  "luchshie-iptv-pleery-2026": {
    title: "Лучшие IPTV плееры 2026 года",
    date: "2026-03-15",
    content: [
      "TiviMate, OTT Navigator и IPTV Smarters Pro — тройка лидеров среди IPTV плееров в 2026 году. Каждый из них предлагает уникальные возможности для комфортного просмотра.",
      "TiviMate — идеальный выбор для Android TV. Удобный EPG, поддержка нескольких плейлистов, запись эфира и таймеры. Интерфейс интуитивный и настраиваемый.",
      "OTT Navigator отлично работает на Fire Stick и Android. Поддерживает m3u, m3u8, Stalker Portal. Гибкие настройки сортировки каналов и категорий.",
      "IPTV Smarters Pro — универсальный выбор для iOS и Android. Поддержка Xtream Codes API, красивый интерфейс, VOD и серии.",
      "Также стоит обратить внимание на: Perfect Player, SS IPTV, Smart IPTV, Kodi с плагином PVR IPTV Simple Client, VLC Media Player, Lazy IPTV, Net IPTV и Set IPTV.",
      "Все эти плееры совместимы с плейлистами MELORD TV. Скачайте m3u файл из личного кабинета и загрузите его в любой из перечисленных плееров.",
    ],
  },
  "kak-nastroit-m3u-pleylist": {
    title: "Как настроить m3u плейлист за 5 минут",
    date: "2026-03-14",
    content: [
      "Настройка IPTV плейлиста — это просто. Следуйте этой пошаговой инструкции и начните смотреть 4500+ каналов уже через 5 минут.",
      "Шаг 1: Зарегистрируйтесь на melord.net через VPN. Это нужно только для регистрации — для просмотра VPN не требуется.",
      "Шаг 2: Активируйте бесплатный тест на 24 часа в личном кабинете.",
      "Шаг 3: Скачайте m3u плейлист или скопируйте URL плейлиста из личного кабинета.",
      "Шаг 4: Откройте ваш IPTV плеер (TiviMate, OTT Navigator, VLC и др.) и добавьте плейлист по URL или загрузите файл.",
      "Шаг 5: Каналы появятся автоматически. Наслаждайтесь просмотром в HD, Full HD и 4K качестве!",
      "Важно: для просмотра IPTV VPN не нужен. Вы получаете максимальную скорость вашего интернет-провайдера.",
    ],
  },
  "top-sportivnyh-kanalov": {
    title: "Топ спортивных каналов в MELORD TV",
    date: "2026-03-13",
    content: [
      "MELORD TV включает более 200 спортивных каналов со всего мира. Это один из лучших вариантов для любителей спорта.",
      "Футбол: Лига Чемпионов, EPL, Ла Лига, Серия А, Бундеслига, Лига 1, РПЛ — все главные турниры в прямом эфире.",
      "Единоборства: UFC, Bellator, бокс — все PPV-события без дополнительной оплаты.",
      "Баскетбол и хоккей: NBA, НХЛ, КХЛ, Евролига — полный охват.",
      "Теннис, Формула 1, MotoGP, крикет, регби и другие виды спорта доступны на редких каналах, которые сложно найти у конкурентов.",
      "Все спортивные каналы доступны в Full HD и 4K качестве. Стабильный поток без буферизации на скорости от 10 Mb/s.",
      "Подключите MELORD TV и смотрите все главные спортивные события мира за всего 2$ в месяц.",
    ],
  },
};

export { articles };

import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/phon.webp')" }}>
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <Header />
        <main className="pt-28 relative z-10 container text-center">
          <p className="text-foreground/60">Статья не найдена</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/phon.webp')" }}>
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <Header />
      <main className="pt-28 pb-16 relative z-10">
        <BlogArticle article={article} />
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
