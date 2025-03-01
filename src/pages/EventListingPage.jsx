// src/pages/EventListingPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from '../components/EventList';
import { getEvents } from '../services/api';  // Ensure this file exists and is set up

function EventListingsPage() {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    date: '',
    category: '',
    priceRange: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getEvents(filters);
    setEvents(response.data);
  };

  const handleNavigateToTicketSales = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-white">Event Listings</h1>
      <form onSubmit={handleSubmit} className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Category"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Price Range"
          value={filters.priceRange}
          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="p-4 bg-purple-600 text-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
            <p className="mb-4">{event.description}</p>
            <button
              onClick={() => handleNavigateToTicketSales(event.id)}
              className="p-3 bg-blue-600 text-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 transition duration-300"
            >
              Go to Ticket Sales
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventListingsPage;