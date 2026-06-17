import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Avatar } from '@mui/material';
import PriorityBadge from '../PriorityBadge/PriorityBadge';
import { formatTimestamp } from '../../utils/helpers';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationCard = ({ notification, unread, onMarkViewed }) => {
  const { Type, Message, Timestamp, ID } = notification;

  const typeColorMap = {
    Placement: '#d64545',
    Result: '#e8821f',
    Event: '#00986b'
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        borderLeft: `4px solid ${typeColorMap[Type] || '#003d99'}`,
        borderColor: unread ? `${typeColorMap[Type] || '#003d99'}` : '#e8ecf1',
        backgroundColor: unread ? 'rgba(0, 61, 153, 0.04)' : '#ffffff',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
          transform: 'translateY(-2px)',
          borderLeftColor: typeColorMap[Type] || '#003d99'
        }
      }}
    >
      <CardContent sx={{ padding: '20px' }}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
          <Box display="flex" gap={2} flexGrow={1}>
            <Avatar sx={{ bgcolor: typeColorMap[Type] || '#003d99', width: 44, height: 44, flexShrink: 0, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <NotificationsIcon sx={{ fontSize: 22 }} />
            </Avatar>
            <Box flexGrow={1}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                {Type}
              </Typography>
              <Typography variant="h6" sx={{ mt: 0.5, fontWeight: 700, fontSize: '15px', lineHeight: 1.4, color: '#0f1419' }}>
                {Message}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap={1} alignItems="center">
            <PriorityBadge type={Type} />
          </Box>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
            {formatTimestamp(Timestamp)}
          </Typography>
          {unread && (
            <Chip
              label="Mark as read"
              size="small"
              onClick={() => onMarkViewed(ID)}
              sx={{ cursor: 'pointer', backgroundColor: typeColorMap[Type] || '#003d99', color: 'white', fontWeight: 600, '&:hover': { opacity: 0.9, transform: 'scale(1.02)' }, transition: 'all 0.2s ease' }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
