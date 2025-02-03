import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const [isTokenValid, setIsTokenValid] = useState(null); // `null` indicates loading state
    const navigate = useNavigate();

    const validateToken = async () => {
        try {
            await axios.get('http://localhost:5000/api/auth/verify-token', {
                withCredentials: true, // Send cookies with the request
            });
            setIsTokenValid(true);
        } catch (error) {
            console.error('Token validation failed:', error.response?.data || error.message);
            setIsTokenValid(false);
        }
    };

    useEffect(() => {
        validateToken();
    }, []);

    if (isTokenValid === null) {
        // Optionally display a loading indicator
        return <div>Loading...</div>;
    }

    if (!isTokenValid) {
        // Redirect to login if token is invalid
        // navigate('/login');
        window.location.href='http://localhost:3000/login'
        return null; // Prevent further rendering
    }

    // Render children if the token is valid
    return children;
};

export default ProtectedRoute;
