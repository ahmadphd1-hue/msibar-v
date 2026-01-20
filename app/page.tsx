export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      
      {/* شريط الإلحاح النفسي (الخصم) */}
      <div className="bg-black text-white text-center py-2 text-sm font-bold animate-pulse">
        🚀 انطلاق مسبار في | خصومات الافتتاح تصل إلى 80% لفترة محدودة!
      </div>

      {/* قسم المنتجات (الكاميرا) */}
      <div className="p-10 flex flex-wrap gap-5 justify-center">
        {/* بطاقة الكاميرا */}
        <div className="border border-gray-300 rounded-lg p-5 w-80 shadow-lg bg-white">
          <img src="/cam6.jpg" alt="كاميرا" className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-xl font-bold text-black mb-2">كاميرا احترافية</h2>
          <p className="text-gray-600 text-sm mb-4">كاميرا مميزة للتصوير الفوتوغرافي والفيديو.</p>
          <div className="flex justify-between items-center">
            <span className="text-red-600 font-bold text-lg">2500 ريال</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">شراء</button>
          </div>
        </div>
      </div>

      {/* الهيدر (القائمة العلوية) */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-yellow-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* أزرار السلة والدخول */}
          <div className="flex gap-4 items-center">
            <button className="bg-gray-100 p-2 rounded-full">🛒</button>
            <button className="hidden md:block text-sm font-bold text-gray-600">تسجيل الدخول</button>
          </div>

          {/* اللوجو واسم المتجر */}
          <div className="text-right">
            <h1 className="text-3xl font-black text-black tracking-tighter uppercase">
              MISBAR <span className="text-yellow-500 text-4xl">V</span>
            </h1>
            <p className="text-xs font-bold text-gray-400 -mt-1 tracking-widest text-left">مسبار في</p>
          </div>

        </div>
      </header>

    </div>
  );
}