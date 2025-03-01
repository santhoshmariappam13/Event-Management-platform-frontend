import React, { createContext, useState, useEffect } from 'react';
import { login, logout as logoutService } from '../services/auth'; 
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const loginUser = async (userData) => {
    try {
      const user = await login(userData);  
      localStorage.setItem('user', JSON.stringify(user)); 
      setUser(user);  
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Logout function
  const logoutUser = () => {
    logoutService();  
    setUser(null);     
  };

  return (
    <AuthContext.Provider value={{ user, login: loginUser, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
