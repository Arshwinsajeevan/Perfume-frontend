import Button from '../Button/Button';
import './FeaturedCard.css';

function FeaturedCard({ product }) {
    return (
        <article className="featured-card">
            <div className="featured-card-image-wrapper">
                <img
                    className="featured-card-image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />
            </div>
            <div className="featured-card-content">
                <span className="featured-card-category">{product.category}</span>
                <h3 className="featured-card-name">{product.name}</h3>
                <p className="featured-card-description">{product.shortDescription}</p>
                <span className="featured-card-price">${product.price}</span>
                <div className="featured-card-actions">
                    <Button to={`/collection/${product.id}`} variant="outline">Discover</Button>
                </div>
            </div>
        </article>
    );
}

export default FeaturedCard;
