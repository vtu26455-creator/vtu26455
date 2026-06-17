import React from 'react';
import { Box, Typography, Grid, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import usePriorityNotifications from '../../hooks/usePriorityNotifications';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import { DEFAULT_TOP_N } from '../../utils/constants';
import { logger } from '../../services/logger';

const PriorityInboxPage = () => {
  const { topN, setTopN, topNotifications, markViewed } = usePriorityNotifications();

  const handleTopNChange = (value) => {
    setTopN(value);
    logger.logAction('Priority list size changed', { topN: value });
  };

  return (
    <Box>
      <Box sx={{ mb: 8, pt: 1 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: '#0f1419' }}>
        Priority Inbox
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '600px' }}>
        The Priority Inbox ranks unread notifications and highlights the top messages from the campus alert stream.
      </Typography>
      </Box>

      <Grid container spacing={2.5} sx={{ mb: 4, alignItems: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="priority-size-label">Top items</InputLabel>
            <Select
              labelId="priority-size-label"
              label="Top items"
              value={topN}
              onChange={(event) => handleTopNChange(event.target.value)}
            >
              {[10, 15, 20].map((value) => (
                <MenuItem key={value} value={value}>
                  Top {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Chip label="Placement = High, Result = Medium, Event = Low" color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
        </Grid>
      </Grid>

      {topNotifications.length === 0 ? (
        <Typography sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>
          No priority notifications are available right now.
        </Typography>
      ) : (
        <Box sx={{ mb: 4 }}>
          {topNotifications.map((notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
            unread={notification.unread}
            onMarkViewed={markViewed}
          />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PriorityInboxPage;
