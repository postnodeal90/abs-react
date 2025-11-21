import BrandNewsCard from '@molecules/BrandNewsCard';
import Heading from '@atoms/Heading';
import topStoryData from '../../data/topStoryData.json';
import './BrandNewsPage.css';

export default function BrandNewsPage() {
  return (
    <div className="brand-news-page">
      <div className="brand-news-page__header">
        <div className="brand-news-page__title-wrapper">
          <div className="brand-news-page__divider"></div>
          <Heading level={1} className="brand-news-page__title">
            Brand News
          </Heading>
        </div>
      </div>

      <div className="brand-news-page__grid">
        {topStoryData.brandNews.map((story) => (
          <BrandNewsCard
            key={story.id}
            image={story.image}
            category={story.category}
            title={story.title}
            sponsor={story.sponsor}
            link={story.link}
          />
        ))}
      </div>
    </div>
  );
}
