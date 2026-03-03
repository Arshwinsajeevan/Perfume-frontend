import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../data/products';
import NotFound from '../../components/NotFound/NotFound';
import Button from '../../components/Button/Button';
import './ProductDetailPage.css';

function ProductDetailPage() {
    const { id } = useParams();
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="detail-page">
                <NotFound
                    title="Fragrance Not Found"
                    message="This composition does not exist in our collection. Perhaps it has been retired, or it lives only in memory."
                />
            </div>
        );
    }

    const { fragranceNotes } = product;

    return (
        <main className="detail-page">
            <div className="container">
                <nav className="detail-breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="detail-breadcrumb-sep">/</span>
                    <Link to="/collection">Collection</Link>
                    <span className="detail-breadcrumb-sep">/</span>
                    <span>{product.name}</span>
                </nav>

                <div className="detail-layout">
                    <div className="detail-image-wrapper">
                        <img
                            className="detail-image"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>

                    <div className="detail-info">
                        <span className="detail-category">{product.category}</span>
                        <h1 className="detail-name">{product.name}</h1>
                        <span className="detail-price">${product.price}</span>
                        <p className="detail-description">{product.fullDescription}</p>

                        <div className="detail-divider" />

                        <div className="detail-notes">
                            <h2 className="detail-notes-title">Fragrance Notes</h2>
                            <div className="note-group">
                                <span className="note-label">Top Notes</span>
                                <span className="note-value">{fragranceNotes.top.join(' · ')}</span>
                            </div>
                            <div className="note-group">
                                <span className="note-label">Heart Notes</span>
                                <span className="note-value">{fragranceNotes.heart.join(' · ')}</span>
                            </div>
                            <div className="note-group">
                                <span className="note-label">Base Notes</span>
                                <span className="note-value">{fragranceNotes.base.join(' · ')}</span>
                            </div>
                        </div>

                        <div className="detail-divider" />

                        <div className="detail-specs">
                            <div className="spec-item">
                                <span className="spec-label">Size</span>
                                <span className="spec-value">{product.size}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Longevity</span>
                                <span className="spec-value">{product.longevity}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Occasion</span>
                                <span className="spec-value">{product.occasion}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Category</span>
                                <span className="spec-value">{product.category}</span>
                            </div>
                        </div>

                        <div className="detail-back">
                            <Button to="/collection" variant="outline">Back to Collection</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetailPage;
