export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right text-gray-900" dir="rtl">
      
      {/* 1. شريط الإلحاح العلوي */}
      <div className="bg-[#1a237e] text-white text-center py-3 text-sm font-medium">
        🎉 شحن مجاني للطلبات فوق 200 ريال لفترة محدودة!
      </div>

      {/* 2. الهيدر (رأس الصفحة) - التعديل هنا تم */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* أزرار اليسار (السلة) */}
          <div className="flex gap-4 items-center">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">2</span>
            </button>
            <button className="hidden md:block text-gray-600 hover:text-blue-800 font-bold transition-colors text-sm">
              تسجيل الدخول
            </button>
          </div>

          {/* اسم المحل + اللوجو (تم تعديل الترتيب) */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              {/* هنا حطينا dir="ltr" عشان الاسم ينكتب صح من اليسار لليمين */}
              <h1 className="text-3xl font-black text-[#1a237e] tracking-tighter uppercase flex items-center gap-1" dir="ltr">
                MISBAR <span className="text-yellow-500 text-4xl">V</span>
              </h1>
              <p className="text-xs font-bold text-gray-500 tracking-widest opacity-80">
                وجهتك التقنية الأولى
              </p>
            </div>
             {/* أيقونة المتجر */}
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" 
              alt="Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>

        </div>
      </header>

      {/* 3. قسم الواجهة (Hero) */}
      <main className="container mx-auto px-4 py-16 text-center">
        
        <div className="max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
            جديد 2026
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            راقب عالمك.. <br />
            <span className="text-blue-700">بوضوح لا يصدق.</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            في <span className="font-bold text-black">مسبار ڤي</span>، نجمع لك أحدث تقنيات الأمن والمراقبة الذكية بأسعار تنافس المتاجر العالمية.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-700/30 transition-all transform hover:-translate-y-1">
              تصفح المنتجات
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-lg font-bold py-4 px-10 rounded-xl transition-all">
              العروض الخاصة
            </button>
          </div>
        </div>

        {/* 4. قسم المنتجات */}
        <div className="mt-24 text-right">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
             <button className="text-blue-700 font-bold hover:underline">عرض الكل ←</button>
             <h3 className="text-3xl font-bold text-gray-900">الأكثر مبيعاً هذا الأسبوع 🔥</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* منتج 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all border border-gray-100 group">
              <div className="relative bg-gray-50 rounded-xl h-64 flex items-center justify-center mb-4 overflow-hidden">
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">خصم 20%</span>
                <img src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" className="w-32 h-32 group-hover:scale-110 transition-transform duration-500" alt="منتج" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">كاميرا مراقبة خارجية Pro</h4>
              <div className="flex items-center gap-1 mb-3">
                 <span className="text-yellow-400">★★★★★</span>
                 <span className="text-xs text-gray-400">(45 تقييم)</span>
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors">+</button>
                <div className="text-left">
                  <span className="block text-xs text-gray-400 line-through">350 ر.س</span>
                  <span className="block text-xl font-black text-gray-900">280 ر.س</span>
                </div>
              </div>
            </div>

            {/* منتج 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all border border-gray-100 group">
              <div className="relative bg-gray-50 rounded-xl h-64 flex items-center justify-center mb-4 overflow-hidden">
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">جديد</span>
                <img src="https://cdn-icons-png.flaticon.com/512/4525/4525048.png" className="w-32 h-32 group-hover:scale-110 transition-transform duration-500" alt="منتج" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">عدسة زووم ذكية 360</h4>
              <div className="flex items-center gap-1 mb-3">
                 <span className="text-yellow-400">★★★★☆</span>
                 <span className="text-xs text-gray-400">(12 تقييم)</span>
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors">+</button>
                <div className="text-left">
                  <span className="block text-xl font-black text-gray-900">149 ر.س</span>
                </div>
              </div>
            </div>

            {/* منتج 3 */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all border border-gray-100 group">
              <div className="relative bg-gray-50 rounded-xl h-64 flex items-center justify-center mb-4 overflow-hidden">
                <img src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" className="w-32 h-32 group-hover:scale-110 transition-transform duration-500" alt="منتج" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">طقم أمان للمنزل (4 قطع)</h4>
              <div className="flex items-center gap-1 mb-3">
                 <span className="text-yellow-400">★★★★★</span>
                 <span className="text-xs text-gray-400">(89 تقييم)</span>
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors">+</button>
                <div className="text-left">
                  <span className="block text-xs text-gray-400 line-through">1400 ر.س</span>
                  <span className="block text-xl font-black text-gray-900">999 ر.س</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* 4. التذييل (Footer) */}
      <footer className="bg-white border-t border-gray-200 mt-20 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 مسبار ڤي. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}