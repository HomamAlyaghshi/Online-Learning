// src/components/Card.jsx

import React from 'react';

const Card = ({ title, value, icon, color }) => {
  // تحديد اللون الديناميكي بناءً على الـ prop 'color'
  const bgColorClass = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    danger: 'bg-danger',
  }[color] || 'bg-white'; // افتراضيًا أبيض إذا لم يتطابق اللون

  const textColorClass = {
    primary: 'text-textLight',
    secondary: 'text-textLight',
    accent: 'text-textDark', // الألوان الفاتحة تحتاج نصًا داكنًا
    danger: 'text-textLight',
  }[color] || 'text-textDark';

  const iconBgColor = {
    primary: 'bg-opacity-20', // خلفية أيقونة شفافة لتظهر لون البطاقة
    secondary: 'bg-opacity-20',
    accent: 'bg-opacity-20',
    danger: 'bg-opacity-20',
  }[color] || 'bg-background';


  return (
    <div className={`${bgColorClass} ${textColorClass} p-6 rounded-lg shadow-md flex items-center space-x-4`}>
      {/* أيقونة البطاقة */}
      <div className={`p-3 rounded-full ${iconBgColor} text-2xl`}>
        {icon}
      </div>

      {/* المحتوى (العنوان والقيمة) */}
      <div>
        <h3 className="text-lg font-semibold opacity-90">
          {title}
        </h3>
        <p className="text-3xl font-bold mt-1">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Card;