import React from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { formatDate } from '../utils/utils';

const EventItem = ({ event, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#2f2f2f',
        color: '#ffffff',
        marginBottom: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        height: '180px',
      }}>
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body2" component="p">
          {formatDate(event.startDate)} - {formatDate(event.endDate)}
        </Typography>
        <Typography variant="body2" component="p">
          Price: ${event.price}
        </Typography>
        <Typography variant="body2" component="p">
          Status: {event.status}
        </Typography>

        <Box className="buttons-container" mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            onClick={() => onEdit(event)}
            sx={{
              borderColor: '#ff9800',
              color: '#ff9800',
              '&:hover': {
                borderColor: '#e68900',
                color: '#e68900',
              },
            }}>
            Edit
          </Button>
          <Button
            variant="contained"
            onClick={() => onDelete(event.id)}
            sx={{
              backgroundColor: '#ff9800',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#e68900',
              },
            }}>
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventItem;
