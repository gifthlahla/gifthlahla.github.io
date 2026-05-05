# Gift Hlahla — Personal Portfolio

My personal portfolio website — a modern, responsive showcase of my skills, projects, and experience as a Full-Stack Developer. Built with **React, TailwindCSS 4.1, and Framer Motion**, and deployed on GitHub Pages.

---

## Features

- **Dark/Light mode** — toggle that remembers your preference
- **Smooth scroll navigation** — sticky navbar with mobile menu
- **Animated sections** — built with Framer Motion (scroll reveals, staggered entrances)
- **Responsive design** — looks great on phones, tablets, and desktops
- **Working contact form** — powered by Formspree (sends directly to my email)
- **Project showcase** — cards with live demo & GitHub links
- **Downloadable CV** — one‑click PDF download

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | React, Vite |
| **Styling** | TailwindCSS 4.1, custom variants for manual dark mode |
| **Animations** | Framer Motion |
| **Icons** | React Icons (Simple Icons, Feather) |
| **Form backend** | Formspree |
| **Deployment** | GitHub Pages |

---

## Project Structure

```markdown
gifthlahla.github.io/
├── .gitignore
├── index.html                 # Vite entry point
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite + Tailwind + React setup
├── README.md                  # You're reading it
├── src/
│ ├── main.jsx                 # React mount point
│ ├── App.jsx                  # Main layout, dark mode state
│ ├── index.css                # Tailwind import + custom variant
│ └── components/
│ ├── Navbar.jsx               # Sticky navbar, mobile menu, theme toggle
│ ├── Hero.jsx                 # Photo, name, tagline, CTAs
│ ├── About.jsx                # Bio + stats
│ ├── Experience.jsx           # Internship & tutoring timeline
│ ├── Projects.jsx             # 5 project cards with tags & links
│ ├── Skills.jsx               # Tech icons + certifications
│ ├── Education.jsx            # University & high school
│ ├── Contact.jsx              # Contact info + working form
│ └── Footer.jsx               # Copyright & back-to-top
└── public/
└── assets/
├── profile-photo.jpg          # Your Profile photo
├── cv-gift-hlahla.pdf         # Downloadable CV
└── project1...5.png           # Project screenshots
```

---

## Run Locally

Make sure you have **Node.js v18+** and **Git** installed.

```bash
# 1. Clone the repository
git clone https://github.com/gifthlahla/gifthlahla.github.io.git
cd gifthlahla.github.io

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

---

## Build & Deploy

```bash
# Build for production (outputs to dist/)
npm run build
```
The contents of dist/ are deployed to GitHub Pages. If this is your user site (username.github.io), push the dist/ folder to the main branch using a deploy script or GitHub Action.

---

## Contact

Email: gifthlhla78@gmail.com

GitHub: www.github.com/gifthlahla

LinkedIn: www.linkedin.com/in/gifthlahla

---
