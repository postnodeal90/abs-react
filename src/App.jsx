import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@templates/MainLayout';
import HomePage from '@pages/HomePage';
import ContactPage from '@pages/ContactPage';
import BrandNewsPage from '@pages/BrandNewsPage';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/brand-news" element={<BrandNewsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
