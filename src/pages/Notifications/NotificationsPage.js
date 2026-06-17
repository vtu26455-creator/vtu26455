import React from 'react';
import { Box, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useNotifications from '../../hooks/useNotifications';
import SearchBar from '../../components/SearchBar/SearchBar';
import NotificationFilter from '../../components/NotificationFilter/NotificationFilter';
import PaginationControls from '../../components/PaginationControls/PaginationControls';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';
import { SORT_OPTIONS } from '../../utils/constants';

const NotificationsPage = () => {
  const {
    notifications,
    loading,
    error,
    page,
    setPage,
    limit,
    setLimit,
    searchQuery,
    setSearchQuery,
    notificationType,
    setNotificationType,
    sortOption,
    setSortOption,
    loadNotifications,
    markViewed,
    viewedIds,
    matchedCount
  } = useNotifications();

  const handleRetry = () => {
    loadNotifications();
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <Box>
      <Box sx={{ mb: 8, pt: 1 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: '#0f1419' }}>
        All Notifications
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '600px' }}>
        Browse every notification. Use filters, search, and sorting to surface the most relevant campus updates.
      </Typography>
      </Box>

      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <SearchBar value={searchQuery} onSearch={setSearchQuery} />
        </Grid>
        <Grid item xs={12} md={4}>
          <NotificationFilter notificationType={notificationType} setNotificationType={setNotificationType} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="sort-notifications-label">Sort</InputLabel>
            <Select
              labelId="sort-notifications-label"
              label="Sort"
              value={sortOption}
              onChange={(event) => handleSortChange(event.target.value)}
            >
              <MenuItem value={SORT_OPTIONS.DATE_DESC}>Date: Newest First</MenuItem>
              <MenuItem value={SORT_OPTIONS.DATE_ASC}>Date: Oldest First</MenuItem>
              <MenuItem value={SORT_OPTIONS.PRIORITY_DESC}>Priority</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {loading && <LoadingSpinner />}
      {error && <ErrorDisplay message={error} onRetry={handleRetry} />}

      {!loading && !error && notifications.length === 0 && (
        <Typography sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>No notifications matched your criteria.</Typography>
      )}

      {!loading && !error && notifications.length > 0 && (
        <Box sx={{ mb: 4 }}>
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.ID}
              notification={notification}
              unread={!viewedIds.includes(notification.ID)}
              onMarkViewed={markViewed}
            />
          ))}
          <PaginationControls
            page={page}
            limit={limit}
            onPageChange={setPage}
            onLimitChange={setLimit}
            totalCount={matchedCount}
          />
        </Box>
      )}
    </Box>
  );
};

export default NotificationsPage;
