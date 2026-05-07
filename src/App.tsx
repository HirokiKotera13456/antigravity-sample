import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuCard from './components/MenuCard';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F2] font-sans selection:bg-[#800020] selection:text-[#F8F7F2] cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <MenuCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
