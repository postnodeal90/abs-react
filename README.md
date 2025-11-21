# ABS React News Website

A modern, responsive news website built with React and Vite, following the Atomic Design methodology. Inspired by ABS-CBN's news platform, this project showcases best practices in component architecture and responsive web design.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Top Story Hero Section** - Featured article with large image and headline
- **Article Grid Layout** - 2x4 grid displaying article headlines with categories
- **Sub Stories Section** - 4-column grid of secondary stories with images
- **Brand News Carousel** - Horizontal scrolling sponsored content with navigation arrows
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Atomic Design Architecture** - Scalable and maintainable component structure
- **React Router** - Client-side routing for seamless navigation
- **Modern CSS** - Custom properties, Grid, Flexbox, and responsive design patterns

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/abs-react.git
   cd abs-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
abs-react/
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks
│   │   │   ├── Button/
│   │   │   ├── CategoryTag/
│   │   │   ├── Container/
│   │   │   ├── Heading/
│   │   │   ├── Image/
│   │   │   ├── Input/
│   │   │   ├── Label/
│   │   │   └── Text/
│   │   ├── molecules/      # Simple component groups
│   │   │   ├── ArticleCard/
│   │   │   ├── BrandNewsCard/
│   │   │   ├── Card/
│   │   │   ├── FormField/
│   │   │   ├── SearchBar/
│   │   │   └── SubStoryCard/
│   │   ├── organisms/      # Complex component sections
│   │   │   ├── BrandNewsSection/
│   │   │   ├── ContactForm/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── NewsGrid/
│   │   │   ├── SubStoriesGrid/
│   │   │   └── TopStory/
│   │   └── templates/      # Page layouts
│   │       └── MainLayout/
│   ├── pages/              # Complete pages
│   │   ├── BrandNewsPage/
│   │   ├── ContactPage/
│   │   └── HomePage/
│   ├── data/               # Static data
│   │   └── topStoryData.json
│   ├── styles/             # Global styles
│   │   ├── tokens.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Atomic Design Methodology

This project follows the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) pattern:

### **Atoms** 🔹
Basic building blocks (buttons, inputs, headings, images)

### **Molecules** 🔸
Simple component groups (article cards, form fields, search bars)

### **Organisms** 🔶
Complex sections (header, footer, news grids, carousels)

### **Templates** 🔷
Page layouts and structure

### **Pages** 🔵
Complete pages with real content

## 🛠️ Tech Stack

- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **React Router 6.20.0** - Client-side routing
- **CSS3** - Styling with custom properties, Grid, and Flexbox
- **ESLint** - Code linting and quality

## 🎨 Key Components

### HomePage
Main landing page featuring:
- News Grid (Top Story + Article Headlines)
- Sub Stories Grid
- Brand News Section

### BrandNewsPage
Dedicated page displaying all brand news items in a 2x4 responsive grid

### NewsGrid
50/50 split layout with Top Story on the left and article headlines in a 2x4 grid on the right

### BrandNewsSection
Horizontal scrolling carousel with:
- Navigation arrows
- Sponsored content cards
- Responsive design

## 🔧 Path Aliases

The project uses convenient path aliases for clean imports:

```javascript
import Button from '@atoms/Button';
import ArticleCard from '@molecules/ArticleCard';
import Header from '@organisms/Header';
import MainLayout from '@templates/MainLayout';
import HomePage from '@pages/HomePage';
```

Configured aliases:
- `@` → `/src`
- `@atoms` → `/src/components/atoms`
- `@molecules` → `/src/components/molecules`
- `@organisms` → `/src/components/organisms`
- `@templates` → `/src/components/templates`
- `@pages` → `/src/pages`
- `@utils` → `/src/utils`
- `@styles` → `/src/styles`

## 🌐 Available Routes

- `/` - Home page
- `/contact` - Contact page
- `/brand-news` - All brand news items

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [ABS-CBN News](https://www.abs-cbn.com/)
- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Atomic Design by [Brad Frost](https://bradfrost.com/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using React and Atomic Design
