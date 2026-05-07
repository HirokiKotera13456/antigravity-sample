import { motion } from 'framer-motion';

export default function Concept() {
  return (
    <section id="concept" className="py-32 md:py-48 bg-[#F8F7F2] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 flex justify-between items-end">
          <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A]">
            哲学と、<br className="md:hidden" /> 静寂
          </h2>
          <p className="hidden md:block font-sans text-sm tracking-widest uppercase text-[#1A1A1A]/50">
            2026年創業
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Image 1: Left aligned, takes 5 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 md:col-start-1"
          >
            <div className="aspect-[4/5] overflow-hidden group">
              <img 
                src="/concept-1.png" 
                alt="Coffee Extraction" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </motion.div>

          {/* Text block: Center-right, offset */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 md:col-start-7 py-12 md:py-0 md:-mt-32"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-6 leading-relaxed">
              厳選された豆。<br /> 緻密な抽出。<br /> そして、絶対的な静寂。
            </h3>
            <p className="font-sans text-[#1A1A1A]/70 leading-loose">
              私たちはコーヒーを単なる飲み物ではなく、一つの作品として捉えています。 
              細部にまでこだわり抜かれた一杯は、日常を忘れさせる一瞬の静寂をもたらします。 
              音と音の間の静寂こそが、私たちの真髄です。
            </p>
          </motion.div>

          {/* Image 2: Right aligned, offset down */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="md:col-span-6 md:col-start-4 md:mt-32"
          >
            <div className="aspect-[16/9] overflow-hidden group">
              <img 
                src="/concept-2.png" 
                alt="Latte Art" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
