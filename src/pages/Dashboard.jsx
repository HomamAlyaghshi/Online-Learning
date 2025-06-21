// src/pages/Dashboard.jsx

import React from 'react';
import Card from '../components/Card'; // سننشئ هذا المكون لاحقًا للبطاقات الإحصائية

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* قسم الترحيب والعنوان */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-primary mb-2">
          مرحبًا بك في لوحة تحكم الصيدلية!
        </h1>
        <p className="text-lg text-textDark">
          نظرة عامة سريعة على أداء صيدليتك اليوم.
        </p>
      </div>

      {/* قسم بطاقات الملخص الإحصائي */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* بطاقة إجمالي المبيعات اليومية */}
        <Card title="المبيعات اليومية" value="SAR 2,500" icon="💰" color="primary" />

        {/* بطاقة عدد الطلبات الجديدة */}
        <Card title="الطلبات الجديدة" value="15 طلب" icon="📦" color="secondary" />

        {/* بطاقة المنتجات قليلة المخزون */}
        <Card title="منتجات قاربت على الانتهاء" value="7 أصناف" icon="⚠️" color="danger" />
      </div>

      {/* قسم المخططات أو الجداول (كموضع مؤقت) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">
          أداء المبيعات (مخطط بياني هنا)
        </h2>
        <div className="h-64 bg-background flex items-center justify-center text-textDark rounded-md">
          مكان المخطط البياني أو جدول المبيعات الأخير
        </div>
      </div>

      {/* قسم الإشعارات أو التنبيهات (كموضع مؤقت) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">
          التنبيهات والإشعارات
        </h2>
        <ul className="list-disc list-inside text-textDark space-y-2">
          <li>تمت إضافة دواء جديد: بنادول</li>
          <li>المخزون المنخفض: فيتامين د (20 وحدة متبقية)</li>
          <li>طلب جديد رقم #123456</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;