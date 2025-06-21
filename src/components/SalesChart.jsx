// src/components/SalesChart.jsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesChart = ({ data }) => {
  // لا نحتاج لبيانات افتراضية هنا لأنها ستأتي من السياق
  // const defaultChartData = [...]

  const chartDataToDisplay = data; // البيانات ستأتي دائمًا من الـ Context

  // تخصيص الألوان لتتناسب مع ثيم Tailwind
  const primaryColor = '#1A4D2E';
  const secondaryColor = '#4F6F52';
  const textColorDark = '#333333';

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
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" stroke={textColorDark} />
            <YAxis stroke={textColorDark} />
            <Tooltip
              contentStyle={{ backgroundColor: 'white', border: `1px solid ${primaryColor}`, borderRadius: '4px' }}
              labelStyle={{ color: primaryColor }}
              itemStyle={{ color: secondaryColor }}
            />
            <Legend wrapperStyle={{ color: textColorDark }} />
            <Line
              type="monotone"
              dataKey="إجمالي_المبيعات" // تم التعديل هنا
              stroke={primaryColor}
              activeDot={{ r: 8 }}
              name="إجمالي المبيعات"
            />
            <Line
              type="monotone"
              dataKey="عدد_المنتجات" // تم التعديل هنا
              stroke={secondaryColor}
              name="عدد المنتجات"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;