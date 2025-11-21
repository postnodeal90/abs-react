import Text from '@atoms/Text';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Text variant="small" color="muted" align="center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
