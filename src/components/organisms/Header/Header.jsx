import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1>Logo</h1>
        </Link>
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
        </nav>
      </div>
    </header>
  );
}
