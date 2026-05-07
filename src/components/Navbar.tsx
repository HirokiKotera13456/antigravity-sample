import { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-[#F8F7F2]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Coffee className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#800020] transition-colors" />
          <span className="font-serif text-xl tracking-wider font-semibold text-[#1A1A1A]">
            Eternity
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {['コンセプト', 'メニュー', 'アクセス'].map((item) => (
            <a
              key={item}
              href={`#${item === 'コンセプト' ? 'concept' : item === 'メニュー' ? 'menu' : 'location'}`}
              className="text-sm font-medium text-[#1A1A1A]/80 hover:text-[#800020] transition-colors uppercase tracking-widest relative overflow-hidden group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#800020] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1A1A1A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F8F7F2] border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {['コンセプト', 'メニュー', 'アクセス'].map((item) => (
                <a
                  key={item}
                  href={`#${item === 'コンセプト' ? 'concept' : item === 'メニュー' ? 'menu' : 'location'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#1A1A1A] hover:text-[#800020] transition-colors uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
