// src/layouts/Navbar.jsx

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // تنسيق الوقت والتاريخ
  const formattedDate = currentTime.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = currentTime.toLocaleTimeString('ar-EG');

  return (
    <nav className="bg-white p-4 shadow-md flex items-center justify-between">
      {/* عنوان الصفحة */}
      <h2 className="text-2xl font-bold text-textDark">
        لوحة التحكم الرئيسية
      </h2>

      {/* الوقت والتاريخ في المنتصف */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-600">{formattedDate}</p>
        <p className="text-base text-gray-500">{formattedTime}</p>
      </div>

      {/* عناصر التحكم على اليمين */}
      <div className="flex items-center space-x-4">
        {/* أيقونة الإشعارات */}
        <button className="relative p-2 rounded-full hover:bg-background transition-colors duration-200">
          🔔
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-danger rounded-full transform translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </button>

        {/* أيقونة المستخدم */}
        <button className="p-2 rounded-full hover:bg-background transition-colors duration-200">
          👤
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
