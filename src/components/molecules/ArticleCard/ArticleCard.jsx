import { Link } from 'react-router-dom';
import CategoryTag from '@atoms/CategoryTag';
import Heading from '@atoms/Heading';
import Image from '@atoms/Image';
import './ArticleCard.css';

export default function ArticleCard({ 
  title,
  category,
  image,
  link,
  publishedAt,
  size = 'medium'
}) {
  const content = (
    <>
      <div className="article-card__content">
        {category && (
          <CategoryTag 
            category={category}
            variant="solid"
            size="small"
          />
        )}
        
        <Heading 
          level={3}
          className="article-card__title"
          color="primary"
          weight="bold"
        >
          {title}
        </Heading>
        
        <div className="article-card__separator"></div>
      </div>
    </>
  );

  return (
    <article className={`article-card article-card--${size}`}>
      {link ? (
        <Link to={link} className="article-card__link">
          {content}
        </Link>
      ) : (
        <div className="article-card__wrapper">
          {content}
        </div>
      )}
    </article>
  );
}
