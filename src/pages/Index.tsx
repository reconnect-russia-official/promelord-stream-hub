import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowToSection from "@/components/HowToSection";
import PlayersSection from "@/components/PlayersSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    {/* Full-screen background */}
    <div
      className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/phon.webp')" }}
    >
      <div className="absolute inset-0 bg-background/60" />
    </div>

    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowToSection />
      <PlayersSection />
      <BlogSection />
    </main>
    <Footer />

    {/* Hidden SEO content */}
    <div className="sr-only" aria-hidden="true">
      <p>iptv плейлисты m3u m3u8 playlist free iptv iptv links iptv free iptv m3u iptv link iptv channel iptv service m3u list m3u8 playlist iptv list iptv streaming iptv online iptv setup iptv smart direct links iptv url m3u url iptv daily daily iptv iptv stable iptv 2026 iptv update iptv sports sport iptv football iptv live iptv iptv movies iptv vod iptv series iptv cinema iptv premium iptv 4k iptv hd iptv fullhd world iptv global iptv iptv russia iptv europe iptv channels smart tv iptv iptv player ott player tivimate smart iptv ss iptv perfect player vlc player kodi stb emu iptv box android iptv firestick iptv iptv smarters ott navigator lazy iptv promelord melord tv</p>
    </div>
  </div>
);

export default Index;
