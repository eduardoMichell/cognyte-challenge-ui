import React, { useState } from 'react';
import './styles/global.css';
import './styles/eventForm.css';
import './styles/eventList.css';
import { Container, Button, Typography, Dialog, DialogTitle, DialogContent, Card, CardContent } from '@mui/material';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import useEvents from './hooks/useEvents';


const App = () => {
  const { events, addEvent, modifyEvent, removeEvent } = useEvents();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleOpenForm = () => {
    setEditingEvent(null);
    setIsFormOpen(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingEvent(null);
  };

  const handleFormSubmit = (eventData) => {
    if (editingEvent) {
      modifyEvent(editingEvent.id, eventData);
    } else {
      addEvent(eventData);
    }
    handleCloseForm();
  };

  const handleDeleteEvent = (eventId) => {
    removeEvent(eventId);
  };

  return (
    <div className="container">
      <Container maxWidth="md">
        <Card className="card" style={{ backgroundColor: '#1e1e1e' }}>
          <CardContent>
            <Typography variant="h2" sx={{ textAlign: 'center', color: "white" }}>
              Event Manager
            </Typography>

            <Button
              variant="contained"
              className="create-button"
              onClick={handleOpenForm}
              sx={{
                backgroundColor: '#ff9800',
                color: '#ffffff', 
                '&:hover': {
                  backgroundColor: '#e68900',
                },
              }}
            >
              Create New Event
            </Button>

            <EventList events={events} onEdit={handleEditEvent} onDelete={handleDeleteEvent} />
          </CardContent>
        </Card>

        <Dialog open={isFormOpen} onClose={handleCloseForm} PaperProps={{ style: { backgroundColor: '#1e1e1e' } }}>
          <DialogTitle className="dialog-title">
            {editingEvent ? 'Edit Event' : 'Create Event'}
          </DialogTitle>
          <DialogContent className="dialog-content">
            <EventForm onSubmit={handleFormSubmit} initialData={editingEvent || {}} />
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
};

export default App;
