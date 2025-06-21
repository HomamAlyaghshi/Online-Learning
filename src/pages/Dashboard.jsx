// src/pages/Dashboard.jsx

import Card from '../components/Card';
import SalesTable from '../components/SalesTable';
import SalesChart from '../components/SalesChart';
import StockProgressChart from '../components/StockProgressChart';

const Dashboard = () => {
  // بيانات وهمية لبطاقات لوحة التحكم
  const dashboardCardsData = [
    { title: "المبيعات اليومية", value: "SAR 2,500", icon: "💰", color: "primary" },
    { title: "الطلبات الجديدة", value: "15 طلب", icon: "📦", color: "secondary" },
    { title: "منتجات قاربت على الانتهاء", value: "7 أصناف", icon: "⚠️", color: "danger" },
  ];

  // بيانات وهمية لجدول المبيعات
  const recentSalesData = [
    { id: 'ORD005', customer: 'ليلى ناصر', total: 95.00, date: '2025-06-21', status: 'مكتمل' },
    { id: 'ORD006', customer: 'محمد سعيد', total: 180.25, date: '2025-06-21', status: 'قيد التجهيز' },
    { id: 'ORD007', customer: 'ريم منصور', total: 60.00, date: '2025-06-20', status: 'مكتمل' },
  ];

  // بيانات وهمية لمخطط المبيعات
  const chartData = [
    { name: 'يناير', إجمالي_المبيعات: 4000, عدد_المنتجات: 2400 },
    { name: 'فبراير', إجمالي_المبيعات: 3000, عدد_المنتجات: 1398 },
    { name: 'مارس', إجمالي_المبيعات: 2000, عدد_المنتجات: 9800 },
    { name: 'أبريل', إجمالي_المبيعات: 2780, عدد_المنتجات: 3908 },
    { name: 'مايو', إجمالي_المبيعات: 1890, عدد_المنتجات: 4800 },
    { name: 'يونيو', إجمالي_المبيعات: 2390, عدد_المنتجات: 3800 },
    { name: 'يوليو', إجمالي_المبيعات: 3490, عدد_المنتجات: 4300 },
  ];

  // بيانات وهمية لنسبة المخزون
  const currentStockLevel = 750;
  const maxStockCapacity = 1000;

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

      {/* قسم بطاقات الملخص الإحصائي وودجت الطقس/وقت العمل */}
      {/* تم تغيير الـ grid-cols لتصبح flex-wrap على الشاشات الصغيرة ثم grid على الأكبر */}
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
      <SalesChart data={chartData} />

      {/* قسم جدول آخر المبيعات */}
      <SalesTable salesData={recentSalesData} />

      {/* قسم نسبة المخزون والتنبيهات والإشعارات بجانب بعضهما */}
      {/* استخدمنا grid هنا لترتيبهم جنبًا إلى جنب */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* مكون نسبة المخزون */}
        <StockProgressChart
          currentStock={currentStockLevel}
          maxCapacity={maxStockCapacity}
        />

        {/* قسم الإشعارات أو التنبيهات */}
        <div className="bg-white p-6 rounded-lg shadow-md h-full"> {/* h-full لتأخذ نفس ارتفاع المخطط الدائري */}
          <h2 className="text-2xl font-bold text-primary mb-4">
            التنبيهات والإشعارات
          </h2>
          <ul className="list-disc list-inside text-textDark space-y-2">
            <li>تمت إضافة دواء جديد: بنادول</li>
            <li>المخزون المنخفض: فيتامين د (20 وحدة متبقية)</li>
            <li>طلب جديد رقم #123456</li>
            {/* يمكن إضافة المزيد من التنبيهات هنا */}
            <li>**تنبيه:** انتهت صلاحية منتج: مضاد حيوي X</li>
            <li>**تذكير:** مراجعة طلبات التوريد المعلقة.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;