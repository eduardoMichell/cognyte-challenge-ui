import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import '../styles/eventForm.css';

const statuses = ['STARTED', 'COMPLETED', 'PAUSED'];

const EventForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [startDate, setStartDate] = useState(initialData.startDate || '');
  const [endDate, setEndDate] = useState(initialData.endDate || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [status, setStatus] = useState(initialData.status ? initialData.status.toUpperCase() : statuses[0]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(endDate) < new Date(startDate)) {
      setError('End date cannot be before start date');
      return;
    }

    setError('');
    onSubmit({ title, startDate, endDate, price, status });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="event-form">
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        variant="outlined"
        slotProps={{ inputLabel: { shrink: !!title, style: { color: '#ffffff' } } }}
      />
      <TextField
        label="Start Date"
        type="datetime-local"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        fullWidth
        required
        slotProps={{
          inputLabel: { shrink: true, style: { color: '#ffffff' } },
          htmlInput: { placeholder: 'mm/dd/yyyy --:-- --' },
        }}
      />
      <TextField
        label="End Date"
        type="datetime-local"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        fullWidth
        required
        slotProps={{
          inputLabel: { shrink: true, style: { color: '#ffffff' } },
          htmlInput: { placeholder: 'mm/dd/yyyy --:-- --' },
        }}
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        required
        slotProps={{ inputLabel: { shrink: !!price, style: { color: '#ffffff' } } }}
      />
      <TextField
        label="Status"
        select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
        required
        slotProps={{ inputLabel: { shrink: true, style: { color: '#ffffff' } } }}
      >
        {statuses.map((s) => (
          <MenuItem key={s} value={s}>
            {s.charAt(0) + s.slice(1).toLowerCase()}
          </MenuItem>
        ))}
      </TextField>

      {error && (
        <Typography variant="body2" className="error-text">
          {error}
        </Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        className="submit-button"
      >
        Save Event
      </Button>
    </Box>
  );
};

export default EventForm;
