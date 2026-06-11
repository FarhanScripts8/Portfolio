# Farhan | Personal Portfolio Website 🚀

A modern, responsive, and high-performance single-page portfolio website designed to showcase my engineering projects, frontend expertise, and technical skill set. Featuring an adaptive dark/light theme engine and an automated dual-channel contact funnel.

🌐 **Live Demo:** [Insert Your Live Vercel/Netlify Link Here](https://your-portfolio-link.vercel.app)

---

## ✨ Features

* **⚡ High Performance Layout:** Built using optimized semantic HTML5 and vanilla CSS Grid/Flexbox for maximum scannability and structural performance.
* **🌓 Adaptive Theme Engine:** Native dark/light mode system utilizing CSS custom properties (`:root` tokens). Features system-preference detection and local-storage caching to eliminate browser layout flashes.
* **📱 Fully Responsive:** Adaptive layout architectures tailored with crisp design breakpoints tracking mobile displays up through ultra-wide desktop monitors.
* **✍️ Dynamic Micro-Interactions:** Custom typography mechanics driven by `Typed.js`, coupled with seamless structural tracking on the main menu bar.
* **📩 Dual-Channel Contact Funnel:** Form logic engineered with asynchronous hooks (`async/await`) that concurrently fires email dispatch notifications via Web3Forms and pops an immediate notification wire straight to WhatsApp.

---

## 🛠️ Tech Stack & Dependencies

* **Core Architecture:** HTML5, CSS3 (Modern Flexbox / Grid Systems), JavaScript (ES6+)
* **Typography Frameworks:** Google Fonts (*Poppins* for body text, *Syne* for editorial headers)
* **Icon Sets:** [Remix Icon Library v3.5.0](https://remixicon.com/)
* **Animation Utilities:** [Typed.js Library](https://github.com/mattboldt/typed.js)
* **Backend Integrations:** Web3Forms API & WhatsApp Click-to-Chat Gateway

---

## 📂 Project Architecture

The workspace is packaged inside an easy-to-deploy structure to keep client loading speeds incredibly swift:

```text
📁 my-portfolio/
│
├── 📄 index.html          # Core document containing markup, styling variables, and head scripts
└── 📁 assets/             # Asset repository containing image frameworks
    ├── 🖼️ profile.jpg     # Professional avatar display
    ├── 🖼️ project1.jpg    # Production portfolio layout screenshots
    └── 🖼️ skill-icons/    # Brand engineering tool icons
