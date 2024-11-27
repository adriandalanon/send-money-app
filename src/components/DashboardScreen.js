import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Header from './Header';

const DashboardScreen = () => {
    const { walletBalance, user } = useContext(AuthContext);
    const [showBalance, setShowBalance] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="send-money-screen">
            <Header user={user} disableBack={true} />
            <div className="centered-container">
                <div className="form-container">
                    <h1>Dashboard</h1>
                    <p>
                        Wallet Balance: {showBalance ? walletBalance.toFixed(2) : '******'}
                        <button onClick={() => setShowBalance(!showBalance)}>
                            {showBalance ? 'Hide' : 'Show'}
                        </button>
                    </p>
                    <button onClick={() => navigate('/send-money')}>Send Money</button>
                    <button onClick={() => navigate('/transactions')}>View Transactions</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardScreen;
