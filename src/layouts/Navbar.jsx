// src/layouts/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex items-center justify-between">
      {/* عنوان الصفحة الحالي (هذا سيكون ديناميكيًا لاحقًا) */}
      <h2 className="text-2xl font-bold text-textDark">
        لوحة التحكم الرئيسية
      </h2>

      {/* عناصر التحكم على اليمين (مثل أيقونة المستخدم، الإشعارات) */}
      <div className="flex items-center space-x-4">
        {/* أيقونة الإشعارات */}
        <button className="relative p-2 rounded-full hover:bg-background transition-colors duration-200">
          🔔
          {/* دائرة الإشعارات (إذا كان هناك إشعارات جديدة) */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-danger rounded-full transform translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </button>

        {/* أيقونة المستخدم/الملف الشخصي */}
        <button className="p-2 rounded-full hover:bg-background transition-colors duration-200">
          👤
        </button>
      </div>
    </nav>
  );
};

export default Navbar;