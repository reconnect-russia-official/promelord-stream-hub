import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Blog = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <div
      className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/phon.webp')" }}
    >
      <div className="absolute inset-0 bg-background/80" />
    </div>
    <Header />
    <main className="pt-24">
      <BlogSection />
    </main>
    <Footer />
  </div>
);

export default Blog;
