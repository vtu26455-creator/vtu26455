import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Paper } from '@mui/material';
import StatsCard from '../../components/StatsCard/StatsCard';
import useNotifications from '../../hooks/useNotifications';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { totalCount, placementCount, resultCount, eventCount, unreadCount, setNotificationType } = useNotifications();

  const handleViewAllNotifications = () => {
    setNotificationType('');
    navigate('/notifications');
  };

  const handleViewNotificationsByType = (type) => {
    setNotificationType(type);
    navigate('/notifications');
  };

  return (
    <Box sx={{ pb: 4 }}>
      <Box sx={{ mb: 8, pt: 1 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: '#0f1419' }}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '600px' }}>
          Campus notification activity summary, unread alerts, and category distribution.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Total Notifications" value={totalCount} onClick={handleViewAllNotifications} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Placement" value={placementCount} onClick={() => handleViewNotificationsByType('Placement')} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Result" value={resultCount} onClick={() => handleViewNotificationsByType('Result')} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Event" value={eventCount} onClick={() => handleViewNotificationsByType('Event')} />
        </Grid>
      </Grid>

      <Paper variant="outlined" sx={{ p: 4, backgroundColor: 'rgba(0, 61, 153, 0.02)', border: '1px solid #e8ecf1', borderRadius: '14px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Box sx={{ width: 4, height: 28, backgroundColor: '#003d99', borderRadius: '2px' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f1419' }}>Unread Notification Summary</Typography>
        </Box>
        <Typography sx={{ mt: 2, fontSize: '15px', lineHeight: 1.6, color: '#666666' }}>
          You have <strong style={{ color: '#003d99', fontWeight: 700 }}>{unreadCount}</strong> unread notification(s). Review the Priority Inbox for the most important messages.
        </Typography>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
