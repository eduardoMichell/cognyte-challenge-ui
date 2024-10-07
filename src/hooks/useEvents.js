import { useState, useEffect } from 'react';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../services/eventService';

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const fetchedEvents = await getEvents();
    setEvents(fetchedEvents);
  };

  const addEvent = async (eventData) => {
    await createEvent(eventData);
    loadEvents();
  };

  const modifyEvent = async (id, eventData) => {
    await updateEvent(id, eventData);
    loadEvents();
  };

  const removeEvent = async (id) => {
    await deleteEvent(id);
    loadEvents();
  };

  return {
    events,
    addEvent,
    modifyEvent,
    removeEvent,
  };
};

export default useEvents;
