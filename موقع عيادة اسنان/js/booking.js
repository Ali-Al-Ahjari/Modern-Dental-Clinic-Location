// نظام الحجز المتقدم
document.addEventListener('DOMContentLoaded', function() {
    initAdvancedBooking();
    initCalendar();
});

function initAdvancedBooking() {
    const serviceSelect = document.getElementById('service');
    const doctorSelect = document.getElementById('doctor');
    const dateInput = document.getElementById('date');
    
    if (serviceSelect) {
        serviceSelect.addEventListener('change', function() {
            updateAvailableDoctors(this.value);
        });
    }
    
    if (doctorSelect && dateInput) {
        doctorSelect.addEventListener('change', updateAvailableTimes);
        dateInput.addEventListener('change', updateAvailableTimes);
    }
}

function updateAvailableDoctors(serviceType) {
    const doctorSelect = document.getElementById('doctor');
    if (!doctorSelect) return;
    
    doctorSelect.innerHTML = '<option value="">اختر الطبيب</option>';
    
    const doctors = {
        'consultation': [
            { id: '1', name: 'د. أحمد محمد - استشاري' },
            { id: '2', name: 'د. سارة العلي - أخصائية' }
        ],
        'whitening': [
            { id: '1', name: 'د. أحمد محمد - استشاري تجميل' }
        ],
        'implant': [
            { id: '3', name: 'د. خالد الحربي - استشاري زراعة' }
        ],
        'ortho': [
            { id: '2', name: 'د. سارة العلي - أخصائية تقويم' }
        ]
    };
    
    const availableDoctors = doctors[serviceType] || doctors['consultation'];
    availableDoctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
    });
}

function updateAvailableTimes() {
    const doctorId = document.getElementById('doctor')?.value;
    const date = document.getElementById('date')?.value;
    const timeSelect = document.getElementById('time');
    
    if (!doctorId || !date || !timeSelect) return;
    
    timeSelect.innerHTML = '<option value="">اختر الوقت</option>';
    
    const workHours = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '1:00', '2:00', '3:00', '4:00'];
    const bookedTimes = ['10:00', '2:00'];
    
    workHours.forEach(time => {
        if (!bookedTimes.includes(time)) {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time + ' ص';
            timeSelect.appendChild(option);
        }
    });
}

function initCalendar() {
    const calendarContainer = document.getElementById('calendarContainer');
    if (!calendarContainer) return;
    
    const today = new Date();
    calendarContainer.innerHTML = generateCalendar(today.getMonth(), today.getFullYear());
    addCalendarEvents();
}

function generateCalendar(month, year) {
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const today = new Date();
    
    let html = `<div class="calendar">
        <div class="calendar-header"><h3>${months[month]} ${year}</h3></div>
        <div class="calendar-weekdays"><div>أحد</div><div>إثنين</div><div>ثلاثاء</div><div>أربعاء</div><div>خميس</div><div>جمعة</div><div>سبت</div></div>
        <div class="calendar-days">`;
    
    for (let i = 0; i < firstDayOfWeek; i++) html += '<div class="calendar-day other-month"></div>';
    
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        const isPast = new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        html += `<div class="calendar-day ${isToday ? 'today' : ''} ${isPast ? 'past' : 'available'}" data-date="${year}-${month + 1}-${day}">${day}</div>`;
    }
    
    return html + '</div></div>';
}

function addCalendarEvents() {
    const calendarDays = document.querySelectorAll('.calendar-day.available');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            document.querySelectorAll('.calendar-day.selected').forEach(d => d.classList.remove('selected'));
            this.classList.add('selected');
            const dateInput = document.getElementById('date');
            if (dateInput) dateInput.value = this.getAttribute('data-date');
        });
    });
}

// حفظ الحجز
function saveBooking(bookingData) {
    const bookings = JSON.parse(localStorage.getItem('dentalBookings') || '[]');
    bookings.push({ ...bookingData, id: Date.now(), status: 'pending', createdAt: new Date().toISOString() });
    localStorage.setItem('dentalBookings', JSON.stringify(bookings));
    return true;
}

function getBookings() {
    return JSON.parse(localStorage.getItem('dentalBookings') || '[]');
}
