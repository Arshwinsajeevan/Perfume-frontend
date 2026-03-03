import Button from '../Button/Button';
import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <article className="product-card">
            <div className="product-card-image-wrapper">
                <img
                    className="product-card-image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />
            </div>
            <div className="product-card-body">
                <span className="product-card-category">{product.category}</span>
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-description">{product.shortDescription}</p>
                <div className="product-card-footer">
                    <span className="product-card-price">${product.price}</span>
                    <Button to={`/collection/${product.id}`} variant="outline" size="sm">View Details</Button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;
