// src/pages/Products.jsx

import React, { useState } from 'react';
import { useData } from '../context/dataContext';
import AddProductForm from '../components/AddProductForm';
// استيراد الأيقونات لإضفاء لمسة احترافية
import { FiPlus, FiSearch, FiChevronDown, FiChevronUp, FiEdit, FiTrash2, FiBox, FiAlertCircle } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion'; // لمسة إضافية لتحريك ظهور الفورم

const Products = () => {
    const { products, deleteProduct } = useData();
    const [showAddForm, setShowAddForm] = useState(false);

    // --- حالات الفلترة والبحث ---
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('الكل');
    const [sortOrder, setSortOrder] = useState('asc');

    // استنتاج الفئات المتوفرة تلقائيًا
    const categories = ['الكل', ...new Set(products.map(product => product.category))];

    // تصفية وفرز المنتجات
    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(product => selectedCategory === 'الكل' || product.category === selectedCategory)
        .sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (sortOrder === 'asc') {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });

    // متغيرات تصميمية لتسهيل القراءة
    const cardBaseStyle = "bg-white rounded-2xl shadow-lg overflow-hidden";
    const inputStyle = "w-full bg-background p-3 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-accent focus:border-secondary transition-all duration-300";
    const buttonBaseStyle = "flex items-center justify-center gap-2 font-semibold py-2 px-5 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105";

    return (
        <div className="container mx-auto p-4 md:p-8 font-sans text-textDark bg-background min-h-screen">
            <div className="space-y-8">
                {/* قسم العنوان وزر الإضافة */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-4xl md:text-5xl font-primary text-primary">
                        إدارة المنتجات
                    </h1>
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className={`${buttonBaseStyle} bg-primary text-textLight hover:bg-secondary`}
                    >
                        <FiPlus size={20} />
                        {showAddForm ? 'إغلاق' : 'إضافة منتج جديد'}
                    </button>
                </div>

                {/* فورم الإضافة مع تأثير حركي */}
                <AnimatePresence>
                    {showAddForm && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, y: -20 }}
                            animate={{ height: 'auto', opacity: 1, y: 0 }}
                            exit={{ height: 0, opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <div className={`${cardBaseStyle} p-6 mb-8`}>
                                <AddProductForm onClose={() => setShowAddForm(false)} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


                {/* بطاقة أدوات البحث والتصفية */}
                <div className={`${cardBaseStyle} p-6`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                        <div className="relative lg:col-span-2">
                            <FiSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="ابحث عن منتج بالاسم..."
                                className={`${inputStyle} pr-10`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select
                            className={inputStyle}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                            className={`${buttonBaseStyle} bg-secondary text-textLight hover:bg-primary w-full`}
                        >
                            <span>ترتيب أبجدي</span>
                            {sortOrder === 'asc' ? <FiChevronDown /> : <FiChevronUp />}
                        </button>
                    </div>
                </div>

                {/* شبكة عرض المنتجات */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className={`${cardBaseStyle} flex flex-col hover:shadow-xl transition-shadow duration-300`}>
                                <div className="p-5 flex-grow">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                                        <span className="bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">{product.category}</span>
                                    </div>
                                    <p className="text-secondary mb-4">
                                        السعر: <span className="font-semibold text-lg">{product.price.toFixed(2)} ريال</span>
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-textDark mb-1">
                                        <FiBox className="text-secondary" />
                                        <span>المخزون: {product.stock}</span>
                                        {product.stock < 10 && <FiAlertCircle className="text-danger" title="المخزون على وشك النفاد!" />}
                                    </div>
                                    <div className="text-sm text-textDark">
                                        تاريخ الانتهاء: {product.expiryDate}
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 flex justify-end items-center gap-3 border-t border-gray-100">
                                    <button
                                        onClick={() => alert(`تعديل ${product.name}`)}
                                        className="flex items-center gap-2 text-secondary hover:text-primary font-semibold transition-colors"
                                    >
                                        <FiEdit />
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm(`هل أنت متأكد من حذف ${product.name}؟`)) {
                                                deleteProduct(product.id);
                                            }
                                        }}
                                        className="flex items-center gap-2 text-danger hover:text-red-700 font-semibold transition-colors"
                                    >
                                        <FiTrash2 />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={`${cardBaseStyle} p-12 text-center`}>
                        <FiAlertCircle size={48} className="mx-auto text-accent mb-4" />
                        <h3 className="text-2xl font-bold text-primary mb-2">لا توجد نتائج</h3>
                        <p className="text-secondary">
                            حاول تغيير كلمات البحث أو الفلاتر المستخدمة.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;