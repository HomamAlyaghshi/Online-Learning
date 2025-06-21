/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Sansita One"', "cursive"], // الخط الأساسي
      },
      colors: {
        // لوحة ألوان مستوحاة من الأجواء الطبية والهادئة
        primary: "#1A4D2E", // أخضر داكن عميق (يمثل الثقة والطبيعة)
        secondary: "#4F6F52", // أخضر متوسط (يمثل الهدوء والنمو)
        accent: "#FFC26F", // أصفر فاتح / بيج (لمسة دافئة وجذابة للتأكيد)
        background: "#F5F5DC", // بيج فاتح (خلفية نظيفة ومريحة للعين)
        textDark: "#333333", // رمادي داكن للنصوص الأساسية
        textLight: "#FFFFFF", // أبيض للنصوص الفاتحة على الخلفيات الداكنة
        danger: "#B82E2E", // أحمر للتنبيهات أو الإجراءات الخطرة (مثل نفاد المخزون)
      },
    },
  },
};
