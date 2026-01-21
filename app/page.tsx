export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-right" dir="rtl">
      
      {/* 1. شريط الإلحاح العلوي (أحمر وأبيض لجذب الانتباه) */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-bold animate-pulse">
        🚀 عاجل: خصومات الإطلاق تصل إلى 80% لفترة محدودة جداً!
      </div>

      {/* 2. الهيدر (رأس الصفحة) والشعار */}
      <header className="bg-black border-b border-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* أزرار اليسار (السلة وتسجيل الدخول) */}
          <div className="flex gap-4 items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-bold transition-all">
              🛒 السلة
            </button>
            <button className="hidden md:block text-gray-400 hover:text-white font-bold">
              تسجيل الدخول
            </button>
          </div>

          {/* اسم المحل + صور الكاميرات */}
          <div className="flex items-center gap-3">
            {/* صورة كاميرا 1 */}
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" 
              alt="كاميرا" 
              className="w-10 h-10 bg-white rounded-full p-1"
            />
            
            {/* الاسم */}
            <div className="text-right">
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
                MISBAR <span className="text-yellow-500 text-4xl">V</span>
              </h1>
              <p className="text-xs font-bold text-gray-400 -mt-1 tracking-widest text-left">
                مسبار ڤي
              </p>
            </div>

            {/* صورة كاميرا 2 */}
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4525/4525048.png" 
              alt="عدسة" 
              className="w-10 h-10 bg-white rounded-full p-1"
            />
          </div>

        </div>
      </header>

      {/* 3. قسم الواجهة الرئيسية (Hero Section) */}
      <main className="container mx-auto px-4 py-20 text-center">
        
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          وجهتك القادمة في <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
            عالم التصوير والتقنية
          </span>
        </h2>

        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          في <span className="text-yellow-500 font-bold">مسبار ڤي</span>، لا نبيع مجرد كاميرات، 
          نحن نختار لك العدسة التي تخلّد ذكرياتك وتواكب طموحك.
        </p>

        {/* أزرار الدعوة لاتخاذ إجراء */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all transform hover:scale-105">
            🔥 تصفح العروض الآن
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black text-xl font-bold py-4 px-10 rounded-xl transition-all">
            من نحن؟
          </button>
        </div>

        {/* قسم صور منتجات افتراضية (شكل جمالي) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 hover:opacity-100 transition-opacity">
           {/* مجرد مربعات صور وهمية للشكل */}
           {[1, 2, 3, 4].map((item) => (
             <div key={item} className="bg-gray-900 h-40 rounded-lg flex items-center justify-center border border-gray-800">
               <span className="text-gray-600 font-bold">منتج {item}</span>
             </div>
           ))}
        </div>

      </main>

      {/* 4. التذييل (Footer) */}
      <footer className="border-t border-gray-900 mt-20 bg-gray-950">
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-black text-white mb-4 uppercase">MISBAR</h2>
          <div className="flex justify-center gap-6 mb-8 text-gray-400">
            <span className="cursor-pointer hover:text-yellow-500">Instagram</span>
            <span className="cursor-pointer hover:text-yellow-500">Twitter</span>
            <span className="cursor-pointer hover:text-yellow-500">TikTok</span>
          </div>
          <div className="pt-8 border-t border-gray-900 text-xs text-gray-500">
            جميع الحقوق محفوظة لمتجر مسبار ڤي © 2026 | صُنع بشغف في السعودية 🇸🇦
          </div>
        </div>
      </footer>
    </div>
  );
}