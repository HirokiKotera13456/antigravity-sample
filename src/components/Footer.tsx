export default function Footer() {
  return (
    <footer id="location" className="bg-[#1A1A1A] text-[#F8F7F2] py-12 border-t border-[#F8F7F2]/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl tracking-widest mb-4">Eternity</h2>
          <p className="font-sans text-xs text-[#F8F7F2]/50 uppercase tracking-widest leading-loose">
            重力を忘れ、<br />
            時を止める。
          </p>
        </div>

        {/* Location & Hours */}
        <div className="font-sans text-sm text-[#F8F7F2]/70 leading-loose">
          <p className="uppercase tracking-widest text-[#F8F7F2]/40 text-xs mb-2">場所</p>
          <p>東京都某区アートディストリクト 1-2-3</p>
          <p>郵便番号 150-0000</p>
          <br />
          <p className="uppercase tracking-widest text-[#F8F7F2]/40 text-xs mb-2">営業時間</p>
          <p>月曜 - 日曜 / 10:00 - 22:00</p>
          <p>水曜定休</p>
        </div>

        {/* Social & Contact */}
        <div className="md:text-right flex flex-col md:items-end">
           <p className="uppercase tracking-widest text-[#F8F7F2]/40 text-xs mb-4">公式SNS</p>
           <div className="flex gap-4 mb-8">
             <a href="#" className="hover:text-[#800020] transition-colors" aria-label="Instagram">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="#" className="hover:text-[#800020] transition-colors" aria-label="Twitter">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
             </a>
           </div>
           <a href="mailto:hello@cafe-eternity.com" className="font-sans text-sm text-[#F8F7F2]/70 hover:text-[#F8F7F2] transition-colors relative group inline-block">
             hello@cafe-eternity.com
             <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#800020] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
           </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-[#F8F7F2]/30 uppercase tracking-widest font-sans">
        <p>&copy; 2026 Cafe Eternity. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Designed by Antigravity</p>
      </div>
    </footer>
  );
}
