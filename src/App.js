import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import SendMoneyScreen from './components/SendMoneyScreen';
import TransactionsScreen from './components/TransactionsScreen';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/send-money" element={<SendMoneyScreen />} />
        <Route path="/transactions" element={<TransactionsScreen />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
