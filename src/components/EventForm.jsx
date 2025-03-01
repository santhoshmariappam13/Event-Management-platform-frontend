import React, { useState } from 'react';

function EventForm({ onSubmit }) {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(eventDetails);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={eventDetails.title}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        name="description"
        placeholder="Event Description"
        value={eventDetails.description}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="date"
        name="date"
        value={eventDetails.date}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="time"
        name="time"
        value={eventDetails.time}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={eventDetails.location}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Ticket Price"
        value={eventDetails.price}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
        Submit Event
      </button>
    </form>
  );
}

export default EventForm;
