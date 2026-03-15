const REFERRAL = "https://melord.net/welcome/signup/cb26f9e15332cb38";

const Footer = () => (
  <footer className="relative z-10 glass-strong py-8 mt-8">
    <div className="container text-center">
      <p className="text-foreground/50 text-xs mb-2">
        Поддержка плееров: TiviMate · OTT Navigator · IPTV Smarters · Kodi · VLC · Perfect Player · SS IPTV · Smart IPTV
      </p>
      <p className="text-foreground/40 text-xs mb-4">
        Android · iOS · Smart TV · MAG · Fire Stick · PC · WebOS
      </p>
      <a
        href={REFERRAL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-primary transition-colors text-xs font-medium"
      >
        PROMELORD © 2026 — Подключить IPTV
      </a>
    </div>
  </footer>
);

export default Footer;
