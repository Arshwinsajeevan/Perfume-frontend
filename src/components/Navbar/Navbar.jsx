import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-brand">Maison Nocturne</Link>
                <div className="navbar-links">
                    <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link to="/collection" className={`navbar-link ${isActive('/collection') ? 'active' : ''}`}>Collection</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
