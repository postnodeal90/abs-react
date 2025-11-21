# Top Story Component Documentation

## Overview
The `TopStory` component is a hero section component that replicates news website hero layouts (similar to ABS-CBN). Built following Atomic Design principles, it's fully responsive and optimized for performance.

## Atomic Design Structure

### 🎨 Identities (Design Tokens)
Located in `src/styles/tokens.css`

- **Typography**: Font families, sizes, weights, line heights
- **Colors**: Category colors, neutral palette, semantic colors
- **Spacing**: Consistent spacing scale (xs to 3xl)
- **Shadows**: Shadow system for depth and elevation
- **Transitions**: Animation timing tokens

### ⚛️ Atoms (Elements)
Basic building blocks used in TopStory:

1. **Image** (`src/components/atoms/Image/`)
   - LCP optimized with priority loading
   - Supports lazy loading
   - Flexible object-fit options

2. **CategoryTag** (`src/components/atoms/CategoryTag/`)
   - Color-coded by category (Nation, Entertainment, Sports, etc.)
   - Size variants (small, medium, large)
   - Style variants (solid, outline)

3. **Heading** (`src/components/atoms/Heading/`)
   - Semantic HTML heading levels
   - Responsive typography
   - Custom sizes and weights

4. **Container** (`src/components/atoms/Container/`)
   - Responsive max-widths
   - Consistent padding
   - Multiple size options

### 🧬 Organism (Component)
**TopStory** (`src/components/organisms/TopStory/`)

Combines all atoms to create the complete hero section.

## Component API

### Props

```jsx
<TopStory
  title={string}           // Required - Main headline
  category={string}        // Optional - Category label (Nation, Entertainment, etc.)
  image={object}           // Required - Image object
  link={string}           // Optional - Article URL
  description={string}    // Optional - Article description/summary
  priority={boolean}      // Optional - LCP optimization flag (default: true)
/>
```

### Image Object Structure

```javascript
{
  src: string,      // Image URL
  alt: string,      // Alt text for accessibility
  width: number,    // Image width (default: 1200)
  height: number    // Image height (default: 600)
}
```

## Usage Example

```jsx
import TopStory from '@organisms/TopStory';

function NewsPage() {
  const story = {
    title: "Breaking: Historic Peace Agreement Signed",
    category: "Nation",
    description: "Leaders gathered to sign landmark agreement...",
    image: {
      src: "https://example.com/image.jpg",
      alt: "Government officials signing agreement",
      width: 1200,
      height: 600
    },
    link: "/news/peace-agreement"
  };

  return (
    <TopStory
      title={story.title}
      category={story.category}
      description={story.description}
      image={story.image}
      link={story.link}
      priority={true}
    />
  );
}
```

## Responsive Behavior

### Mobile (< 768px)
- Height: 400px
- Title: 28px
- Description: Hidden
- Padding: 24px

### Tablet (768px - 1023px)
- Height: 500px
- Title: 36px
- Description: Visible (16px)
- Padding: 32px

### Desktop (≥ 1024px)
- Height: 600px
- Title: 48px
- Description: Visible (18px)
- Padding: 48px

## Features

✅ **Fully Responsive** - Adapts to mobile, tablet, and desktop
✅ **LCP Optimized** - Priority loading for hero images
✅ **Accessible** - Semantic HTML, proper focus states, ARIA attributes
✅ **Interactive** - Hover effects with smooth transitions
✅ **Category System** - Color-coded tags for different content types
✅ **Gradient Overlay** - Ensures text readability over images
✅ **SEO Friendly** - Proper heading hierarchy and meta information

## Supported Categories

- **Nation** - Blue (#1e40af)
- **Entertainment** - Red (#dc2626)
- **Sports** - Green (#16a34a)
- **Business** - Yellow/Gold (#ca8a04)
- **Lifestyle** - Purple (#9333ea)
- **Default** - Gray (#6b7280)

## Accessibility

- Semantic HTML5 elements (`<article>`, `<h1>`)
- Proper heading hierarchy
- Focus indicators for keyboard navigation
- Alt text support for images
- High contrast text with shadow overlays
- Respects `prefers-reduced-motion`

## Performance Optimization

- **Priority Loading**: First image loads eagerly with `fetchpriority="high"`
- **Image Optimization**: Recommended to use optimized images (WebP, AVIF)
- **Lazy Loading**: Supports lazy loading for below-fold usage
- **CSS Transitions**: Hardware-accelerated transforms
- **Reduced Motion**: Respects user preferences

## Customization

### Adjusting Hero Height
Edit tokens in `src/styles/tokens.css`:
```css
--hero-height-mobile: 400px;
--hero-height-tablet: 500px;
--hero-height-desktop: 600px;
```

### Changing Category Colors
Edit category color tokens:
```css
--color-category-nation: #1e40af;
--color-category-entertainment: #dc2626;
/* etc... */
```

### Modifying Typography
Update font size tokens:
```css
--font-size-hero-title-mobile: 1.75rem;
--font-size-hero-title-tablet: 2.25rem;
--font-size-hero-title-desktop: 3rem;
```

## Mock Data

Sample JSON data is available in `src/data/topStoryData.json`:

```json
{
  "topStory": {
    "id": 1,
    "title": "Breaking: Historic Peace Agreement Signed",
    "category": "Nation",
    "description": "Leaders from across the region...",
    "image": {
      "src": "https://images.unsplash.com/...",
      "alt": "Government officials signing agreement",
      "width": 1200,
      "height": 600
    },
    "link": "/news/historic-peace-agreement"
  }
}
```

## File Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── CategoryTag/
│   │   ├── Container/
│   │   ├── Heading/
│   │   └── Image/
│   └── organisms/
│       └── TopStory/
│           ├── TopStory.jsx
│           ├── TopStory.css
│           └── index.js
├── data/
│   └── topStoryData.json
└── styles/
    └── tokens.css
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Video background support
- [ ] Multiple image sources (srcset)
- [ ] Carousel/slideshow functionality
- [ ] Reading time estimation
- [ ] Social share buttons
- [ ] Bookmark functionality
