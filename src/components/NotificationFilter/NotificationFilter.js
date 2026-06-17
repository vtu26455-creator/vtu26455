import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { NOTIFICATION_TYPES } from '../../utils/constants';

const NotificationFilter = ({ notificationType, setNotificationType }) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="notification-filter-label">Type</InputLabel>
      <Select
        labelId="notification-filter-label"
        value={notificationType}
        label="Type"
        onChange={(event) => setNotificationType(event.target.value)}
      >
        <MenuItem value="">All Types</MenuItem>
        {NOTIFICATION_TYPES.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default NotificationFilter;
