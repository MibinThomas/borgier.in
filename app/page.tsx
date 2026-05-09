import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import XellosSection from './components/XellosSection';
import VertixSection from './components/VertixSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative bg-[#e6e7e8]">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <XellosSection />
      <VertixSection />
      <Footer />
    </main>
  );
}
