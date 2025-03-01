import React from 'react';

function AdminDashboard() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Admin Dashboard</h2>
      <button className="py-2 px-4 bg-blue-500 text-white rounded mb-2">Approve Event</button>
      <button className="py-2 px-4 bg-red-500 text-white rounded">Reject Event</button>
    </div>
  );
}

export default AdminDashboard;
