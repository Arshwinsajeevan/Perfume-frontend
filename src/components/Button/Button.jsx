import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, to, variant = 'primary', size = '', onClick, type = 'button' }) {
    const className = `btn btn-${variant} ${size ? `btn-${size}` : ''}`.trim();

    if (to) {
        return <Link to={to} className={className}>{children}</Link>;
    }

    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
