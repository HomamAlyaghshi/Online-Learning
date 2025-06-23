
const Sidebar = () => {
  const adminInfo = {
    name: 'د.همام اليغشي',
    role: 'مدير الصيدلية',
    description: 'خبير في إدارة المخزون وتحسين المبيعات.',
    avatar: '/images/admin.jpg', 
   
  };


  const pharmacyLogoPath = '/images/logo.png';

  return (
    <div className="w-64 bg-primary text-textLight flex flex-col p-6 shadow-lg">
      {/* شعار الصيدلية */}
      <div className="mb-8 text-center">
        {/* إذا كان لديك ملف شعار حقيقي */}
        <img
          src={pharmacyLogoPath}
          alt="شعار الصيدلية"
          className="h-20 mx-auto mb-4 object-contain" 
        />
        {/* إذا لم يكن لديك شعار، يمكنك إبقاء النص البديل أو أيقونة */}
        <h1 className="text-3xl font-primary text-accent">
          لوحة تحكم الصيدلية
        </h1>
      </div>

      {/* معلومات المدير الحالي */}
      <div className="mb-8 p-4 bg-secondary rounded-lg text-center">
        {/* صورة رمزية للمدير أو أيقونة */}
        <img
          src={adminInfo.avatar}
          alt={adminInfo.name}
          className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-accent" // صورة دائرية مع حدود
        />
        <h3 className="text-xl font-bold text-accent mb-1">
          {adminInfo.name}
        </h3>
        <p className="text-sm text-textLight opacity-90 mb-2">
          {adminInfo.role}
        </p>
        <p className="text-xs text-textLight opacity-70 italic">
          "{adminInfo.description}"
        </p>
      </div>

      {/* روابط التنقل */}
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a
              href="/"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-secondary transition-colors duration-200"
            >
              <span className="ms-3 text-2xl">📊</span> {/* ms-3 for margin start (left in RTL) */}
              نظرة عامة
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/products"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-secondary transition-colors duration-200"
            >
              <span className="ms-3 text-2xl">💊</span>
              المنتجات
            </a>
          </li>
     
          <li className="mb-4">
            <a
              href="/"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-secondary transition-colors duration-200"
            >
              <span className="ms-3 text-2xl">💰</span>
              المبيعات
            </a>
          </li>
          {/* يمكن إضافة المزيد من الروابط هنا لاحقًا */}
        </ul>
      </nav>

      {/* قسم سفلي اختياري (مثل معلومات المستخدم أو إعدادات) */}
      <div className="mt-auto pt-6 border-t border-secondary">
        <p className="text-sm text-center text-textLight opacity-80">
          نسخة تجريبية 1.0
        </p>
      </div>
    </div>
  );
};

export default Sidebar;