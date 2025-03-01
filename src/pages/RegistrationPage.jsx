// src/pages/RegistrationPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation in React Router v7

function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Hook to navigate after successful registration

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email };
    // Assuming registration success
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/dashboard');  // Navigate to user dashboard after registration
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Registration Page</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
