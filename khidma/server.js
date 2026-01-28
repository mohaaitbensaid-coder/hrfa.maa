const express = require('express');
const path = require('path');
const app = express();
// استخدام البورت الذي توفره الاستضافة أو 3000 في حالة العمل محلياً
const PORT = process.env.PORT || 3000;

// إعدادات السيرفر لمعالجة البيانات (JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// تقديم الملفات الثابتة (CSS, JS, Images)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/frontend', express.static(path.join(__dirname, 'frontend')));

// تقديم صفحات HTML
app.use(express.static(path.join(__dirname, 'pages')));

// الصفحة الرئيسية (Root Route)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// API تجريبي لتسجيل الدخول (يمكن تطويره لاحقاً للاتصال بقاعدة بيانات)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    // هنا يمكنك إضافة التحقق من قاعدة البيانات
    console.log(`محاولة دخول من: ${email}`);

    res.json({
        success: true,
        message: 'تم تسجيل الدخول بنجاح',
        token: 'sample-jwt-token' 
    });
});

// تشغيل السيرفر (محلياً فقط)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// تصدير التطبيق لكي يعمل مع Vercel
module.exports = app;