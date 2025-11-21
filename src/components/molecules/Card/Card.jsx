import Text from '@atoms/Text';
import './Card.css';

export default function Card({ title, children, footer }) {
  return (
    <div className="card">
      {title && (
        <div className="card__header">
          <Text variant="h3">{title}</Text>
        </div>
      )}
      <div className="card__body">
        {children}
      </div>
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
}
