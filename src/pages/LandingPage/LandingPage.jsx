import { getFeaturedProducts } from '../../data/products';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import Button from '../../components/Button/Button';
import './LandingPage.css';

function LandingPage() {
    const featured = getFeaturedProducts();

    return (
        <main>
            <section className="hero">
                <div className="hero-bg">
                    <img
                        className="hero-bg-image"
                        src="/images/hero.svg"
                        alt="Maison Nocturne atmospheric background"
                    />
                    <div className="hero-overlay" />
                </div>
                <div className="hero-content">
                    <span className="hero-label">Maison Nocturne</span>
                    <h1 className="hero-title">Where Darkness Meets Desire</h1>
                    <p className="hero-tagline">Fragrances for the hours between dusk and dawn</p>
                    <Button to="/collection" variant="primary" size="lg">Explore the Collection</Button>
                </div>
            </section>

            <section className="brand-intro section">
                <div className="container">
                    <div className="brand-intro-inner">
                        <span className="brand-intro-label">Our Philosophy</span>
                        <p className="brand-intro-text">
                            Born in the dimly lit ateliers of Grasse, Maison Nocturne crafts fragrances for those who find beauty in the hours between dusk and dawn. Each composition is a meditation on contrast — warmth against coolness, light against shadow, the familiar against the unknown.
                        </p>
                        <div className="brand-intro-divider" />
                    </div>
                </div>
            </section>

            <section className="featured-section section">
                <div className="container">
                    <div className="featured-header">
                        <span className="featured-label">Curated Selection</span>
                        <h2 className="featured-title">Signature Compositions</h2>
                    </div>
                    <div className="featured-list">
                        {featured.map(product => (
                            <FeaturedCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;
