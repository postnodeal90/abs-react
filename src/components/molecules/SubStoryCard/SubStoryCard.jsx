import { Link } from 'react-router-dom';
import CategoryTag from '@atoms/CategoryTag';
import Heading from '@atoms/Heading';
import Image from '@atoms/Image';
import './SubStoryCard.css';

export default function SubStoryCard({ 
  title,
  category,
  image,
  link
}) {
  const content = (
    <>
      <div className="sub-story-card__image-wrapper">
        <Image
          src={image.src}
          alt={image.alt || title}
          width={image.width || 400}
          height={image.height || 250}
          objectFit="cover"
          className="sub-story-card__image"
        />
      </div>
      
      <div className="sub-story-card__content">
        {category && (
          <CategoryTag 
            category={category}
            variant="solid"
            size="small"
          />
        )}
        
        <Heading 
          level={3}
          className="sub-story-card__title"
          color="primary"
          weight="bold"
        >
          {title}
        </Heading>
      </div>
    </>
  );

  return (
    <article className="sub-story-card">
      {link ? (
        <Link to={link} className="sub-story-card__link">
          {content}
        </Link>
      ) : (
        <div className="sub-story-card__wrapper">
          {content}
        </div>
      )}
    </article>
  );
}
