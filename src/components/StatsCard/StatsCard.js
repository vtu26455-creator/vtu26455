import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';

const iconMap = {
  'Total Notifications': AssignmentIcon,
  'Placement': PlaceIcon,
  'Result': SchoolIcon,
  'Event': EventIcon
};

const colorMap = {
  'Total Notifications': '#003d99',
  'Placement': '#d64545',
  'Result': '#e8821f',
  'Event': '#00986b'
};

const bgColorMap = {
  'Total Notifications': '#f0f4ff',
  'Placement': '#fff5f5',
  'Result': '#fffaf5',
  'Event': '#f0fff8'
};

const hoverShadowMap = {
  'Total Notifications': '0 12px 24px rgba(0, 61, 153, 0.15)',
  'Placement': '0 12px 24px rgba(214, 69, 69, 0.15)',
  'Result': '0 12px 24px rgba(232, 130, 31, 0.15)',
  'Event': '0 12px 24px rgba(0, 152, 107, 0.15)'
};

const StatsCard = ({ title, value, subtitle, onClick }) => {
  const IconComponent = iconMap[title];
  const iconColor = colorMap[title];
  const bgColor = bgColorMap[title];
  const hoverShadow = hoverShadowMap[title];

  return (
    <Card
      elevation={0}
      sx={{
        minWidth: 180,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid rgba(232, 236, 241, 0.8)',
        backgroundColor: bgColor,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        '&:hover': onClick ? {
          transform: 'translateY(-4px)',
          boxShadow: hoverShadow,
          borderColor: iconColor,
          backgroundColor: 'white'
        } : {}
      }}
      onClick={onClick}
    >
      <CardContent sx={{ p: '26px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            {title}
          </Typography>
          {IconComponent && <IconComponent sx={{ color: iconColor, fontSize: 36, opacity: 0.75, transition: 'all 0.3s ease' }} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mt: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: iconColor, fontSize: '32px' }}>
            {value}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
