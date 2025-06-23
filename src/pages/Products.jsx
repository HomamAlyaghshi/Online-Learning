// src/pages/Products.jsx

import React from 'react';
import { useData } from '../context/dataContext'; // سنحتاج لبيانات المنتجات من السياق

const Products = () => {
  const { products, deleteProduct } = useData(); // جلب المنتجات ودالة الحذف من السياق

  return (
    <div className="space-y-8">
      {/* قسم ترحيبي أو عنوان الصفحة */}



      {/* جدول عرض المنتجات */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">
          المنتجات المتوفرة
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-background">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-textDark uppercase tracking-wider">
                  الاسم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-textDark uppercase tracking-wider">
                  الفئة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-textDark uppercase tracking-wider">
                  المخزون
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-textDark uppercase tracking-wider">
                  السعر (SAR)
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-textDark uppercase tracking-wider">
                  تاريخ الانتهاء
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-textDark uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-textDark">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-textDark">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-textDark">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-textDark">
                      {product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-textDark">
                      {product.expiryDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => alert(`تعديل ${product.name}`)} // سيتم استبدالها بدالة التعديل لاحقًا
                        className="text-primary hover:text-secondary-dark transition-colors duration-200 ml-4"
                      >
                        تعديل
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`هل أنت متأكد من حذف ${product.name}؟`)) {
                            deleteProduct(product.id); // استخدام دالة الحذف من السياق
                          }
                        }}
                        className="text-danger hover:text-red-700 transition-colors duration-200"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-textDark">
                    لا توجد منتجات حاليًا.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;