// تحميل الفوتر ديناميكياً
function loadFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="footer-content">
            <!-- Brand Section (Right) -->
            <div class="footer-brand">
                <h3>hrfa.ma</h3>
                <p>منصة التواصل بين المحترفين والزبناء</p>
            </div>

            <!-- Quick Links (Center) -->
            <div class="footer-links">
                <h4>روابط سريعة</h4>
                <ul>
                    <li><a href="index.html"><i class="fas fa-home"></i> الرئيسية</a></li>
                    <li><a href="client-dashboard.html"><i class="fas fa-th-large"></i> الخدمات</a></li>
                    <li><a href="#"><i class="fas fa-info-circle"></i> من نحن</a></li>
                </ul>
            </div>

            <!-- Social Media (Left) - Vertical Stack -->
            <div class="footer-social">
                <h4>تابعنا</h4>
                <div class="social-icons vertical">
                    <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2026 hrfa.ma - جميع الحقوق محفوظة</p>
        </div>
    </footer>
    `;

    // إضافة الفوتر في نهاية الـ body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// تحميل الفوتر عند فتح الصفحة
document.addEventListener('DOMContentLoaded', function () {
    // حذف الفوتر القديم إذا كان موجوداً لتجنب التكرار
    const oldFooter = document.querySelector('footer');
    if (oldFooter) oldFooter.remove();

    loadFooter();
});
