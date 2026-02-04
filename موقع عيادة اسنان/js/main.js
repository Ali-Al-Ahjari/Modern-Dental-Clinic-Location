// ملف JavaScript الرئيسي
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initCounters();
    initTestimonials();
    initScrollTop();
    initScrollAnimations();
    initBookingForm();
    initModal();
});

// إدارة شريط التنقل
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (menuToggle) menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// العدادات المتحركة
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const updateCounter = () => {
                    const current = parseInt(counter.innerText);
                    const increment = Math.ceil(target / 100);
                    if (current < target) {
                        counter.innerText = current + increment;
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                counter.classList.add('animated');
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
}

// شرائح آراء العملاء
function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentIndex = 0;
    
    function showSlide(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        if (testimonialCards[index]) testimonialCards[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentIndex = index;
    }
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        showSlide(currentIndex);
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(currentIndex);
    });
    
    dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
    
    if (testimonialCards.length > 0) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            showSlide(currentIndex);
        }, 5000);
    }
}

// زر العودة للأعلى
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
}

// حركات التمرير
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .team-card, .booking-form');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}

// نموذج الحجز
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('date');
        if (dateInput) {
            dateInput.min = today;
            const maxDate = new Date();
            maxDate.setMonth(maxDate.getMonth() + 3);
            dateInput.max = maxDate.toISOString().split('T')[0];
        }
        
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingSubmit(bookingForm);
        });
    }

    const modalBookingForm = document.getElementById('modalBookingForm');
    if (modalBookingForm) {
        modalBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingSubmit(modalBookingForm);
        });
    }
}

function handleBookingSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // تحقق بسيط (يمكن تحسينه بناءً على الحقول الموجودة)
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value) isValid = false;
    });

    if (!isValid) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    console.log('بيانات الحجز:', data);
    showNotification('تم إرسال طلب الحجز بنجاح، سنتصل بك قريباً', 'success');
    form.reset();
    
    // إغلاق المودال إذا كان مفتوحاً
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal && bookingModal.classList.contains('active')) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

}

// النموذج المنبثق
function initModal() {
    const bookNowBtn = document.getElementById('bookNowBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    
    if (bookNowBtn && bookingModal) {
        bookNowBtn.addEventListener('click', () => {
            bookingModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                bookingModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                bookingModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
                bookingModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// إظهار الإشعارات
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed; top: 100px; right: 20px;
        background-color: ${type === 'success' ? '#50C878' : '#FF6B6B'};
        color: white; padding: 15px 20px; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 9999; max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
