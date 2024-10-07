import React from 'react';
import EventItem from './EventItem';
import '../styles/eventList.css';

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div className="event-list">
      {events.length === 0 ? (
        <div className="no-events">No events available.</div>
      ) : (
        events.map((event) => (
          <EventItem key={event.id} event={event} onEdit={onEdit} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default EventList;
