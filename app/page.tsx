export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-right" dir="rtl">
      
      {/* 1. شريط الإلحاح العلوي (تم تكبيره: py-4 text-base) */}
      <div className="bg-red-600 text-white text-center py-4 text-base font-bold animate-pulse shadow-lg z-50 relative">
        🚀 عاجل: خصومات الإطلاق تصل إلى 80% لفترة محدودة جداً!
      </div>

      {/* 2. الهيدر (رأس الصفحة) والشعار */}
      <header className="bg-black border-b border-gray-800 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* أزرار اليسار (تم حذف الزبالة، بقيت السلة فقط) */}
          <div className="flex gap-4 items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 shadow-yellow-500/20 shadow-md">
              <span>🛒</span>
              <span>السلة</span>
            </button>
            <button className="hidden md:block text-gray-400 hover:text-white font-bold transition-all">
              تسجيل الدخول
            </button>
          </div>

          {/* اسم المحل + صور الكاميرات الافتراضية */}
          <div className="flex items-center gap-3">
            {/* صورة كاميرا 1 (يمين) */}
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" 
              alt="كاميرا رقمية" 
              className="w-12 h-12 bg-gray-900 rounded-xl p-2 border border-gray-800 shadow-sm"
            />
            
            {/* الاسم */}
            <div className="text-right">
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase flex items-center">
                MISBAR <span className="text-yellow-500 text-5xl ml-1">V</span>
              </h1>
              <p className="text-sm font-bold text-yellow-500 -mt-1 tracking-widest text-left opacity-80">
                مسبار ڤي للتقنية
              </p>
            </div>

            {/* صورة كاميرا 2 (يسار) */}
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4525/4525048.png" 
              alt="عدسة احترافية" 
              className="w-12 h-12 bg-gray-900 rounded-xl p-2 border border-gray-800 shadow-sm"
            />
          </div>

        </div>
      </header>

      {/* 3. قسم الواجهة الرئيسية (Hero Section) */}
      <main className="container mx-auto px-4 py-24 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
          وجهتك القادمة في <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-red-600 filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            عالم التصوير والتقنية
          </span>
        </h2>

        <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          في <span className="text-yellow-500 font-black">مسبار ڤي</span>، لا نبيع مجرد أجهزة.. 
          نحن نسلمك الأدوات التي تخلّد ذكرياتك وتطلق العنان لإبداعك.
        </p>

        {/* أزرار الدعوة لاتخاذ إجراء */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black text-xl font-bold py-5 px-12 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
            🔥 تصفح العروض الحصرية
          </button>
          <button className="border-2 border-gray-700 text-white hover:bg-white hover:text-black hover:border-white text-xl font-bold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            من نحن؟
          </button>
        </div>

        {/* قسم صور منتجات افتراضية (شكل جمالي) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-20 opacity-60 hover:opacity-100 transition-all duration-500">
           {[1, 2, 3, 4].map((item) => (
             <div key={item} className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-3xl flex flex-col items-center justify-center border border-gray-800 group hover:border-yellow-500/50 transition-all overflow-hidden relative">
               <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
               <span className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-500">📷</span>
               <span className="text-gray-500 font-bold group-hover:text-yellow-500 transition-colors">منتج {item}</span>
             </div>
           ))}
        </div>

      </main>

      {/* 4. التذييل (Footer) */}
      <footer className="border-t border-gray-900 bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
            MISBAR <span className="text-yellow-500">V</span>
          </h2>
          <div className="flex justify-center gap-8 mb-10 text-gray-400 font-bold tracking-wider">
            <span className="cursor-pointer hover:text-yellow-500 transition-colors hover:scale-110 transform">INSTAGRAM</span>
            <span className="cursor-pointer hover:text-yellow-500 transition-colors hover:scale-110 transform">TWITTER</span>
            <span className="cursor-pointer hover:text-yellow-500 transition-colors hover:scale-110 transform">TIKTOK</span>
          </div>
          <div className="pt-8 border-t border-gray-900 text-sm text-gray-500 font-medium">
            جميع الحقوق محفوظة لمتجر مسبار ڤي © 2026 | صُنع بشغف في المملكة العربية السعودية 🇸🇦
          </div>
        </div>
      </footer>
    </div>
  );
}