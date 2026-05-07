import { motion } from 'framer-motion';

export default function Concept() {
  return (
    <section id="concept" className="py-32 md:py-48 bg-[#F8F7F2] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 flex justify-between items-end">
          <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A]">
            空間と、<br className="md:hidden" /> コーヒー
          </h2>
          <p className="hidden md:block font-sans text-sm tracking-widest uppercase text-[#1A1A1A]/50">
            Since 2026
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
              豆の声を聞き、<br /> 丁寧に淹れる。<br /> ただ、それだけ。
            </h3>
            <p className="font-sans text-[#1A1A1A]/70 leading-loose">
              一杯のコーヒーができるまでの時間は、ほんの数分。でも、その数分が1日の気分を変えてくれることがあります。
              私たちは、最高の一杯を提供するための手間を惜しみません。静かな音楽と、コーヒーの香り。
              心地よい余白の時間をお楽しみください。
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
