import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import useAuth from './hooks/useAuth';
import AdminDashboardPage from './pages/AdminDashboardPage';
import EventListingsPage from './pages/EventListingPage';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage';
import TicketSalesPage from './pages/TicketSalesPage';
import UserDashboardPage from './pages/UserDashboardPage';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<EventListingsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<UserDashboardPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/event/:eventId" element={<TicketSalesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
    </AuthProvider>
  );
}

export default App;
