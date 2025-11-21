import { Link } from 'react-router-dom';
import CategoryTag from '@atoms/CategoryTag';
import Heading from '@atoms/Heading';
import Image from '@atoms/Image';
import Text from '@atoms/Text';
import './BrandNewsCard.css';

export default function BrandNewsCard({ 
  title,
  category,
  image,
  link,
  sponsor
}) {
  const content = (
    <>
      <div className="brand-news-card__image-wrapper">
        <Image
          src={image.src}
          alt={image.alt || title}
          width={image.width || 300}
          height={image.height || 200}
          objectFit="cover"
          className="brand-news-card__image"
        />
      </div>
      
      <div className="brand-news-card__content">
        {category && (
          <CategoryTag 
            category={category}
            variant="solid"
            size="small"
          />
        )}
        
        <Heading 
          level={3}
          className="brand-news-card__title"
          color="primary"
          weight="bold"
        >
          {title}
        </Heading>

        {sponsor && (
          <Text className="brand-news-card__sponsor" color="muted">
            Sponsored by {sponsor}
          </Text>
        )}
      </div>
    </>
  );

  return (
    <article className="brand-news-card">
      {link ? (
        <Link to={link} className="brand-news-card__link">
          {content}
        </Link>
      ) : (
        {content}
      )}
    </article>
  );
}
