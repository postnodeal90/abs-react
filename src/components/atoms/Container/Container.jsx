import './Container.css';

export default function Container({ 
  children, 
  maxWidth = 'xl',
  padding = true,
  className = ''
}) {
  return (
    <div className={`container container--${maxWidth} ${padding ? 'container--padded' : ''} ${className}`}>
      {children}
    </div>
  );
}
