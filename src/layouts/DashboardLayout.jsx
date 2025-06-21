// src/layouts/DashboardLayout.jsx

import React from 'react';
import Sidebar from './Sidebar'; // سنقوم بإنشاء هذا المكون لاحقًا
import Navbar from './Navbar';   // سنقوم بإنشاء هذا المكون لاحقًا

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* الشريط الجانبي (Sidebar) */}
      <Sidebar />

      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col">
        {/* شريط التنقل العلوي (Navbar) */}
        <Navbar />

        {/* المساحة التي ستحمل محتوى الصفحة الحالية (Products, Sales, etc.) */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;