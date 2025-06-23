// src/context/dataContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import moment from 'moment';
import 'moment/locale/ar';

moment.locale('ar');

export const DataContext = createContext();

export const DataProvider = ({ children }) => {


  // بيانات بطاقات لوحة التحكم
  const [dashboardCardsData, setDashboardCardsData] = useState([
    { title: "المبيعات اليومية", value: "SAR 2,500", icon: "💰", color: "primary" },
    { title: "الطلبات الجديدة", value: "15 طلب", icon: "📦", color: "secondary" },
    { title: "منتجات قاربت على الانتهاء", value: "7 أصناف", icon: "⚠️", color: "danger" },
  ]);

  // بيانات جدول المبيعات
  const [recentSalesData, setRecentSalesData] = useState([
    { id: 'ORD005', customer: 'ليلى ناصر', total: 95.00, date: '2025-06-21', status: 'مكتمل' },
    { id: 'ORD006', customer: 'محمد سعيد', total: 180.25, date: '2025-06-21', status: 'قيد التجهيز' },
    { id: 'ORD007', customer: 'ريم منصور', total: 60.00, date: '2025-06-20', status: 'مكتمل' },
  ]);

  // بيانات مخطط المبيعات
  const [salesChartData, setSalesChartData] = useState([
    { name: 'يناير', إجمالي_المبيعات: 4000, عدد_المنتجات: 2400 },
    { name: 'فبراير', إجمالي_المبيعات: 3000, عدد_المنتجات: 1398 },
    { name: 'مارس', إجمالي_المبيعات: 2000, عدد_المنتجات: 9800 },
    { name: 'أبريل', إجمالي_المبيعات: 2780, عدد_المنتجات: 3908 },
    { name: 'مايو', إجمالي_المبيعات: 1890, عدد_المنتجات: 4800 },
    { name: 'يونيو', إجمالي_المبيعات: 2390, عدد_المنتجات: 3800 },
    { name: 'يوليو', إجمالي_المبيعات: 3490, عدد_المنتجات: 4300 },
  ]);

  // بيانات نسبة المخزون
  const [currentStockLevel, setCurrentStockLevel] = useState(750);
  const [maxStockCapacity, setMaxStockCapacity] = useState(1000);

  // بيانات المنتجات
  const [products, setProducts] = useState([
    { id: 1, name: 'بنادول', category: 'مسكنات الألم', stock: 150, price: 15.50, expiryDate: '2026-12-31' },
    { id: 2, name: 'فيتامين د', category: 'فيتامينات', stock: 20, price: 30.00, expiryDate: '2025-07-15' },
    { id: 3, name: 'مضاد حيوي أ', category: 'مضادات حيوية', stock: 80, price: 55.75, expiryDate: '2025-06-20' },
    { id: 4, name: 'شراب الكحة', category: 'أدوية سعال', stock: 60, price: 22.00, expiryDate: '2027-03-10' },
  ]);

  // ----------------------------------------------------
  // إضافة بيانات التنبيهات هنا
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'info', message: 'تمت إضافة دواء جديد: بنادول', timestamp: '2025-06-21T10:30:00Z' },
    { id: 2, type: 'warning', message: 'المخزون المنخفض: فيتامين د (20 وحدة متبقية)', timestamp: '2025-06-20T15:45:00Z' },
    { id: 3, type: 'success', message: 'طلب جديد رقم #123456', timestamp: '2025-06-21T09:10:00Z' },
    { id: 4, type: 'danger', message: 'انتهت صلاحية منتج: مضاد حيوي X', timestamp: '2025-06-19T08:00:00Z' },
    { id: 5, type: 'reminder', message: 'تذكير: مراجعة طلبات التوريد المعلقة.', timestamp: '2025-06-21T11:00:00Z' },
    { id: 6, type: 'info', message: 'تم تحديث أسعار بعض المنتجات.', timestamp: '2025-06-20T18:20:00Z' },
    { id: 7, type: 'warning', message: 'منتج "فيتامين سي" يحتاج إلى إعادة طلب عاجلة.', timestamp: '2025-06-21T07:05:00Z' },
    { id: 8, type: 'success', message: 'تم استلام دفعة جديدة من الأدوية.', timestamp: '2025-06-21T13:00:00Z' },
  ]);
  // ----------------------------------------------------

  // ----------------------------------------------------
  // ب. الدوال التي ستعدل البيانات (أمثلة)
  // ----------------------------------------------------

  const deleteProduct = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const updateStock = (newStock) => {
    setCurrentStockLevel(newStock);
  };

  // دالة لإضافة تنبيه جديد
  const addAlert = (newAlert) => {
    setAlerts(prevAlerts => [...prevAlerts, { ...newAlert, id: Date.now(), timestamp: new Date().toISOString() }]);
  };

  // دالة لحذف تنبيه
  const removeAlert = (id) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
  };

  // ----------------------------------------------------
  // ج. القيمة التي ستُوفر للسياق
  // ----------------------------------------------------
  const contextValue = {
    // بيانات Dashboard
    dashboardCardsData,
    recentSalesData,
    salesChartData,
    currentStockLevel,
    maxStockCapacity,
    // بيانات المنتجات
    products,
    // بيانات التنبيهات
    alerts, // أضف التنبيهات هنا
    // الدوال التي ستسمح بتعديل البيانات
    setDashboardCardsData,
    setRecentSalesData,
    setSalesChartData,
    setCurrentStockLevel,
    setMaxStockCapacity,
    setProducts,
    deleteProduct,
    updateStock,
    addAlert,    // أضف دالة إضافة التنبيه
    removeAlert, // أضف دالة حذف التنبيه
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};