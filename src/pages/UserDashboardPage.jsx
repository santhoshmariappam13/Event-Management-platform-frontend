// src/pages/UserDashboardPage.jsx

import React, { useContext } from 'react';
import UserDashboard from '../components/UserDashboard';
import { AuthContext } from '../context/AuthContext';

function UserDashboardPage() {
  const { user } = useContext(AuthContext);  // Fetch user from context

  if (!user) {
    return <p>Loading...</p>;  // Handle if user is not yet loaded
  }

  return (
    <div className="p-6">
      <UserDashboard user={user} />
    </div>
  );
}

export default UserDashboardPage;
