// src/components/SalesChart.jsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesChart = ({ data }) => {
  // بيانات وهمية افتراضية للمبيعات إذا لم يتم تمريرها
  const defaultChartData = [
    { name: 'يناير', uv: 4000, pv: 2400 },
    { name: 'فبراير', uv: 3000, pv: 1398 },
    { name: 'مارس', uv: 2000, pv: 9800 },
    { name: 'أبريل', uv: 2780, pv: 3908 },
    { name: 'مايو', uv: 1890, pv: 4800 },
    { name: 'يونيو', uv: 2390, pv: 3800 },
  ];

  const chartDataToDisplay = data || defaultChartData;

  const primaryColor = '#1A4D2E'; // لون primary من ثيمنا
  const secondaryColor = '#4F6F52'; // لون secondary من ثيمنا
  const textColorDark = '#333333'; // لون textDark من ثيمنا

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-4">
        أداء المبيعات الشهرية
      </h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartDataToDisplay}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /> {/* خطوط الشبكة */}
            <XAxis dataKey="name" stroke={textColorDark} /> {/* المحور السيني (الشهر) */}
            <YAxis stroke={textColorDark} /> {/* المحور الصادي (القيمة) */}
            <Tooltip
              contentStyle={{ backgroundColor: 'white', border: `1px solid ${primaryColor}`, borderRadius: '4px' }}
              labelStyle={{ color: primaryColor }}
              itemStyle={{ color: secondaryColor }}
            /> {/* تلميحات عند المرور بالماوس */}
            <Legend wrapperStyle={{ color: textColorDark }} /> {/* وسيلة الإيضاح */}
            <Line
              type="monotone"
              dataKey="pv" // مفتاح البيانات للمبيعات (مثلاً: إجمالي المبيعات)
              stroke={primaryColor}
              activeDot={{ r: 8 }}
              name="إجمالي المبيعات" // اسم الخط الظاهر في وسيلة الإيضاح
            />
            <Line
              type="monotone"
              dataKey="uv" // مفتاح بيانات آخر (مثلاً: عدد المنتجات المباعة)
              stroke={secondaryColor}
              name="عدد المنتجات" // اسم الخط الظاهر في وسيلة الإيضاح
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;