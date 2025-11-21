import './Image.css';

export default function Image({ 
  src, 
  alt, 
  width,
  height,
  loading = 'lazy',
  priority = false,
  objectFit = 'cover',
  className = ''
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      fetchpriority={priority ? 'high' : 'auto'}
      className={`image image--${objectFit} ${className}`}
    />
  );
}
