document.addEventListener('DOMContentLoaded', function() {
    // من الأفضل استخدام ID محدد للنموذج بدلاً من querySelector('form')
    // تأكد من إضافة id="login-form" في ملف HTML
    const loginForm = document.getElementById('login-form') || document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // كيحبس الصفحة باش ما تديراش Refresh
            
            // مسح رسائل الخطأ القديمة إن وجدت
            const existingError = loginForm.querySelector('.error-message');
            if (existingError) existingError.remove();

            // Basic validation: Check if inputs are empty
            // التحقق من أن الحقول ليست فارغة
            const inputs = loginForm.querySelectorAll('input');
            let allFilled = true;
            inputs.forEach(function(input) {
                if (!input.value.trim()) allFilled = false;
            });

            if (!allFilled) {
                // Professional Error Message: Create a div instead of alert
                // إنشاء رسالة خطأ داخل الصفحة بدلاً من التنبيه المنبثق
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.style.color = 'red';
                errorDiv.style.marginBottom = '10px';
                errorDiv.style.padding = '10px';
                errorDiv.style.backgroundColor = '#ffe6e6';
                errorDiv.style.borderRadius = '4px';
                errorDiv.textContent = 'المرجو ملء جميع الحقول / Please fill in all fields';
                
                // إدراج الرسالة في بداية النموذج
                loginForm.insertBefore(errorDiv, loginForm.firstChild);
                return;
            }
            
            // حفظ حالة الدخول (localStorage) لكي تعمل صفحات الداشبورد
            // هذا حل مؤقت حتى يتم ربط الباك إند (Backend)
            localStorage.setItem('isLoggedIn', 'true');
            
            // هاد السطر كيشوف الرابط (URL) ديال الصفحة اللي أنت فيها دابا
            const currentPage = window.location.pathname;

            if (currentPage.includes('client-login.html')) {
                localStorage.setItem('userType', 'client');
                // إلا كنتي في صفحة الزبون، صيفطو لدشبورد الزبون
                window.location.href = 'client-dashboard.html';
            } else if (currentPage.includes('artisan-login.html')) {
                localStorage.setItem('userType', 'artisan');
                // إلا كنتي في صفحة الحرفي، صيفطو لدشبورد الحرفي
                window.location.href = 'artisan-dashboard.html';
            }
        });
    }

    // --- إضافة جديدة: تحسين تجربة المستخدم في الصفحة الرئيسية ---
    // Smooth Scroll: تنقل سلس عند الضغط على الروابط (مثلاً: #services, #contact)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return; // تجاهل الروابط الفارغة
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});