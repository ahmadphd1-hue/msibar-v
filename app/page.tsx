import React from 'react';

export default function Home() {
  
  // ---------------------------------------------------------
  // 1️⃣ منطقة البيانات: هنا عدّل المنتجات والأسعار والصور براحتك
  // ---------------------------------------------------------
  const products = [
    // ---------------------------------------------------------
  // 1️⃣ منطقة البيانات المحدثة: صور كاميرات حقيقية 📸
  // ---------------------------------------------------------
  const products = [
    {
      id: 1,
      name: "كاميرا مراقبة خارجية 4K",
      price: 280,
      oldPrice: 350,
      // رابط صورة كاميرا خارجية حقيقية
      image: "https://m.media-amazon.com/images/I/51y-0Gq00EL._AC_SL1000_.jpg", 
      badge: "خصم 20%",
      badgeColor: "bg-red-500",
      rating: 5
    },
    {
      id: 2,
      name: "كاميرا منزلية ذكية 360",
      price: 149,
      oldPrice: null,
      // رابط صورة كاميرا داخلية دوارة
      image: "https://m.media-amazon.com/images/I/61Lo8f9YJEL._AC_SL1500_.jpg",
      badge: "جديد",
      badgeColor: "bg-green-500",
      rating: 4
    },
    {
      id: 3,
      name: "طقم حماية متكامل (4 قطع)",
      price: 999,
      oldPrice: 1400,
      // رابط صورة طقم كاميرات مع جهاز تسجيل
      image: "https://m.media-amazon.com/images/I/71tDggH61YL._AC_SL1500_.jpg", 
      badge: "الأكثر طلباً",
      badgeColor: "bg-yellow-500 text-black",
      rating: 5
    }
  ];
  // ---------------------------------------------------------

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right text-gray-900" dir="rtl">
      
      {/* شريط علوي */}
      <div className="bg-[#1a237e] text-white text-center py-3 text-sm font-medium">
        🎉 شحن مجاني للطلبات فوق 200 ريال لفترة محدودة!
      </div>

      {/* الهيدر */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">2</span>
            </button>
            <button className="hidden md:block text-gray-600 hover:text-blue-800 font-bold transition-colors text-sm">
              تسجيل الدخول
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h1 className="text-3xl font-black text-[#1a237e] tracking-tighter uppercase flex items-center gap-1" dir="ltr">
                MISBAR <span className="text-yellow-500 text-4xl">V</span>
              </h1>
              <p className="text-xs font-bold text-gray-500 tracking-widest opacity-80">
                وجهتك التقنية الأولى
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* الواجهة الرئيسية */}
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
          </div>
        </div>

        {/* 2️⃣ منطقة عرض المنتجات (ديناميكية) */}
        <div className="mt-24 text-right">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
             <button className="text-blue-700 font-bold hover:underline">عرض الكل ←</button>
             <h3 className="text-3xl font-bold text-gray-900">الأكثر مبيعاً هذا الأسبوع 🔥</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* هنا الكود يلف على قائمة البيانات ويرسمها وحدة وحدة */}
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                
                {/* الصورة */}
                <div className="relative bg-gray-50 rounded-xl h-64 flex items-center justify-center mb-4 overflow-hidden">
                  {product.badge && (
                    <span className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs font-bold px-2 py-1 rounded z-10`}>
                      {product.badge}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={product.name} 
                  />
                </div>

                {/* التفاصيل */}
                <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                <div className="flex items-center gap-1 mb-3">
                   <span className="text-yellow-400">{'★'.repeat(product.rating)}</span>
                   <span className="text-gray-300">{'★'.repeat(5 - product.rating)}</span>
                </div>
                
                {/* السعر والزر */}
                <div className="flex justify-between items-center">
                  <button className="bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all">
                    +
                  </button>
                  <div className="text-left">
                    {product.oldPrice && (
                      <span className="block text-xs text-gray-400 line-through">{product.oldPrice} ر.س</span>
                    )}
                    <span className="block text-xl font-black text-gray-900">{product.price} ر.س</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 py-12 text-center">
        <p className="text-gray-500 text-sm">© 2026 مسبار ڤي. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}