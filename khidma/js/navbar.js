// تحميل الـ Navbar ديناميكياً
function loadNavbar() {
    // تحديد المسار الصحيح للصور بناءً على المجلد الحالي
    // إذا كنا داخل مجلد pages نرجع للخلف خطوة (../) وإلا نبقى في نفس المجلد (./)
    const pathPrefix = window.location.pathname.includes('/pages/') ? '../' : './';

    // التحقق من حالة تسجيل الدخول
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    let authLinks = '';
    if (isLoggedIn) {
        // إذا كان مسجلاً للدخول، أظهر زر الخروج
        authLinks = `<li><a href="#" onclick="logout()" style="color: #e74c3c;">خروج <i class="fas fa-sign-out-alt"></i></a></li>`;
    } else {
        // إذا لم يكن مسجلاً، أظهر أزرار الدخول
        authLinks = `
            <li><a href="artisan-login.html">دخول المحترفين</a></li>
            <li><a href="client-login.html">دخول الزبناء</a></li>
        `;
    }

    const navbarHTML = `
        <nav class="navbar">
            <a href="index.html" class="navbar-brand">
                <img src="${pathPrefix}frontend/assets/icons/logo.svg" alt="hrfa.ma logo" style="height: 50px; vertical-align: middle; margin-left: 8px;" class="logo-img">
                <span style="color:var(--primary-dark)">hrfa.ma</span>
            </a>
            <button class="menu-toggle" onclick="toggleMenu()">
                <img src="${pathPrefix}frontend/assets/icons/menu.svg" alt="Menu" style="width: 24px; height: 24px;">
            </button>
            <ul class="navbar-links" id="navLinks">
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="client-dashboard.html">الخدمات</a></li>
                ${authLinks}
            </ul>
        </nav>
    `;

    // إضافة الناف بار في بداية الـ body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// فتح/إغلاق القائمة على الموبايل
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// دالة تسجيل الخروج
window.logout = function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    // توجيه المستخدم للصفحة الرئيسية
    window.location.href = 'index.html';
}

// تحميل الناف بار عند فتح الصفحة
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
});
