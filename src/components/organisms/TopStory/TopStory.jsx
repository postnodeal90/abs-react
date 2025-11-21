import { Link } from 'react-router-dom';
import Image from '@atoms/Image';
import CategoryTag from '@atoms/CategoryTag';
import Heading from '@atoms/Heading';
import './TopStory.css';

export default function TopStory({ 
  title,
  category,
  image,
  link,
  description,
  priority = true
}) {
  const content = (
    <>
      <div className="top-story__image-wrapper">
        <Image
          src={image.src}
          alt={image.alt || title}
          width={image.width || 1200}
          height={image.height || 600}
          priority={priority}
          objectFit="cover"
          className="top-story__image"
        />
        <div className="top-story__overlay"></div>
      </div>
      
      <div className="top-story__content">
        <div className="top-story__content-inner">
          {category && (
            <CategoryTag 
              category={category}
              variant="solid"
              size="medium"
            />
          )}
          
          <Heading 
            level={1} 
            size="hero"
            color="inverse"
            weight="extrabold"
            className="top-story__title"
          >
            {title}
          </Heading>
        </div>
      </div>
    </>
  );

  return (
    <article className="top-story">
      {link ? (
        <Link to={link} className="top-story__link">
          {content}
        </Link>
      ) : (
        <div className="top-story__wrapper">
          {content}
        </div>
      )}
    </article>
  );
}
