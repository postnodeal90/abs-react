import NewsGrid from '@organisms/NewsGrid';
import SubStoriesGrid from '@organisms/SubStoriesGrid';
import BrandNewsSection from '@organisms/BrandNewsSection';
import topStoryData from '../../data/topStoryData.json';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* News Grid: Top Story (left) + Article Headlines (right 2x4 grid) */}
      <section className="home-page__news">
        <NewsGrid
          topStory={topStoryData.topStory}
          articles={topStoryData.articles}
        />
      </section>

      {/* Sub Stories Grid: 1x4 row with image, category, headline */}
      <section className="home-page__sub-stories">
        <SubStoriesGrid stories={topStoryData.subStories} />
      </section>

      {/* Brand News Section: Horizontal cards with sponsor */}
      <section className="home-page__brand-news">
        <BrandNewsSection stories={topStoryData.brandNews} />
      </section>
    </div>
  );
}
