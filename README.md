# ◆ El Damero

> Plataforma educativa masónica: del símbolo a la práctica operativa

[![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?style=flat&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat&logo=netlify)](https://eldamero.com)

**🌐 Live:** [eldamero.com](https://eldamero.com)

---

## 🎯 Propósito

Sistema de planchas basado en "Manual del Maestro" de Aldo Lavagnini.
48 estudios progresivos para masones de grados azules.

**Filosofía:** Máximo impacto, mínimas palabras. Práctica sobre especulación.

---

## 🛠️ Stack

- **Astro 4.0** + TypeScript
- Pure CSS (zero frameworks)
- Content Collections
- Perfect Lighthouse scores
- jsPDF + Web Share API

## 📁 Estructura
```
src/
├── content/planchas/    # 48 planchas (00-47)
├── layouts/             # PlanchaLayout.astro
├── components/          # Header, TOC, etc.
└── pages/               # index, /grados, /temas
```

## ✨ Features

- 🔍 Live search
- 🎓 Filtro por grado masónico
- 📄 Export PDF client-side
- 🧭 TOC con intersection observer
- 🏷️ Sistema tags dinámico
- ✨ View Transitions

## 🚀 Dev
```bash
npm install
npm run dev          # localhost:4321
npm run build
```

## 🎨 Tema
```css
--gold: #d4af37
--dark: #1a1a1a
--deep-black: #0f0f0f
```

## 📝 Crear Plancha
```yaml
---
title: "Título"
date: 2024-XX-XX
grade: "Aprendiz|Compañero|Maestro"
number: XX
theme: "Tema"
symbols: ["Símbolo1", "Símbolo2"]
---
```

## 🎭 Audiencia

Masones con base en grados azules.
Contenido: críptico para profanos, transparente para iniciados.

---

**V∴ H∴** Leonardo da Vinci N° 152, Asunción 🇵🇾
