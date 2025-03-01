// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import { login, logout as logoutService } from '../services/auth'; // Import login and logout from auth.js

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage if available
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function
  const loginUser = async (userData) => {
    try {
      const user = await login(userData);  // Call the login function from auth.js
      localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
      setUser(user);  // Update context state
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Logout function
  const logoutUser = () => {
    logoutService();  // Call the logout function from auth.js
    setUser(null);     // Reset user state
  };

  return (
    <AuthContext.Provider value={{ user, login: loginUser, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
