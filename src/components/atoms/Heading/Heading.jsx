import './Heading.css';

export default function Heading({ 
  level = 1, 
  children, 
  className = '',
  size,
  color = 'primary',
  weight = 'bold'
}) {
  const Tag = `h${level}`;
  const sizeClass = size ? `heading--${size}` : `heading--h${level}`;
  
  return (
    <Tag className={`heading ${sizeClass} heading--${color} heading--${weight} ${className}`}>
      {children}
    </Tag>
  );
}
