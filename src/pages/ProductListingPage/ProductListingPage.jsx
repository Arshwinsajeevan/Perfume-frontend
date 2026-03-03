import { useState, useMemo } from 'react';
import { products, categories } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductListingPage.css';

function ProductListingPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('default');

    const filteredProducts = useMemo(() => {
        let result = activeCategory === 'All'
            ? [...products]
            : products.filter(p => p.category === activeCategory);

        if (sortOrder === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [activeCategory, sortOrder]);

    return (
        <main className="listing-page">
            <div className="container">
                <header className="listing-header">
                    <span className="listing-label">Maison Nocturne</span>
                    <h1 className="listing-title">The Collection</h1>
                </header>

                <div className="listing-controls">
                    <div className="filter-bar" role="group" aria-label="Filter by category">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <select
                        className="sort-select"
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                        aria-label="Sort by price"
                    >
                        <option value="default">Sort by</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>

                <div className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="listing-empty">No fragrances found in this category.</p>
                    )}
                </div>
            </div>
        </main>
    );
}

export default ProductListingPage;
