# Alex Johnson — Personal Portfolio

A modern, responsive personal portfolio website built with **Bootstrap 5**, featuring smooth animations, a dynamic typing effect, and a clean professional design.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

- **Responsive Design** — Looks great on desktop, tablet, and mobile devices
- **Hero Section** — Eye-catching hero with animated typed text and 3D image gallery
- **About Section** — Personal bio with profile image and key details
- **Skills Section** — Animated progress bars showcasing technical skills
- **Resume Section** — Education, certifications, and professional experience timeline
- **Portfolio Section** — Filterable gallery with categories (App, Product, Branding, Books, AI, Tech)
- **Services Section** — Showcase of offered services with icons
- **Testimonials** — Swiper-powered testimonial carousel
- **Contact Section** — Contact form with PHP email support and embedded map
- **Theme Switcher** — Light/Dark mode toggle
- **Smooth Animations** — AOS (Animate On Scroll) library integration
- **Lightbox Gallery** — GLightbox for full-screen image previews

---

## 📂 Project Structure

```
├── index.html                 # Main portfolio page
├── portfolio-details.html     # Individual portfolio project details
├── service-details.html       # Service details page
├── starter-page.html          # Blank starter template page
├── README.md                  # This file
├── forms/
│   └── contact.php            # PHP contact form handler
└── assets/
    ├── css/
    │   └── main.css           # Main stylesheet
    ├── js/
    │   └── main.js            # Main JavaScript file
    ├── img/                   # Images (profile, portfolio, testimonials, etc.)
    ├── scss/                  # SCSS source files
    └── vendor/                # Third-party libraries
        ├── bootstrap/         # Bootstrap 5
        ├── bootstrap-icons/   # Bootstrap Icons
        ├── aos/               # Animate On Scroll
        ├── typed.js/          # Typed.js for typing animation
        ├── purecounter/       # PureCounter for animated counters
        ├── swiper/            # Swiper.js for carousels
        ├── glightbox/         # GLightbox for image lightbox
        ├── isotope-layout/    # Isotope for portfolio filtering
        ├── imagesloaded/      # imagesLoaded utility
        ├── waypoints/         # Waypoints for scroll triggers
        └── php-email-form/    # PHP Email Form validation
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for PHP contact form support)

### Quick Start

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Open `index.html`** in your browser — that's it!

3. *(Optional)* For the contact form to work, serve the project from a PHP-enabled server:
   ```bash
   php -S localhost:8000
   ```
   Then visit `http://localhost:8000` in your browser.

---

## 🎨 Customization

### Personal Information

Edit `index.html` to update:
- **Name & Title** — Header and hero section
- **About Section** — Bio, profile image, and personal details
- **Resume** — Education and work experience
- **Skills** — Adjust skill names and percentages
- **Portfolio** — Add/remove projects and images
- **Services** — Update service offerings
- **Testimonials** — Client quotes and photos
- **Contact Info** — Address, phone, email

### Styling

- Modify `assets/css/main.css` for quick style changes
- Edit `assets/scss/` source files for more structured customization
- The header gradient can be changed via the inline `style` attribute on the `<header>` tag

### Contact Form

Update `forms/contact.php`:
- Set `$receiving_email_address` to your email
- Optionally configure SMTP settings for reliable email delivery

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure |
| **CSS3 / SCSS** | Styling and responsive design |
| **Bootstrap 5.3.3** | UI framework and grid system |
| **JavaScript** | Interactivity and animations |
| **Typed.js** | Animated typing effect in hero |
| **AOS** | Scroll-triggered animations |
| **Swiper.js** | Testimonial carousel |
| **Isotope** | Portfolio filtering and layout |
| **GLightbox** | Fullscreen image lightbox |
| **PureCounter** | Animated number counters |
| **PHP** | Server-side contact form |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
