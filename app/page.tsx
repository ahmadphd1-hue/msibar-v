export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      
      {/* شريط الإلحاح النفسي (Urgency) */}
      <div className="bg-black text-white text-center py-2 text-sm font-bold animate-pulse">
        🚀 انطلاق مسبار ڤي | خصومات الافتتاح تصل إلى 80% لفترة محدودة!
      </div>

      {/* الهيدر (Navigation) */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-yellow-500">

        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <button className="bg-gray-100 p-2 rounded-full">🛒</button>
            <button className="hidden md:block text-sm font-bold text-gray-600">تسجيل الدخول</button>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-black text-black tracking-tighter uppercase">
              MISBAR <span className="text-yellow-500 text-4xl">V</span>
            </h1>
            <p className="text-xs font-bold text-gray-400 -mt-1 tracking-widest text-left">مسبار ڤي</p>
          </div>
        </div>
      </header>

      {/* قسم الترحيب (Hero Section) */}
      <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
        {/* خلفية جمالية */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            وجهتك القادمة في <br/>
            <span className="text-yellow-500">عالم التقنية</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            في <span className="text-white font-bold">مسبار ڤي</span>، لا نبيع مجرد أجهزة، نحن نختار لك الأدوات التي ترفع من إنتاجيتك وتواكب طموحك.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-black text-xl hover:bg-yellow-400 transition shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              استكشف العروض الآن
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-black transition">
              من نحن؟
            </button>
          </div>
        </div>
      </section>

      {/* قسم المنتجات (Products) */}
      <main className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12 border-r-4 border-yellow-500 pr-4">
          <h3 className="text-3xl font-black text-gray-900">مختارات مسبار ڤي</h3>
          <span className="text-blue-600 font-bold cursor-pointer hover:underline">عرض الكل ←</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* المنتج 1 */}
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 hover:border-yellow-500 transition-all duration-500 group">
            <div className="relative h-72 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
              <span className="text-8xl group-hover:scale-110 transition duration-500">💻</span>
              <div className="absolute bottom-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-md font-bold">
                شحن مجاني
              </div>
            </div>
            <div className="p-6 text-right">
              <h4 className="text-2xl font-bold mb-2">لابتوب مسبار برو</h4>
              <p className="text-gray-500 text-sm mb-6">الأداء الأقوى للمطورين والمصممين المحترفين.</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-black text-black">4,999 ر.س</span>
                  <p className="text-red-500 text-xs font-bold mt-1">🔥 بقي 2 فقط!</p>
                </div>
                <button className="bg-black text-white p-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition-colors">
                  🛒
                </button>
              </div>
            </div>
          </div>

          {/* المنتج 2 */}
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 hover:border-yellow-500 transition-all duration-500 group">
            <div className="relative h-72 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
              <span className="text-8xl group-hover:scale-110 transition duration-500">📱</span>
            </div>
            <div className="p-6 text-right">
              <h4 className="text-2xl font-bold mb-2">هاتف ڤي ألترا</h4>
              <p className="text-gray-500 text-sm mb-6">كاميرا سينمائية وشاشة لا تضاهى.</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-black text-black">3,200 ر.س</span>
                </div>
                <button className="bg-black text-white p-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition-colors">
                  🛒
                </button>
              </div>
            </div>
          </div>

          {/* المنتج 3 */}
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 hover:border-yellow-500 transition-all duration-500 group">
            <div className="relative h-72 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
              <span className="text-8xl group-hover:scale-110 transition duration-500">⌚</span>
            </div>
            <div className="p-6 text-right">
              <h4 className="text-2xl font-bold mb-2">ساعة مسبار الذكية</h4>
              <p className="text-gray-500 text-sm mb-6">صحتك وتقنيتك في معصمك.</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-black text-black">850 ر.س</span>
                  <span className="text-gray-400 line-through text-sm mr-2">1,100 ر.س</span>
                </div>
                <button className="bg-black text-white p-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition-colors">
                  🛒
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* الفوتر (Footer) */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black mb-4 uppercase">MISBAR <span className="text-yellow-500">V</span></h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">نحن نؤمن أن التقنية يجب أن تكون في خدمة الإنسان، مسبار ڤي هو جسرك نحو المستقبل.</p>
          <div className="flex justify-center gap-6 mb-8 text-gray-400">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>TikTok</span>
          </div>
          <div className="pt-8 border-t border-gray-100 text-xs text-gray-400">
            جميع الحقوق محفوظة لمتجر مسبار ڤي © 2026 | صُنع بشغف في السعودية 🇸🇦
          </div>
        </div>
      </footer>
    </div>
  );

