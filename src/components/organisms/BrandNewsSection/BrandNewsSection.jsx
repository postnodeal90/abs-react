import BrandNewsCard from '@molecules/BrandNewsCard';
import Heading from '@atoms/Heading';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './BrandNewsSection.css';

export default function BrandNewsSection({ stories }) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  if (!stories || stories.length === 0) return null;

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkScroll();
    }, 100);
    
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [stories]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 250; // Updated for smaller card width
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    checkScroll();
  };

  return (
    <section className="brand-news-section">
      <div className="brand-news-section__header">
        <div className="brand-news-section__title-wrapper">
          <div className="brand-news-section__vertical-divider"></div>
          <Heading level={2} className="brand-news-section__title">
            Brand News
          </Heading>
          <Link to="/brand-news" className="brand-news-section__view-more">
            View More <span className="brand-news-section__arrow">›</span>
          </Link>
        </div>
      </div>
      
      <div className="brand-news-section__carousel">
        {showLeftArrow && (
          <button 
            className="brand-news-section__nav brand-news-section__nav--left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}
        
        <div 
          className="brand-news-section__grid" 
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {stories.map((story) => (
            <BrandNewsCard
              key={story.id}
              title={story.title}
              category={story.category}
              image={story.image}
              link={story.link}
              sponsor={story.sponsor}
            />
          ))}
        </div>
        
        {showRightArrow && (
          <button 
            className="brand-news-section__nav brand-news-section__nav--right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}
