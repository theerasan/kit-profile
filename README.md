# Prapan Wongaurwate — Profile Website

A responsive, SEO-optimized personal profile site built with **React + Vite + Tailwind CSS v4**, featuring light/dark modes and deployed via **Firebase Hosting**.

Live URL: _to be filled in after first deploy_

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Prerequisites](#prerequisites)
3. [Local Setup](#local-setup)
4. [Available Scripts](#available-scripts)
5. [Deployment (Firebase Hosting)](#deployment-firebase-hosting)
6. [Pushing to Git / GitHub](#pushing-to-git--github)
7. [Project Architecture](#project-architecture)
8. [Customizing the Content](#customizing-the-content)
9. [SEO Notes](#seo-notes)

---

## Tech Stack

| Layer       | Choice                                      |
| ----------- | ------------------------------------------- |
| Framework   | React 19 (functional components + hooks)    |
| Build tool  | Vite 8                                      |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite`)   |
| Hosting     | Firebase Hosting                            |
| Fonts       | Google Fonts (Plus Jakarta Sans, Inter)     |
| State       | Local component state — no global store     |

No TypeScript, no router, no UI library — keeps the bundle small and the code easy to read.

---

## Prerequisites

- **Node.js** ≥ 20 (developed on v25)
- **npm** ≥ 10
- **Firebase CLI** for deployment: `npm install -g firebase-tools`
- A **Firebase project** created at [console.firebase.google.com](https://console.firebase.google.com)

---

## Local Setup

```bash
# 1. Clone
git clone https://github.com/theerasan/kit-profile.git
cd kit-profile

# 2. Install dependencies
npm install

# 3. Run the dev server (HMR enabled)
npm run dev
```

The site will be available at **http://localhost:5173**.

---

## Available Scripts

| Command            | Purpose                                            |
| ------------------ | -------------------------------------------------- |
| `npm run dev`      | Start the Vite dev server with hot reload          |
| `npm run build`    | Production build → outputs to `dist/`              |
| `npm run preview`  | Serve the built `dist/` folder locally for testing |
| `npm run lint`     | Run ESLint over the codebase                       |

---

## Deployment (Firebase Hosting)

### One-time setup

```bash
# Install Firebase CLI (global)
npm install -g firebase-tools

# Login with your Google account
firebase login
```

Open `.firebaserc` and set the `default` project to your Firebase project ID:

```json
{
  "projects": {
    "default": "kit-profile"
  }
}
```

> If you've never run `firebase init` here, you don't need to — `firebase.json` and `.firebaserc` are already configured.

### Each deploy

```bash
npm run build
firebase deploy --only hosting
```

Firebase will print the live URL (e.g. `https://kit-profile.web.app`).

### What's in `firebase.json`?

- `public: "dist"` — serves the Vite production build
- SPA rewrites — every route falls back to `index.html`
- Long-cache headers on hashed assets, `no-cache` on `index.html`

---

## Pushing to Git / GitHub

```bash
# Initialize (if not already)
git init
git add .
git commit -m "Initial commit"

# Option A — using GitHub CLI
gh repo create kit-profile --public --push --source=.

# Option B — manual
git remote add origin https://github.com/<your-username>/kit-profile.git
git branch -M main
git push -u origin main
```

For subsequent updates:

```bash
git add .
git commit -m "Describe your change"
git push
```

---

## Project Architecture

```
kit-profile/
├── public/
│   └── Resume.pdf              ← downloadable resume (linked from Header & Footer)
│
├── src/
│   ├── main.jsx                ← React entry point
│   ├── App.jsx                 ← root layout + dark-mode state (localStorage + prefers-color-scheme)
│   ├── index.css               ← Tailwind v4 import + dark-mode @custom-variant
│   │
│   └── components/             ← one component per page section
│       ├── Header.jsx          ← sticky nav, dark-mode toggle, resume button, mobile menu
│       ├── Hero.jsx            ← name, title, contact chips, CTA buttons
│       ├── About.jsx           ← summary + key strengths grid
│       ├── Skills.jsx          ← skills grouped by category (data-driven)
│       ├── Experience.jsx      ← timeline of roles (data-driven)
│       ├── Projects.jsx        ← project cards (data-driven)
│       ├── Education.jsx       ← academic background
│       └── Footer.jsx          ← contact info + resume download
│
├── index.html                  ← SEO meta tags, Open Graph, JSON-LD structured data
├── vite.config.js              ← Vite + React + Tailwind plugins
├── firebase.json               ← Hosting config (rewrites, cache headers)
├── .firebaserc                 ← Firebase project ID
└── package.json
```

### Design principles

1. **Data-driven sections.** `Skills.jsx`, `Experience.jsx`, and `Projects.jsx` declare their content as plain JS arrays at the top of the file. To edit content, you don't touch JSX — just update the data.

2. **Dark mode is class-based.** Toggling adds/removes `.dark` on `<html>`. Tailwind v4's `@custom-variant dark (&:where(.dark, .dark *))` (in `src/index.css`) makes `dark:` utilities work everywhere. The state is persisted to `localStorage` and seeded from `prefers-color-scheme`.

3. **Sticky single-page layout.** Each section has an `id` (`#about`, `#skills`, …) and the nav links use anchor scrolling with `scroll-behavior: smooth`. No router needed.

4. **Tailwind utility-first.** No separate CSS module per component — styles live next to JSX. Repeated color combos are extracted into small lookup maps (e.g. `colorMap` in `Skills.jsx`).

5. **Responsive-first.** Layouts are mobile-first; `sm:` / `md:` / `lg:` breakpoints expand to multi-column grids on larger screens.

---

## Customizing the Content

| What to change            | File to edit                              |
| ------------------------- | ----------------------------------------- |
| Name, title, summary      | `src/components/Hero.jsx`                 |
| About paragraphs / strengths | `src/components/About.jsx`             |
| Skills (categories & tags)| `src/components/Skills.jsx` (top array)   |
| Work experience           | `src/components/Experience.jsx` (top array) |
| Projects                  | `src/components/Projects.jsx` (top array) |
| Education                 | `src/components/Education.jsx`            |
| Contact email / phone     | `Hero.jsx` + `Footer.jsx` + `index.html` (JSON-LD) |
| Resume PDF                | Replace `public/Resume.pdf`               |
| SEO meta / page title     | `index.html`                              |
| Theme accent color        | Search/replace `cyan-` → your color       |

---

## SEO Notes

`index.html` includes:

- Descriptive **`<title>`** and **`<meta name="description">`** tuned for recruiter searches ("QA Engineer", "Bangkok", core skills).
- **`<meta name="keywords">`** mirroring the resume's skill list.
- **Open Graph** tags so links shared on Slack/LinkedIn/Facebook show a rich preview.
- A **JSON-LD `Person` schema** so Google can pick up structured data (name, job title, location, skills, alma mater) and surface it in knowledge panels.

After deploying, submit your site to [Google Search Console](https://search.google.com/search-console) to start being indexed.

---

## License

Personal portfolio — all rights reserved.
