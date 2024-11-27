import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './styling/TransactionsScreen.css'; // Ensure the CSS file is imported
import Header from './Header';

const TransactionsScreen = () => {
    const { getTransactions, user } = useContext(AuthContext);
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getTransactions().then((transactions) => {
            setTransactions(transactions)
        });
    }, [getTransactions]);

    return (
        <div className="transactions-screen">
            <Header user={user} />
            <h1>Transaction History</h1>
            {transactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <table className="transactions-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((txn) => (
                            <tr key={txn.id}>
                                <td>{txn.id}</td>
                                <td>{txn.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TransactionsScreen;
