import React, { useContext } from 'react';
import UserDashboard from '../components/UserDashboard';
import { AuthContext } from '../context/AuthContext';

function UserDashboardPage() {
  const { user } = useContext(AuthContext);  
  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="p-6">
      <UserDashboard user={user} />
    </div>
  );
}

export default UserDashboardPage;
