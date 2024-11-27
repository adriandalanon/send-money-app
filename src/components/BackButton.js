import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/BackButton.css';

const BackButton = ({ to }) => {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate(to)}>
            ← Back
        </button>
    );
};

export default BackButton;
