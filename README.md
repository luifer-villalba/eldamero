# 🔺 El Damero

> A digital platform for operative Masonic study: from symbolism to practical application.

[![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?style=flat&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Netlify Status](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat&logo=netlify)](https://eldamero.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**🌐 Live Site:** [eldamero.com](https://eldamero.com)

> **Note:** All content is in Spanish, targeting Spanish-speaking Masonic students and practitioners.

---

## 🎯 What is El Damero?

A publication system for "planchas" (Masonic philosophical studies) based on Aldo Lavagnini's *Manual del Maestro*. Each article bridges hermetic symbols with real-world applications in work, relationships, and personal development.

**Philosophy:** Practice over theory. No unnecessary speculation.

---

## 🛠️ Tech Stack

- **[Astro 4.0](https://astro.build)** - Static Site Generation
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **Content Collections** - Schema validation
- **CSS** - Pure CSS (no frameworks)
- **View Transitions API** - Smooth navigation

---

## ⚡ Key Features

- 🔍 **Live search** + filtering by Masonic degree
- 🏷️ **Complete tagging system** with dynamic tag pages
- 📄 **Client-side PDF export** (jsPDF)
- 📖 **Interactive Masonic glossary** with search
- 🚀 **Advanced SEO** (Schema.org, sitemap, Open Graph)
- 💯 **Perfect Lighthouse scores** (100/100 all categories)

---

## 📂 Project Structure
```
src/
├── components/       # Reusable UI (Header, SearchBar, FilterBar...)
├── content/planchas/ # 33+ articles in Markdown
├── layouts/          # BaseLayout with SEO optimization
├── pages/            # Routes (index, glosario, tags, [slug])
└── styles/           # Global CSS variables
```

---

## 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/luifer-villalba/eldamero.git
cd eldamero

# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Portfolio Highlights

| Feature | Implementation |
|---------|---------------|
| **Architecture** | Content Collections + TypeScript for scalability |
| **SEO** | Schema.org markup, Open Graph, auto-generated sitemap |
| **Performance** | SSG + pure CSS = <100KB bundle size |
| **UX** | Live search, PDF export, Web Share API integration |
| **Metrics** | Lighthouse 100/100 (Performance, Accessibility, SEO, Best Practices) |

---

## 🎨 Design System

- **Dark theme** with Masonic palette (gold #c9a961 on black #0a0a0a)
- **Typography:** Cinzel (headers) + Crimson Text (body)
- **Checkerboard pattern** subtle background
- **Responsive design** (mobile-first approach)

---

## 📝 Content Schema
```typescript
{
  title: string;      // Article title
  date: Date;         // Publication date
  grado: string;      // Apprentice | Fellowcraft | Master Mason
  tema: string;       // Main topic
  simbolo?: string;   // Symbols covered
  autor: string;      // Author initials
  orden: number;      // Reading order (1-33+)
  tags: string[];     // Tags for filtering
}
```

---

## 🌟 Future Roadmap

- [ ] Progressive Web App (PWA)
- [ ] Reading progress tracking
- [ ] Personal notes per article
- [ ] Multi-language support (English)

---

## 👤 Author

**Luis Fernando Villalba**  
Full Stack Developer • Masonic Scholar  
📍 Asunción, Paraguay

[![Website](https://img.shields.io/badge/Website-eldamero.com-c9a961?style=flat)](https://eldamero.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-luifer--villalba-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/luifer-villalba)
[![GitHub](https://img.shields.io/badge/GitHub-@luifer--villalba-181717?style=flat&logo=github)](https://github.com/luifer-villalba)

---

## 📜 License

Code is MIT licensed. Content copyright © Luis Fernando Villalba.

---

<div align="center">

**Building with geometry and consciousness**

⬜⬛⬜⬛⬜⬛⬜

</div>