import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from './Header';
import './styling/SendMoneyScreen.css'; // Import the CSS file

const SendMoneyScreen = () => {
    const { addTransaction, user, walletBalance } = useContext(AuthContext);
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        if (!isNaN(amount) && amount > 0 && walletBalance > amount) {
            addTransaction(parseFloat(amount));
            setMessage('Transaction Successful!');
        } else {
            setMessage('Invalid amount!');
        }
    };

    return (
        <div className="send-money-screen">
            <Header user={user} />
            <div className="centered-container">
                <div className="form-container">
                    <h1>Send Money</h1>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Amount"
                    />
                    <button onClick={handleSubmit}>Submit</button>
                    {message && <p className="error-message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default SendMoneyScreen;
