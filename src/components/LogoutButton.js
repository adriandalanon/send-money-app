import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user authentication (e.g., token or session storage)
        localStorage.removeItem('user'); // Assuming user info is stored in localStorage
        navigate('/'); // Navigate back to the Login screen
    };

    return (
        <button
            onClick={handleLogout}
            style={{
                margin: '10px',
                padding: '8px 16px',
                backgroundColor: '#d9534f',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
            }}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
