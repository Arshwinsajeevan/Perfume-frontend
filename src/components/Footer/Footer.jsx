import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-brand">Maison Nocturne</p>
                <p className="footer-tagline">Where Darkness Meets Desire</p>
                <p className="footer-copy">&copy; {new Date().getFullYear()} Maison Nocturne. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
