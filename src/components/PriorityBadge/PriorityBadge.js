import React from 'react';
import { Chip } from '@mui/material';

const badgeStyles = {
  Placement: { label: 'High Priority', backgroundColor: '#d64545', color: 'white' },
  Result: { label: 'Medium Priority', backgroundColor: '#e8821f', color: 'white' },
  Event: { label: 'Low Priority', backgroundColor: '#00986b', color: 'white' }
};

const PriorityBadge = ({ type }) => {
  const badge = badgeStyles[type] || { label: 'Standard', backgroundColor: '#003d99', color: 'white' };
  return (
    <Chip
      label={badge.label}
      size="small"
      sx={{
        backgroundColor: badge.backgroundColor,
        color: badge.color,
        fontWeight: 600,
        fontSize: '12px'
      }}
    />
  );
};

export default PriorityBadge;
