import Button from '../Button/Button';
import './NotFound.css';

function NotFound({ title = 'Lost in the Night', message = 'The page you seek has dissolved into shadow. Perhaps the collection holds what you desire.' }) {
    return (
        <div className="not-found">
            <span className="not-found-label">Not Found</span>
            <h1 className="not-found-title">{title}</h1>
            <p className="not-found-message">{message}</p>
            <Button to="/collection" variant="outline">Browse Collection</Button>
        </div>
    );
}

export default NotFound;
