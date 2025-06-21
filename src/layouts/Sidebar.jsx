// src/layouts/Sidebar.jsx

import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary text-textLight flex flex-col p-6 shadow-lg">
      {/* شعار الصيدلية أو اسم لوحة التحكم */}
      <div className="mb-8">
        <h1 className="text-3xl font-primary text-accent text-center">
          لوحة تحكم الصيدلية
        </h1>
      </div>

      {/* روابط التنقل */}
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a
              href="/" // سنستخدم React Router Dom لاحقًا
              className="flex items-center p-3 rounded-lg text-lg hover:bg-secondary transition-colors duration-200"
            >
              {/* أيقونة لوحة التحكم */}
              <span className="mr-3">📊</span>
              نظرة عامة
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-secondary transition-colors duration-200"
            >
              {/* أيقونة المنتجات */}
              <span className="mr-3">💊</span>
              المنتجات
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-secondary transition-colors duration-200"
            >
              {/* أيقونة المخزون */}
              <span className="mr-3">📦</span>
              المخزون
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-secondary transition-colors duration-200"
            >
              {/* أيقونة المبيعات */}
              <span className="mr-3">💰</span>
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