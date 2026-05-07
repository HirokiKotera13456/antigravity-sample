import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#F8F7F2]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Cafe Eternity Ambience"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F2]/40 via-transparent to-[#F8F7F2]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        {/* Anti-gravity Floating Element */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 w-16 h-16 rounded-full border border-[#800020]/20 flex items-center justify-center backdrop-blur-sm bg-white/10"
        >
           <span className="text-[#800020] text-2xl font-serif italic">E</span>
        </motion.div>

        {/* Main Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-tighter text-[#1A1A1A] leading-tight mix-blend-multiply">
            重力を、<br className="hidden md:block"/> 忘れる。
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <p className="font-sans text-sm md:text-base text-[#1A1A1A]/70 uppercase tracking-[0.3em] max-w-md mx-auto">
            時と重力が止まる、ミニマリズムの聖域。
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/50">スクロール</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#1A1A1A]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
