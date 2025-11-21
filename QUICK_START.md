# Top Story Component - Quick Start Guide

## ✅ What Was Created

### 1. **Design Tokens (Identities)** - `src/styles/tokens.css`
   - Typography system (fonts, sizes, weights)
   - Color palette (category colors, neutrals)
   - Spacing scale (4px to 64px)
   - Shadow system
   - Responsive breakpoints

### 2. **Atomic Elements** - `src/components/atoms/`
   - **Image** - Optimized image component with priority loading
   - **CategoryTag** - Color-coded category labels
   - **Heading** - Responsive heading component
   - **Container** - Layout wrapper with responsive padding

### 3. **Top Story Organism** - `src/components/organisms/TopStory/`
   - Complete hero section component
   - Fully responsive (mobile, tablet, desktop)
   - Interactive hover effects
   - LCP optimized for performance

### 4. **Mock Data** - `src/data/topStoryData.json`
   - Sample news stories with different categories
   - Ready-to-use data structure

### 5. **Integration** - `src/pages/HomePage/HomePage.jsx`
   - Component integrated into HomePage
   - Live example with real data

## 🚀 Component Features

✅ **Responsive Design**
- Mobile: 400px height, 28px title
- Tablet: 500px height, 36px title
- Desktop: 600px height, 48px title

✅ **Dynamic Content**
- Title (required)
- Category label (optional)
- Description (optional, hidden on mobile)
- Background image (required)
- Link (optional)

✅ **Performance Optimized**
- LCP priority loading
- Hardware-accelerated animations
- Lazy loading support

✅ **Accessibility**
- Semantic HTML
- Keyboard navigation
- Screen reader friendly
- Respects reduced motion preferences

## 📋 Usage Examples

### Basic Usage
```jsx
import TopStory from '@organisms/TopStory';

<TopStory
  title="Breaking News Title"
  category="Nation"
  image={{
    src: "image-url.jpg",
    alt: "Description",
    width: 1200,
    height: 600
  }}
  link="/article-link"
/>
```

### With JSON Data
```jsx
import topStoryData from '../../data/topStoryData.json';

<TopStory
  title={topStoryData.topStory.title}
  category={topStoryData.topStory.category}
  description={topStoryData.topStory.description}
  image={topStoryData.topStory.image}
  link={topStoryData.topStory.link}
  priority={true}
/>
```

### Category Rotation Example
```jsx
// Cycle through different categories
const categories = ['Nation', 'Entertainment', 'Sports', 'Business', 'Lifestyle'];

{topStoryData.alternateStories.map((story) => (
  <TopStory
    key={story.id}
    title={story.title}
    category={story.category}
    description={story.description}
    image={story.image}
    link={story.link}
    priority={false}
  />
))}
```

## 🎨 Available Categories

Each category has a unique color:
- **Nation** - Blue
- **Entertainment** - Red
- **Sports** - Green
- **Business** - Gold
- **Lifestyle** - Purple

## 📱 Responsive Behavior

| Breakpoint | Height | Title Size | Description |
|------------|--------|------------|-------------|
| Mobile (<768px) | 400px | 28px | Hidden |
| Tablet (768-1023px) | 500px | 36px | Visible |
| Desktop (≥1024px) | 600px | 48px | Visible |

## 🛠 Customization

### Change Hero Dimensions
Edit `src/styles/tokens.css`:
```css
--hero-height-mobile: 400px;   /* Your custom height */
--hero-height-tablet: 500px;   /* Your custom height */
--hero-height-desktop: 600px;  /* Your custom height */
```

### Change Category Colors
Edit `src/styles/tokens.css`:
```css
--color-category-nation: #1e40af;      /* Your color */
--color-category-entertainment: #dc2626; /* Your color */
```

### Adjust Typography
Edit `src/styles/tokens.css`:
```css
--font-size-hero-title-mobile: 1.75rem;
--font-size-hero-title-tablet: 2.25rem;
--font-size-hero-title-desktop: 3rem;
```

## 🔧 Development

The dev server is running on **http://localhost:5175** (or check your terminal for the actual port).

Navigate to the home page to see the Top Story component in action!

## 📁 File Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── CategoryTag/    # Category label component
│   │   ├── Container/      # Layout wrapper
│   │   ├── Heading/        # Heading component
│   │   └── Image/          # Optimized image
│   └── organisms/
│       └── TopStory/       # Main hero component
├── data/
│   └── topStoryData.json   # Sample data
├── pages/
│   └── HomePage/           # Integration example
└── styles/
    ├── tokens.css          # Design system tokens
    └── global.css          # Global styles
```

## 🎯 Next Steps

1. **Customize the data** - Edit `src/data/topStoryData.json`
2. **Adjust styling** - Modify tokens in `src/styles/tokens.css`
3. **Add real images** - Replace Unsplash URLs with your images
4. **Create variations** - Use different categories and styles
5. **Add more features** - Video backgrounds, carousels, etc.

## 💡 Tips

- Use high-quality images (1200x600px recommended)
- Optimize images before use (WebP format preferred)
- Keep titles concise for better mobile display
- Test on different screen sizes
- Ensure good contrast for text readability

## 📚 Documentation

See `TOP_STORY_COMPONENT.md` for detailed documentation.
