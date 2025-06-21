// src/pages/Dashboard.jsx

import React from 'react';
import Card from '../components/Card';
import SalesTable from '../components/SalesTable';
import SalesChart from '../components/SalesChart';
import StockProgressChart from '../components/StockProgressChart';
import AlertsWidget from '../components/AlertsWidget'; // استيراد المكون الجديد
import { useData } from '../context/dataContext'; // استيراد هوك useData

const Dashboard = () => {
  const {
    dashboardCardsData,
    recentSalesData,
    salesChartData,
    currentStockLevel,
    maxStockCapacity,
    // alertsData, // هذا سنضيفه إلى contextValue في dataContext.jsx لاحقًا
  } = useData();

  // بيانات تنبيهات وهمية هنا مؤقتًا
  const dashboardAlerts = [
    { id: 1, type: 'info', message: 'تمت إضافة دواء جديد: بنادول' },
    { id: 2, type: 'warning', message: 'المخزون المنخفض: فيتامين د (20 وحدة متبقية)' },
    { id: 3, type: 'success', message: 'طلب جديد رقم #123456' },
    { id: 4, type: 'danger', message: 'انتهت صلاحية منتج: مضاد حيوي X' },
    { id: 5, type: 'reminder', message: 'تذكير: مراجعة طلبات التوريد المعلقة.' },
    { id: 6, type: 'info', message: 'تم تحديث أسعار بعض المنتجات.' },
    { id: 7, type: 'warning', message: 'منتج "فيتامين سي" يحتاج إلى إعادة طلب عاجلة.' },
    { id: 8, type: 'success', message: 'تم استلام دفعة جديدة من الأدوية.' },
  ];


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
        {dashboardCardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>

      {/* قسم المخططات البيانية */}
      <SalesChart data={salesChartData} />

      {/* قسم جدول آخر المبيعات */}
      <SalesTable salesData={recentSalesData} />

      {/* قسم نسبة المخزون والتنبيهات والإشعارات بجانب بعضهما */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* مكون نسبة المخزون */}
        <StockProgressChart
          currentStock={currentStockLevel}
          maxCapacity={maxStockCapacity}
        />

        {/* استخدام مكون AlertsWidget الجديد هنا */}
        <AlertsWidget alerts={dashboardAlerts} />
      </div>
    </div>
  );
};

export default Dashboard;