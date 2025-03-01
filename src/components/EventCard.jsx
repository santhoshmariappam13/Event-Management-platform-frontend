import React from 'react';

function EventCard({ event }) {
  if (!event) return null; // Add a guard to prevent empty prop errors

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p>{event.description}</p>
      <button className="py-2 px-4 bg-green-500 text-white rounded mt-4">
        View Event
      </button>
    </div>
  );
}

export default EventCard;
