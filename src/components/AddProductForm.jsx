// src/components/AddProductForm.jsx

import React, { useState } from 'react';
import { useData } from '../context/dataContext';
import { FiPlusCircle } from 'react-icons/fi'; // أيقونة لزر الإضافة

// تم تمرير دالة onClose لإغلاق الفورم من المكون الأب
const AddProductForm = ({ onClose }) => {
    const { addProduct } = useData();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        stock: '',
        price: '',
        expiryDate: '',
    });
    // حالة جديدة لتتبع الأخطاء في كل حقل
    const [errors, setErrors] = useState({});

    // أنماط موحدة من أجل الاتساق وسهولة التعديل
    const inputStyle = "w-full bg-background p-3 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-accent focus:border-secondary transition-all duration-300";
    const labelStyle = "block text-sm font-semibold text-textDark mb-1";
    const errorStyle = "text-danger text-xs mt-1";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // إزالة الخطأ عند بدء الكتابة في الحقل
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    // دالة للتحقق من صحة البيانات قبل الإرسال
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "اسم المنتج مطلوب.";
        if (!formData.category.trim()) newErrors.category = "فئة المنتج مطلوبة.";
        if (!formData.stock) newErrors.stock = "كمية المخزون مطلوبة.";
        if (!formData.price) newErrors.price = "سعر المنتج مطلوب.";
        if (!formData.expiryDate) newErrors.expiryDate = "تاريخ الانتهاء مطلوب.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return; // إيقاف التنفيذ إذا وجدت أخطاء
        }

        addProduct({
            name: formData.name,
            category: formData.category,
            stock: Number(formData.stock),
            price: Number(formData.price),
            expiryDate: formData.expiryDate,
        });

        // إغلاق الفورم بعد الإضافة الناجحة (تجربة مستخدم أفضل من alert)
        if (onClose) {
            onClose();
        }
    };

    return (
        // لم نعد بحاجة لخلفية أو ظل هنا لأن البطاقة موجودة في المكون الأب
        <form onSubmit={handleSubmit} noValidate>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                إضافة منتج جديد
            </h2>

            {/* استخدام الشبكة لتحسين التخطيط */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {/* حقل اسم المنتج */}
                <div className="md:col-span-2">
                    <label htmlFor="name" className={labelStyle}>اسم المنتج</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputStyle} />
                    {errors.name && <p className={errorStyle}>{errors.name}</p>}
                </div>

                {/* حقل فئة المنتج */}
                <div>
                    <label htmlFor="category" className={labelStyle}>الفئة</label>
                    <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className={inputStyle} />
                    {errors.category && <p className={errorStyle}>{errors.category}</p>}
                </div>

                {/* حقل السعر */}
                <div>
                    <label htmlFor="price" className={labelStyle}>السعر (ريال)</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className={inputStyle} />
                    {errors.price && <p className={errorStyle}>{errors.price}</p>}
                </div>

                {/* حقل المخزون */}
                <div>
                    <label htmlFor="stock" className={labelStyle}>المخزون</label>
                    <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} className={inputStyle} />
                    {errors.stock && <p className={errorStyle}>{errors.stock}</p>}
                </div>

                {/* حقل تاريخ الانتهاء */}
                <div>
                    <label htmlFor="expiryDate" className={labelStyle}>تاريخ الانتهاء</label>
                    <input type="date" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className={`${inputStyle} text-right`} />
                    {errors.expiryDate && <p className={errorStyle}>{errors.expiryDate}</p>}
                </div>
            </div>

            {/* أزرار الإجراءات */}
            <div className="flex justify-end items-center gap-4 mt-8">
                <button
                    type="button"
                    onClick={onClose} // زر الإلغاء
                    className="py-2 px-6 rounded-lg text-textDark font-semibold hover:bg-gray-200 transition-colors"
                >
                    إلغاء
                </button>
                <button
                    type="submit"
                    className="flex items-center gap-2 bg-primary text-textLight font-bold py-2 px-6 rounded-lg shadow-md hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <FiPlusCircle />
                    <span>إضافة المنتج</span>
                </button>
            </div>
        </form>
    );
};

export default AddProductForm;