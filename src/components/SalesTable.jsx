// src/components/SalesTable.jsx

import React from 'react';

const SalesTable = ({ salesData }) => {
  // بيانات وهمية افتراضية إذا لم يتم تمرير salesData
  const defaultSalesData = [
    { id: 'ORD001', customer: 'أحمد علي', total: 120.50, date: '2025-06-20', status: 'مكتمل' },
    { id: 'ORD002', customer: 'فاطمة محمد', total: 85.00, date: '2025-06-20', status: 'قيد التجهيز' },
    { id: 'ORD003', customer: 'سارة خالد', total: 210.75, date: '2025-06-19', status: 'مكتمل' },
    { id: 'ORD004', customer: 'يوسف جمال', total: 45.20, date: '2025-06-19', status: 'ملغى' },
  ];

  const dataToDisplay = salesData || defaultSalesData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-2xl font-bold text-primary mb-4">
        آخر المبيعات
      </h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-background">
          <tr>
            <th className="px-6 py-3 text-start text-xs font-medium text-textDark uppercase tracking-wider">
              رقم الطلب
            </th>
            <th className="px-6 py-3 text-start text-xs font-medium text-textDark uppercase tracking-wider">
              العميل
            </th>
            <th className="px-6 py-3 text-start text-xs font-medium text-textDark uppercase tracking-wider">
              الإجمالي (SAR)
            </th>
            <th className="px-6 py-3 text-start text-xs font-medium text-textDark uppercase tracking-wider">
              التاريخ
            </th>
            <th className="px-6 py-3 text-start text-xs font-medium text-textDark uppercase tracking-wider">
              الحالة
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataToDisplay.map((sale) => (
            <tr key={sale.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {sale.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {sale.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {sale.total.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {sale.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  sale.status === 'مكتمل' ? 'bg-green-100 text-green-800' :
                  sale.status === 'قيد التجهيز' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800' // 'ملغى' أو أي حالة أخرى
                }`}>
                  {sale.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;