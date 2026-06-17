import { useNotificationContext } from '../context/NotificationContext';

const useNotifications = () => {
  const context = useNotificationContext();
  return {
    notifications: context.notifications,
    loading: context.loading,
    error: context.error,
    page: context.page,
    setPage: context.setPage,
    limit: context.limit,
    setLimit: context.setLimit,
    searchQuery: context.searchQuery,
    setSearchQuery: context.setSearchQuery,
    notificationType: context.notificationType,
    setNotificationType: context.setNotificationType,
    sortOption: context.sortOption,
    setSortOption: context.setSortOption,
    loadNotifications: context.loadNotifications,
    markViewed: context.markViewed,
    viewedIds: context.viewedIds,
    totalCount: context.totalCount,
    matchedCount: context.matchedCount,
    placementCount: context.placementCount,
    resultCount: context.resultCount,
    eventCount: context.eventCount,
    unreadCount: context.unreadNotifications.length
  };
};

export default useNotifications;
