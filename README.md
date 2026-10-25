# Alfan Nurfaiz — Portfolio

Personal portfolio website of **Alfan Nurfaiz**, Fullstack Developer specializing in **Go** and **React**. Built with a minimalist dark theme, monospace accents, and a single emerald highlight color.

## Features

- **Single-page layout** with smooth scrolling between sections: Hero, About, Tech Stack, Projects, Experience, and Contact
- **Project filter** (all / fullstack / frontend) and a **detail modal** for each project
- **Contact form** that opens a pre-filled Gmail compose window in a new tab
- **Copy-to-clipboard** email button with toast notification
- **Responsive** navigation with a mobile menu
- **Dark theme** with custom Tailwind design tokens (colors and fonts)
- Data-driven sections: projects, experience, and tech stack are plain arrays, so they are easy to edit

## Tech Stack

| Area      | Tools                                                              |
| --------- | ------------------------------------------------------------------ |
| Framework | [React](https://react.dev/) + [Vite](https://vitejs.dev/)          |
| Styling   | [Tailwind CSS v3](https://tailwindcss.com/)                        |
| Icons     | [react-icons](https://react-icons.github.io/react-icons/)          |
| Fonts     | [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Google Fonts |

### Contact form behavior

Submitting the form opens a pre-filled Gmail compose window in a new tab (`mail.google.com/mail/?view=cm`) addressed to `EMAIL`. The visitor still has to press **Send** in Gmail. No backend is required, and no message is stored by the site.

Built by [Alfan Nurfaiz](https://github.com/alfannurfaiz9).