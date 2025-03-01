import React from 'react';

function UserDashboard({ user }) {
  if (!user) return <p>No user data available</p>;

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Welcome, {user.name}</h2>
      <p>Your upcoming events:</p>
      <ul>
        {user.events && user.events.length > 0 ? (
          user.events.map((event) => <li key={event.id}>{event.title}</li>)
        ) : (
          <p>No upcoming events</p>
        )}
      </ul>
    </div>
  );
}

export default UserDashboard;
