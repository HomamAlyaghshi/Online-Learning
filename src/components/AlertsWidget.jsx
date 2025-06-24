// src/components/AlertsWidget.jsx

import React from 'react';
import moment from 'moment';
import 'moment/locale/ar'; // تأكد من استيراد اللغة هنا أيضًا إذا كنت لا تعتمد فقط على DataContext

// لا نحتاج لـ defaultAlerts هنا بعد الآن، ستأتي من الـ props/Context
// const defaultAlerts = [...]

const AlertsWidget = ({ alerts }) => { // الآن AlertsWidget يستقبل "alerts" كـ prop
  // ... (باقي الدوال getAlertTypeClasses و getAlertIcon كما هي)
  const getAlertTypeClasses = (type) => {
    switch (type) {
      case 'info':
        return 'bg-blue-100 text-blue-800 border-blue-200'; // معلومات
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'; // تحذير
      case 'danger':
        return 'bg-red-100 text-red-800 border-red-200'; // خطر/خطأ
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200'; // نجاح
      case 'reminder':
        return 'bg-purple-100 text-purple-800 border-purple-200'; // تذكير
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'; // افتراضي
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'info':
        return 'ℹ️'; // رمز معلومات
      case 'warning':
        return '⚠️'; // رمز تحذير
      case 'danger':
        return '❌'; // رمز خطر
      case 'success':
        return '✅'; // رمز نجاح
      case 'reminder':
        return '⏰'; // رمز تذكير
      default:
        return '💬'; // رمز افتراضي
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <h2 className="text-2xl font-bold text-primary mb-4">
        التنبيهات والإشعارات
      </h2>
      <div className="h-[320px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
        {alerts && alerts.length > 0 ? ( // تحقق من وجود alerts قبل .map
          alerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex items-start p-3 rounded-lg border text-sm ${getAlertTypeClasses(alert.type)}`}
              role="alert"
            >
              <span className="flex-shrink-0 text-lg ms-2">
                {getAlertIcon(alert.type)}
              </span>
              <div className="flex-1 flex flex-col">
                <p className="flex-1">{alert.message}</p>
                {alert.timestamp && (
                  <p className="text-xs text-right opacity-75 mt-1">
                    {moment(alert.timestamp).format('HH:mm - D MMMM YYYY')}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-textDark text-center p-4">لا توجد تنبيهات جديدة حاليًا.</p>
          
        )}
      </div>
    </div>
  );
};

export default AlertsWidget;