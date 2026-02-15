
<div align="center">
  <h1>
    🦷 مشروع موقع عيادة ابتسامة الأسنان <br>
    Dental Smile Clinic Website Project
  </h1>

  <p>
    <strong>موقع تعريفي متكامل لعيادة أسنان – تصميم متجاوب + تفاعلي + حجز مواعيد</strong><br>
    <em>Complete informational website for a dental clinic – responsive, interactive, online booking</em>
  </p>

  <p>
    <a href="https://ali-al-ahjari.github.io/Modern-Dental-Clinic-Location/">
      🔗 رابط التجربة المباشرة – Live Demo
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version 1.0.0">
    <img src="https://img.shields.io/badge/responsive-yes-success.svg" alt="Responsive">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License MIT">
  </p>
</div>

---

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

<div style="border: 2px solid #2e86de; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f0f8ff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 📌 1. مقدمة المشروع

**موقع "عيادة ابتسامة الأسنان"** هو موقع ويب تعريفي لعيادة أسنان، يهدف إلى عرض خدمات العيادة، الطاقم الطبي، وآراء العملاء، بالإضافة إلى توفير وسيلة سهلة لحجز المواعيد عبر الإنترنت.  
الموقع مصمم ليكون **متجاوباً (Responsive)** مع جميع الأجهزة (الموبايل، التابلت، والكمبيوتر).

</div>

---

<div style="border: 2px solid #28a745; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f5fff5; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## ⚙️ 2. المميزات التقنية

- ✅ **تصميم متجاوب (Responsive Design)** – يعمل بشكل ممتاز على الشاشات الصغيرة والكبيرة باستخدام CSS Media Queries.
- ✅ **تفاعل المستخدم (Interactivity)** – استخدام JavaScript لإضافة حركات تفاعلية وسلايدر للصور وآراء العملاء.
- ✅ **حجز المواعيد** – نموذج حجز متكامل مع التحقق من صحة البيانات (Form Validation).
- ✅ **أيقونات متجهة** – استخدام مكتبة Font Awesome.
- ✅ **خطوط عربية** – استخدام خط "Tajawal" من Google Fonts.
- ✅ **تأثيرات حركية (Animations)** – ظهور العناصر عند التمرير.
- ✅ **سهولة التواصل** – أزرار عائمة لواتساب والعودة للأعلى.

</div>

---

<div style="border: 2px solid #ffc107; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #fffcf0; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 📁 3. هيكلية المشروع

```text
موقع عيادة اسنان/
│
├── index.html
├── about.html
├── services.html
├── blog.html
├── contact.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── booking.js
│   └── gallery.js
│
├── images/
└── assets/
````

</div>

---

<div style="border: 2px solid #17a2b8; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f0ffff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 🧩 4. شرح الصفحات والمكونات

### أ. الصفحة الرئيسية (index.html)

1. شريط التنقل (Navbar)
2. القسم الرئيسي (Hero Section)
3. الإحصائيات
4. خدماتنا
5. الفريق الطبي
6. آراء العملاء
7. نموذج الحجز
8. الفوتر (Footer)

### ب. ملفات التنسيق (CSS)

* `style.css` – المتغيرات والتنسيقات العامة.
* `responsive.css` – تنسيقات الشاشات الصغيرة.
* `animations.css` – تعريفات الحركات.

### ج. ملفات الجافاسكريبت (JS)

* `main.js` – المنطق الرئيسي:

  * Mobile Menu
  * العدادات المتحركة
  * سلايدر التقييمات
  * زر العودة للأعلى
  * Modals

</div>

---

<div style="border: 2px solid #6f42c1; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f8f0ff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 📸 5. معرض الصور

🖼️ Homepage Preview

```
images/1.png
```

<small>يرجى استبدال الصورة بلقطة شاشة فعلية من المشروع.</small>

</div>

---

<div style="border: 2px solid #fd7e14; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #fff4e6; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 🔧 6. كيفية التعديل والاستخدام

1. تعديل النصوص من ملفات `.html`
2. استبدال الصور داخل مجلد `images`
3. تعديل الألوان داخل `css/style.css`:

```css
:root {
  --primary-color: #2e86de;
  --secondary-color: #54a0ff;
}
```

</div>

---

<div style="border: 2px solid #6c757d; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f8f9fa; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 🏁 7. الخاتمة

المشروع يمثل أساساً قابلاً للتطوير لإضافة لوحة تحكم أو ربطه بقاعدة بيانات مستقبلاً.

</div>

</div>

---

<div dir="ltr" align="left" id="english-section">

# 🇬🇧 English Section

<div style="border: 2px solid #2e86de; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f0f8ff; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 📌 1. Project Introduction

The "Dental Smile Clinic" website is an informational site designed to showcase services, medical staff, and customer reviews, while allowing users to book appointments online.
It is fully responsive across mobile, tablet, and desktop devices.

</div>

---

<div style="border: 2px solid #28a745; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f5fff5; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## ⚙️ 2. Technical Features

* ✅ Responsive Design
* ✅ Interactive JavaScript components
* ✅ Appointment Booking with validation
* ✅ Font Awesome Icons
* ✅ Tajawal Google Font
* ✅ Scroll Animations
* ✅ Floating WhatsApp & Back-to-Top buttons

</div>

---

<div style="border: 2px solid #6c757d; border-radius: 12px; padding: 20px; margin: 25px 0; background-color: #f8f9fa; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

## 🏁 7. Conclusion

A solid foundation for a professional clinic website, extendable with backend integration or admin dashboard.

</div>

</div>

---

<div align="center">
  <hr>
  <p>
    🚀 <strong>تم تنسيق الملف ليكون متوافقًا بصريًا مع GitHub Markdown</strong><br>
    🚀 <strong>Formatted for clean GitHub Markdown rendering</strong>
  </p>
  <sub>© 2025 – Dental Smile Clinic Project</sub>
</div>
```
