import React from 'react';
import EventCard from './EventCard';

function EventList({ events }) {
  if (!events || events.length === 0) {
    return <p>No events available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
