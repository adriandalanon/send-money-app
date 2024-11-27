import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [walletBalance, setWalletBalance] = useState(500);
    const [transactions, setTransactions] = useState([]);


    // Fetch transactions from json-server on initial render
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:3001/transactions');
                if (response.ok) {
                    const data = await response.json();
                    setTransactions(data); // Set the transactions after fetching from the API
                } else {
                    console.error('Failed to fetch transactions');
                }
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions(); // Call the function to fetch data
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const login = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setUser(username);
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    const addTransaction = (amount) => {
        const lastTransactionId = transactions.length > 0 ? transactions[transactions.length - 1].id : 0;
        const newTransaction = {
            id: lastTransactionId + 1, // Increment ID from last transaction
            amount: amount,
        };
        const currentWalletBalance = walletBalance - amount;
        setWalletBalance(currentWalletBalance)
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

        // Optionally, you can persist the new transaction to the API
        fetch('http://localhost:3001/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTransaction),
        })
            .then((response) => {
                if (!response.ok) {
                    console.error('Failed to add transaction to API');
                }
            })
            .catch((error) => {
                console.error('Error sending transaction to API:', error);
            });
    };

    const getTransactions = async () => {
        try {
            const response = await fetch('http://localhost:3001/transactions'); // No user filter
            if (!response.ok) {
                throw new Error('Failed to fetch transactions');
            }
            const transactions = await response.json();
            return transactions;
        } catch (error) {
            console.error('Error fetching transactions:', error);
            return [];
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn,
                walletBalance,
                transactions,
                login,
                logout,
                addTransaction,
                getTransactions,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
