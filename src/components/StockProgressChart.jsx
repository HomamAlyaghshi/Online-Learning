// src/components/StockProgressChart.jsx

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const StockProgressChart = ({ currentStock, maxCapacity }) => {
  const percentage = maxCapacity > 0 ? ((currentStock / maxCapacity) * 100).toFixed(0) : 0;
  const remainingPercentage = 100 - percentage;

  // بيانات المخطط الدائري
  const data = [
    { name: 'الممتلئ', value: parseFloat(percentage) },
    { name: 'الفارغ', value: parseFloat(remainingPercentage) },
  ];

  // ألوان المخطط الدائري من ثيم Tailwind
  const primaryColor = '#1A4D2E'; // لون primary
  const emptyColor = '#E0E0E0';   // لون رمادي فاتح للمساحة الفارغة

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-primary mb-4">
        نسبة امتلاء المخزون
      </h2>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60} // نصف قطر داخلي لجعله دائرة مجوفة
              outerRadius={80} // نصف قطر خارجي
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              startAngle={90} // يبدأ من الأعلى
              endAngle={-270} // يدور باتجاه عقارب الساعة لتعبئة كاملة
              stroke="none" // لإزالة الحدود حول القطاعات
            >
              <Cell key={`cell-0`} fill={primaryColor} /> {/* لون الجزء الممتلئ */}
              <Cell key={`cell-1`} fill={emptyColor} />   {/* لون الجزء الفارغ */}
              <Label
                value={`${percentage}%`}
                position="center"
                className="font-bold text-4xl"
                fill={primaryColor}
              /> {/* النص المركزي داخل الدائرة */}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-lg text-textDark mt-4">
        المخزون الحالي: **{currentStock}** من **{maxCapacity}** وحدة.
      </p>
    </div>
  );
};

export default StockProgressChart;