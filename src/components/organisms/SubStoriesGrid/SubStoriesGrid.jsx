import SubStoryCard from '@molecules/SubStoryCard';
import './SubStoriesGrid.css';

export default function SubStoriesGrid({ stories }) {
  if (!stories || stories.length === 0) return null;

  return (
    <section className="sub-stories-grid">
      {stories.map((story) => (
        <SubStoryCard
          key={story.id}
          title={story.title}
          category={story.category}
          image={story.image}
          link={story.link}
        />
      ))}
    </section>
  );
}
