import { motion } from 'framer-motion';

const menuItems = [
  { name: 'プアオーバー', origin: 'エチオピア イルガチェフェ', price: '¥850', notes: 'ジャスミン、ベルガモット、ハニー' },
  { name: 'エスプレッソ', origin: 'コロンビア ゲイシャ', price: '¥700', notes: 'ピーチ、フローラル、明るい酸味' },
  { name: 'マキアート', origin: 'ハウスブレンド', price: '¥750', notes: 'ダークチョコレート、チェリー' },
  { name: 'コールドブリュー', origin: 'ケニア AA', price: '¥800', notes: 'カシス、ワインのような芳醇さ' },
];

export default function MenuCard() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[#1A1A1A] text-[#F8F7F2]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-[#F8F7F2] mb-4">メニュー</h2>
          <div className="w-12 h-[1px] bg-[#800020] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-baseline mb-2 border-b border-[#F8F7F2]/10 pb-4 group-hover:border-[#800020] transition-colors duration-500">
                <div>
                  <h3 className="font-serif text-2xl text-[#F8F7F2] group-hover:text-[#FFDB58] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#F8F7F2]/50 mt-1">
                    {item.origin}
                  </p>
                </div>
                <span className="font-serif text-lg text-[#F8F7F2]/80">{item.price}</span>
              </div>
              
              <div className="overflow-hidden">
                <motion.p 
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: 'auto', opacity: 1 }}
                  className="font-sans text-sm text-[#F8F7F2]/60 pt-2 hidden group-hover:block transition-all"
                >
                  味わい: {item.notes}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
