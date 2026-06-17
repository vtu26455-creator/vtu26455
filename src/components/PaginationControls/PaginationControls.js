import React from 'react';
import { Box, Button, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';

const PaginationControls = ({ page, limit, onPageChange, onLimitChange, totalCount }) => {
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2} sx={{ py: 2 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <Button variant="outlined" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
          Previous
        </Button>
        <Button variant="outlined" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
          Next
        </Button>
        <Typography variant="body2">
          Page {page} of {totalPages}
        </Typography>
      </Box>
      <FormControl size="small" sx={{ minWidth: 130 }}>
        <InputLabel id="rows-per-page-label">Rows</InputLabel>
        <Select
          labelId="rows-per-page-label"
          value={limit}
          label="Rows"
          onChange={(event) => onLimitChange(Number(event.target.value))}
        >
          {[5, 10, 15, 20].map((value) => (
            <MenuItem key={value} value={value}>
              {value} per page
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PaginationControls;
