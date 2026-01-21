import React from 'react';

export default function Home() {

  // =============================
  // بيانات المنتجات
  // =============================
  const products = [
    {
      id: 1,
      name: "كاميرا مراقبة خارجية 4K",
      price: 280,
      oldPrice: 350,
      image: "/images/cam1.jpg",
      badge: "خصم 20%",
      badgeColor: "bg-red-500",
      rating: 5
    },
    {
      id: 2,
      name: "كاميرا منزلية ذكية 360°",
      price: 149,
      oldPrice: null,
      image: "/images/cam2.jpg",
      badge: "جديد",
      badgeColor: "bg-green-500",
      rating: 4
    },
    {
      id: 3,
      name: "طقم حماية متكامل (4 قطع)",
      price: 999,
      oldPrice: 1400,
      image: "/images/cam3.jpg",
      badge: "الأكثر طلباً",
      badgeColor: "bg-yellow-500 text-black",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans" dir="rtl">

      {/* شريط العروض */}
      <div className="bg-blue-900 text-white text-center py-3 text-sm font-bold">
        🚚 شحن مجاني للطلبات فوق 200 ريال لفترة محدودة
      </div>

      {/* الهيدر */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              🛒
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            <button className="hidden md:block font-bold text-gray-600 hover:text-blue-800">
              تسجيل الدخول
            </button>
          </div>

          <div className="text-right">
            <h1 className="text-3xl font-black text-blue-900 tracking-wide">
              MISBAR <span className="text-yellow-500">V</span>
            </h1>
            <p className="text-xs text-gray-500 font-bold">
              وجهتك التقنية الأولى
            </p>
          </div>

        </div>
      </header>

      {/* الهيرو */}
      <main className="container mx-auto px-4 py-16 text-center">

        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-xs font-bold">
          جديد 2026
        </span>

        <h2 className="text-5xl md:text-6xl font-black mt-6 mb-6">
          راقب عالمك <br />
          <span className="text-blue-700">بوضوح لا يصدق</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          في مسبار ڤي نوفر أحدث تقنيات المراقبة الذكية بأسعار منافسة وجودة عالية.
        </p>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold shadow-lg">
          تصفح المنتجات
        </button>

        {/* المنتجات */}
        <section className="mt-24 text-right">

          <div className="flex justify-between items-center border-b pb-4 mb-8">
            <button className="text-blue-700 font-bold hover:underline">
              عرض الكل ←
            </button>
            <h3 className="text-3xl font-bold">
              الأكثر مبيعاً 🔥
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 border shadow-sm hover:shadow-xl transition"
              >

                {/* الصورة */}
                <div className="relative h-64 bg-gray-100 rounded-xl mb-4 overflow-hidden flex items-center justify-center">

                  {product.badge && (
                    <span
                      className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs px-2 py-1 rounded`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/images/fallback.jpg";
                    }}
                  />

                </div>

                {/* العنوان */}
                <h4 className="font-bold text-lg mb-1">
                  {product.name}
                </h4>

                {/* التقييم */}
                <div className="mb-3">
                  <span className="text-yellow-400">
                    {'★'.repeat(product.rating)}
                  </span>
                  <span className="text-gray-300">
                    {'★'.repeat(5 - product.rating)}
                  </span>
                </div>

                {/* السعر */}
                <div className="flex justify-between items-center">

                  <button className="bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 w-10 h-10 rounded-full font-bold">
                    +
                  </button>

                  <div className="text-left">

                    {product.oldPrice && (
                      <span className="block text-xs text-gray-400 line-through">
                        {product.oldPrice} ر.س
                      </span>
                    )}

                    <span className="block text-xl font-black">
                      {product.price} ر.س
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      {/* الفوتر */}
      <footer className="bg-white border-t mt-20 py-10 text-center text-gray-500 text-sm">
        © 2026 مسبار ڤي — جميع الحقوق محفوظة
      </footer>

    </div>
  );
}
