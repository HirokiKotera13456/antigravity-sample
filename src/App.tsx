import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuCard from './components/MenuCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] font-sans selection:bg-[#800020] selection:text-[#F8F7F2]">
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
