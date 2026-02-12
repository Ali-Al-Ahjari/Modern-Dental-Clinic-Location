
<!-- 
  README.md - مشروع موقع عيادة ابتسامة الأسنان (Dental Smile Clinic)
  تصميم منسق بمربعات وعناصر جاهز لمستودعات GitHub
-->

<div align="center">
  <h1>
    🦷 مشروع موقع عيادة ابتسامة الأسنان <br>
    Dental Smile Clinic Website Project
  </h1>
  <p>
    <strong>موقع تعريفى متكامل لعيادة أسنان – تصميم متجاوب + تفاعلي + حجز مواعيد</strong><br>
    <em>Complete informational website for a dental clinic – responsive, interactive, online booking</em>
  </p>
  <p>
    <a href="https://ali-al-ahjari.github.io/Modern-Dental-Clinic-Location/">
      🔗 رابط التجربة المباشرة – Live Demo
    </a>
  </p>
  
  <!-- شارات (Badges) اختيارية لتوضيح حالة المشروع -->
  <p>
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version 1.0.0">
    <img src="https://img.shields.io/badge/responsive-yes-success.svg" alt="Responsive">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License MIT">
  </p>
</div>

---

<!-- جدول المحتويات بشكل منسق (اختياري) -->
<details>
<summary>📖 جدول المحتويات – Table of Contents</summary>

- [🇸🇦 القسم العربي](#arabic-section)
  - [1. مقدمة المشروع](#1-مقدمة-المشروع)
  - [2. المميزات التقنية](#2-المميزات-التقنية)
  - [3. هيكلية المشروع](#3-هيكلية-المشروع)
  - [4. شرح الصفحات والمكونات](#4-شرح-الصفحات-والمكونات)
  - [5. معرض الصور](#5-معرض-الصور)
  - [6. كيفية التعديل والاستخدام](#6-كيفية-التعديل-والاستخدام)
  - [7. الخاتمة](#7-الخاتمة)
- [🇬🇧 English Section](#english-section)
  - [1. Project Introduction](#1-project-introduction)
  - [2. Technical Features](#2-technical-features)
  - [3. Project Structure](#3-project-structure)
  - [4. Pages and Components](#4-pages-and-components)
  - [5. Project Gallery](#5-project-gallery)
  - [6. How to Edit and Use](#6-how-to-edit-and-use)
  - [7. Conclusion](#7-conclusion)

</details>

---

<!-- ==================== القسم العربي ==================== -->
<div dir="rtl" align="right" id="arabic-section">

# 🇸🇦 القسم العربي

<!-- مربع: 1. مقدمة المشروع -->
<div style="border: 2px solid #2e86de; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f0f8ff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 📌 1. مقدمة المشروع

**موقع "عيادة ابتسامة الأسنان"** هو موقع ويب تعريفي لعيادة أسنان، يهدف إلى عرض خدمات العيادة، الطاقم الطبي، وآراء العملاء، بالإضافة إلى توفير وسيلة سهلة لحجز المواعيد عبر الإنترنت. الموقع مصمم ليكون **متجاوباً (Responsive)** مع جميع الأجهزة (الموبايل، التابلت، والكمبيوتر).

</div>

<!-- مربع: 2. المميزات التقنية -->
<div style="border: 2px solid #28a745; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f5fff5; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## ⚙️ 2. المميزات التقنية

يتمتع المشروع بالمميزات التالية:

✅ **تصميم متجاوب (Responsive Design)** – يعمل العرض بشكل ممتاز على الشاشات الصغيرة والكبيرة بفضل استخدام CSS Media Queries.  
✅ **تفاعل المستخدم (Interactivity)** – استخدام JavaScript لإضافة حركات تفاعلية وسلايدر (Slider) للصور وآراء العملاء.  
✅ **حجز المواعيد** – نموذج حجز متكامل مع التحقق من صحة البيانات (Form Validation).  
✅ **أيقونات متجهة** – استخدام مكتبة Font Awesome للأيقونات.  
✅ **خطوط عربية** – استخدام خط "Tajawal" من Google Fonts لضمان مظهر عربي حديث وجذاب.  
✅ **تأثيرات حركية (Animations)** – ظهور العناصر عند التمرير (Scroll Animations).  
✅ **سهولة التواصل** – أزرار عائمة للتواصل عبر واتساب والعودة للأعلى.

</div>

<!-- مربع: 3. هيكلية المشروع (File Structure) -->
<div style="border: 2px solid #ffc107; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #fffcf0; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 📁 3. هيكلية المشروع

```text
موقع عيادة اسنان/
│
├── index.html          # الصفحة الرئيسية
├── about.html          # صفحة من نحن
├── services.html       # صفحة الخدمات
├── blog.html           # صفحة المدونة
├── contact.html        # صفحة اتصل بنا
│
├── css/                # ملفات التنسيق
│   ├── style.css       # التنسيقات الأساسية
│   ├── responsive.css  # تنسيقات التجاوب
│   └── animations.css  # تنسيقات الحركات
│
├── js/                 # ملفات الجافاسكريبت
│   ├── main.js         # الكود الرئيسي
│   ├── booking.js      # نظام الحجز
│   └── gallery.js      # معرض الصور
│
├── images/             # الصور المستخدمة
└── assets/             # ملفات إضافية (مثل أيقونة الموقع)
```

</div>

<!-- مربع: 4. شرح الصفحات والمكونات -->

<div style="border: 2px solid #17a2b8; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f0ffff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

🧩 4. شرح الصفحات والمكونات

أ. الصفحة الرئيسية (index.html)

هي واجهة الموقع وتحتوي على عدة أقسام:

1. شريط التنقل (Navbar) – يحتوي على الروابط وزر الحجز وقائمة الموبايل.
2. القسم الرئيسي (Hero Section) – سلايدر صور مع عبارات ترحيبية وأزرار دعوة لاتخاذ إجراء (CTA).
3. الاحصائيات – عدادات متحركة تظهر عدد المرضى والأطباء وسنوات الخبرة.
4. خدماتنا – عرض مختصر لأهم الخدمات.
5. الفريق الطبي – بطاقات تعريفية للأطباء.
6. آراء العملاء – سلايدر يعرض تقييمات المرضى.
7. نموذج الحجز – لحجز موعد مباشرة.
8. الفوتر (Footer) – روابط سريعة ومعلومات الاتصال.

ب. ملفات التنسيق (CSS)

· style.css – يحتوي على المتغيرات (الألوان، الخطوط) والتنسيقات العامة.
· responsive.css – يتولى تعديل الأحجام والترتيب على شاشات الموبايل.
· animations.css – يحتوي على تعريفات keyframes للحركات (slide-up, fade-in).

ج. ملفات الجافاسكريبت (JS)

· main.js – العقل المدبر للموقع، ويقوم بـ:
  · تهيئة القائمة المتنقلة (Mobile Menu).
  · تشغيل عدادات الأرقام عند الوصول إليها.
  · تشغيل سلايدر آراء العملاء.
  · تفعيل زر "العودة للأعلى".
  · التعامل مع النوافذ المنبثقة (Modals).

</div>

<!-- مربع: 5. معرض الصور -->

<div style="border: 2px solid #6f42c1; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f8f0ff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

📸 5. معرض الصور

🖼️ لقطة شاشة للصفحة الرئيسية – Homepage Preview
(سيتم إضافة صور حقيقية للمشروع – مثال:)

img/1.png
<small>الصورة أعلاه توضيحية، يرجى استبدالها بلقطة حقيقية من موقعك.</small>

</div>

<!-- مربع: 6. كيفية التعديل والاستخدام -->

<div style="border: 2px solid #fd7e14; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #fff4e6; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

🔧 6. كيفية التعديل والاستخدام

1. تغيير النصوص – يمكنك فتح ملفات .html وتعديل النصوص العربية مباشرة.
2. تغيير الصور – استبدل الصور في مجلد images أو عدل روابط الصور في ملفات HTML (حالياً يتم استخدام صور من Unsplash).
3. تغيير الألوان – افتح css/style.css وعدل متغيرات الألوان في الأعلى:

```css
:root {
  --primary-color: #2e86de; /* اللون الأساسي */
  --secondary-color: #54a0ff; /* اللون الثانوي */
}
```

</div>

<!-- مربع: 7. الخاتمة -->

<div style="border: 2px solid #6c757d; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f8f9fa; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

🏁 7. الخاتمة

هذا المشروع يمثل أساساً قوياً لموقع عيادة متكامل، قابل للتطوير بسهولة لإضافة لوحة تحكم أو ربطه بقاعدة بيانات مستقبلاً.

</div>

</div> <!-- نهاية القسم العربي -->

---

<!-- ==================== English Section ==================== -->

<div dir="ltr" align="left" id="english-section">

🇬🇧 English Section

<!-- Box: 1. Project Introduction -->

<div style="border: 2px solid #2e86de; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f0f8ff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

📌 1. Project Introduction

The "Dental Smile Clinic" website is an informational website for a dental clinic. It aims to showcase the clinic’s services, medical staff, and customer reviews, in addition to providing an easy way to book appointments online. The site is designed to be responsive across all devices (mobile, tablet, and desktop).

</div>

<!-- Box: 2. Technical Features -->

<div style="border: 2px solid #28a745; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f5fff5; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

⚙️ 2. Technical Features

✅ Responsive Design – works perfectly on small and large screens via CSS Media Queries.
✅ User Interactivity – JavaScript for interactive animations, sliders (images & reviews).
✅ Appointment Booking – complete form with data validation.
✅ Vector Icons – Font Awesome library.
✅ Arabic Fonts – Google Fonts "Tajawal" for a modern Arabic look.
✅ Scroll Animations – elements fade in on scroll.
✅ Easy Communication – floating WhatsApp & back‑to‑top buttons.

</div>

<!-- Box: 3. Project Structure -->

<div style="border: 2px solid #ffc107; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #fffcf0; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

📁 3. Project Structure

```text
Dental Clinic Website/
│
├── index.html          # Home page
├── about.html          # About us page
├── services.html       # Services page
├── blog.html           # Blog page
├── contact.html        # Contact us page
│
├── css/                # Styling files
│   ├── style.css       # Base styles
│   ├── responsive.css  # Responsive styles
│   └── animations.css  # Animation keyframes
│
├── js/                 # JavaScript files
│   ├── main.js         # Main code
│   ├── booking.js      # Booking system
│   └── gallery.js      # Gallery code
│
├── images/             # Images folder
└── assets/             # Additional files (favicon, etc.)
```

</div>

<!-- Box: 4. Pages and Components -->

<div style="border: 2px solid #17a2b8; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f0ffff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

🧩 4. Pages and Components

A. Home Page (index.html)

1. Navigation Bar – links, booking button, mobile menu.
2. Hero Section – image slider with welcome messages & CTA buttons.
3. Statistics – animated counters (patients, doctors, experience).
4. Our Services – brief service highlights.
5. Medical Team – doctor profile cards.
6. Customer Reviews – rating slider.
7. Booking Form – direct appointment booking.
8. Footer – quick links and contact info.

B. CSS Files

· style.css – variables (colors, fonts) + global styles.
· responsive.css – mobile layout adjustments.
· animations.css – keyframes (slide-up, fade-in).

C. JavaScript Files

· main.js – core logic:
  · Mobile menu toggle.
  · Number counters on scroll.
  · Customer reviews slider.
  · Back‑to‑top button.
  · Modals handling.

</div>

<!-- Box: 5. Project Gallery -->

<div style="border: 2px solid #6f42c1; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f8f0ff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

📸 5. Project Gallery

🖼️ Homepage preview
(Replace with an actual screenshot of your project.)

img/1.png
<small>Image above is a placeholder – please add a real screenshot.</small>

</div>

<!-- Box: 6. How to Edit and Use -->

<div style="border: 2px solid #fd7e14; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #fff4e6; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

🔧 6. How to Edit and Use

1. Change text – open .html files and edit the Arabic/English text directly.
2. Change images – replace files in the images folder or update image links in HTML.
3. Change colors – open css/style.css and edit the :root variables:

```css
:root {
  --primary-color: #2e86de;   /* Primary color */
  --secondary-color: #54a0ff; /* Secondary color */
}
```

</div>

<!-- Box: 7. Conclusion -->

<div style="border: 2px solid #6c757d; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f8f9fa; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

🏁 7. Conclusion

This project represents a strong foundation for a complete clinic website, easily extendable with an admin dashboard or database connection in the future.

</div>

</div> <!-- end English section -->

---

<div align="center">
  <hr>
  <p>
    🚀 <strong>تم التنسيق باستخدام مربعات وعناصر جاهزة لمستودعات GitHub</strong><br>
    🚀 <strong>Formatted with ready‑to‑use boxes and elements for GitHub repositories</strong>
  </p>
  <p>
    <sub>© 2025 – مشروع عيادة ابتسامة الأسنان | Dental Smile Clinic Project</sub>
  </p>
</div>
```

---
