<p align="center">
  <img src="public/images/avatar.png" width="120" style="border-radius: 50%" />
</p>

<h1 align="center">Rohit Solanki — Portfolio</h1>

<p align="center">
  <strong>Full Stack Developer · MERN Stack · Problem Solver</strong>
</p>

<p align="center">
  <a href="https://github.com/rohitsolanki01"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://www.linkedin.com/in/rohit--solanki/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:rohitsolanki0473@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
</p>

---

## ✨ Overview

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS v4**, and **Framer Motion**. Features a premium dark-mode design with smooth animations, an animated SVG logo, and live GitHub data integration.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, Tailwind CSS v4, Framer Motion |
| **Build Tool** | Vite |
| **UI Library** | shadcn/ui (Radix) |
| **Icons** | React Icons |
| **Fonts** | Inter, Outfit, JetBrains Mono |
| **API** | GitHub REST API |

## 📂 Project Structure

```
src/
├── App.jsx              # Main app with intro screen, dark mode, scroll progress
├── index.css            # Design system — colors, animations, grid background
├── main.jsx             # React entry point
└── components/
    ├── Logo.jsx         # Animated SVG "R" monogram
    ├── Navbar.jsx       # Sticky glassmorphism navbar with mobile drawer
    ├── Hero.jsx         # Split hero with avatar, typing animation, social links
    ├── About.jsx        # Bio, education, quick info card
    ├── Skills.jsx       # Frontend / Backend / Tools bento cards
    ├── Projects.jsx     # Project cards with terminal-style previews
    ├── Journey.jsx      # Learning timeline (2024–2026)
    ├── GitHub.jsx       # Live GitHub stats + repo cards via API
    ├── Contact.jsx      # Contact form + social links
    └── Footer.jsx       # Minimal footer with back-to-top
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rohitsolanki01/Portfoliyo-Rohit-Solanki.git

# Navigate to the project
cd Portfoliyo-Rohit-Solanki

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Features

- **Animated Intro Screen** — SVG logo with stroke-draw animation, letter-by-letter name reveal, floating particles
- **Dark / Light Mode** — Toggle with smooth animated transition
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **Live GitHub Data** — Fetches real repos, stats, and profile info via GitHub API
- **Terminal-Style Project Cards** — Each project has a fake terminal preview
- **Glassmorphism Navbar** — Backdrop blur with active section indicator
- **Smooth Scroll Animations** — Framer Motion scroll-triggered reveals
- **Custom Grid Background** — Subtle fixed grid pattern
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML

## 📋 Featured Projects

| Project | Description | Tech |
|---------|-------------|------|
| **[Tranquvest](https://treding-app-tranquvest.vercel.app/)** | Full-stack trading platform with live market feeds | React, Express, MongoDB, Chart.js |
| **[Nestigo](https://nestigo.onrender.com/)** | Vacation rental platform with secure booking | MongoDB, Express, EJS, Node.js |
| **[Weather Dashboard](https://github.com/rohitsolanki01/Weather_App-)** | Real-time weather app with dynamic backgrounds | React, OpenWeather API, Tailwind |
| **[ShortIt](https://short-it-kappa.vercel.app/)** | URL shortening service with click analytics | React, Tailwind CSS, API Integration |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/rohitsolanki01">Rohit Solanki</a>
</p>
