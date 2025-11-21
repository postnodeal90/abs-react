import TopStory from '@organisms/TopStory';
import ArticleCard from '@molecules/ArticleCard';
import './NewsGrid.css';

export default function NewsGrid({ topStory, articles = [] }) {
  // Display up to 8 articles in the grid (2x4)
  const gridArticles = articles.slice(0, 8);

  return (
    <div className="news-grid">
      {/* Left Half - Top Story */}
      <div className="news-grid__hero">
        {topStory && (
          <TopStory
            title={topStory.title}
            category={topStory.category}
            description={topStory.description}
            image={topStory.image}
            link={topStory.link}
            priority={true}
          />
        )}
      </div>

      {/* Right Half - Article Headlines in 2x4 Grid */}
      <div className="news-grid__articles">
        {gridArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            category={article.category}
            image={article.image}
            link={article.link}
            publishedAt={article.publishedAt}
            size="small"
          />
        ))}
      </div>
    </div>
  );
}
