import React from 'react';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { StatusEnum } from '../enums/StatusEnum';
import * as Yup from 'yup';
import '../styles/eventForm.css';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .min(Yup.ref('startDate'), 'End date cannot be before start date')
    .required('End date is required'),
  price: Yup.number().required('Price is required'),
  status: Yup.string().required('Status is required'),
});

const EventForm = ({ onSubmit, initialData = {} }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date()
      .min(Yup.ref('startDate'), 'End date cannot be before start date')
      .required('End date is required'),
    price: Yup.number().required('Price is required').positive(),
    status: Yup.string().required('Status is required')
  });

  const formik = useFormik({
    initialValues: {
      title: initialData.title || '',
      startDate: initialData.startDate || '',
      endDate: initialData.endDate || '',
      price: initialData.price || '',
      status: initialData.status || StatusEnum.STARTED
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} className="event-form">
      <TextField
        label="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        fullWidth
        required
        variant="outlined"
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        label="Start Date"
        type="datetime-local"
        name="startDate"
        value={formik.values.startDate}
        onChange={formik.handleChange}
        fullWidth
        required
        error={formik.touched.startDate && Boolean(formik.errors.startDate)}
        helperText={formik.touched.startDate && formik.errors.startDate}
        slotProps={{
          inputLabel: { shrink: true },
          input: { placeholder: 'mm/dd/yyyy --:-- --' },
        }}
      />
      <TextField
        label="End Date"
        type="datetime-local"
        name="endDate"
        value={formik.values.endDate}
        onChange={formik.handleChange}
        fullWidth
        required
        error={formik.touched.endDate && Boolean(formik.errors.endDate)}
        helperText={formik.touched.endDate && formik.errors.endDate}
        slotProps={{
          inputLabel: { shrink: true },
          input: { placeholder: 'mm/dd/yyyy --:-- --' },
        }}
      />
      <TextField
        label="Price"
        type="number"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        fullWidth
        required
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <TextField
        label="Status"
        select
        name="status"
        value={formik.values.status}
        onChange={formik.handleChange}
        fullWidth
        required
        error={formik.touched.status && Boolean(formik.errors.status)}
        helperText={formik.touched.status && formik.errors.status}
      >
        {Object.values(StatusEnum).map((status) => (
          <MenuItem key={status} value={status}>
            {status.charAt(0) + status.slice(1).toLowerCase()}
          </MenuItem>
        ))}
      </TextField>

      {formik.errors.endDate && (
        <Typography variant="body2" className="error-text">
          {formik.errors.endDate}
        </Typography>
      )}

      <Button type="submit" variant="contained" className="submit-button">
        Save Event
      </Button>
    </Box>
  );
};

export default EventForm;