import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collection" element={<ProductListingPage />} />
        <Route path="/collection/:id" element={<ProductDetailPage />} />
        <Route path="*" element={
          <div style={{ paddingTop: 'var(--nav-height)' }}>
            <NotFound />
          </div>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
