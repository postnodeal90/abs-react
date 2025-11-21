import './CategoryTag.css';

export default function CategoryTag({ 
  category, 
  variant = 'default',
  size = 'medium'
}) {
  const categoryClass = category ? category.toLowerCase().replace(/\s+/g, '-') : 'default';
  
  return (
    <span className={`category-tag category-tag--${categoryClass} category-tag--${variant} category-tag--${size}`}>
      {category}
    </span>
  );
}
