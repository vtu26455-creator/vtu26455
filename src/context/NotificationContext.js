import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fetchNotifications } from '../services/api';
import { logger } from '../services/logger';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS, VIEWED_STORAGE_KEY } from '../utils/constants';
import { getTopNotifications, sortNotifications } from '../utils/priorityEngine';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [allNotifications, setAllNotifications] = useState([]);
  const [viewedIds, setViewedIds] = useState(() => {
    try {
      const saved = window.localStorage.getItem(VIEWED_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      logger.logWarning('Failed to restore viewed state', error);
      return [];
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.DATE_DESC);

  const persistViewed = useCallback((ids) => {
    try {
      window.localStorage.setItem(VIEWED_STORAGE_KEY, JSON.stringify(ids));
    } catch (writeError) {
      logger.logWarning('Unable to persist viewed IDs', writeError);
    }
  }, []);

  const markViewed = useCallback((notificationId) => {
    setViewedIds((current) => {
      if (!current.includes(notificationId)) {
        const next = [...current, notificationId];
        persistViewed(next);
        logger.logAction('Notification viewed', { id: notificationId });
        return next;
      }
      return current;
    });
  }, [persistViewed]);

  const loadNotifications = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const responseData = await fetchNotifications({
        page: 1,
        limit: 1000,
        notificationType: notificationType || undefined
      });

      if (!Array.isArray(responseData)) {
        throw new Error('Invalid API response format');
      }

      setAllNotifications(responseData);
    } catch (fetchError) {
      logger.logError('Notification fetch failed', fetchError);
      setError(fetchError.message || 'Unable to load notifications');
    } finally {
      setLoading(false);
    }
  }, [notificationType]);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, notificationType, limit]);

  const filteredNotifications = allNotifications.filter((notification) => {
    const matchesType = notificationType ? notification.Type === notificationType : true;
    const matchesSearch = searchQuery
      ? notification.Message.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesType && matchesSearch;
  });

  const sortedNotifications = (() => {
    if (sortOption === SORT_OPTIONS.PRIORITY_DESC) {
      return sortNotifications(filteredNotifications);
    }

    const direction = sortOption === SORT_OPTIONS.DATE_ASC ? 1 : -1;
    return [...filteredNotifications].sort((left, right) => {
      return direction * (new Date(left.Timestamp).getTime() - new Date(right.Timestamp).getTime());
    });
  })();

  const paginatedNotifications = (() => {
    const startIndex = (page - 1) * limit;
    return sortedNotifications.slice(startIndex, startIndex + limit);
  })();

  const unreadNotifications = allNotifications.filter((notification) => !viewedIds.includes(notification.ID));
  const totalCount = allNotifications.length;
  const matchedCount = sortedNotifications.length;
  const placementCount = allNotifications.filter((item) => item.Type === 'Placement').length;
  const resultCount = allNotifications.filter((item) => item.Type === 'Result').length;
  const eventCount = allNotifications.filter((item) => item.Type === 'Event').length;

  const getPriorityInbox = (topN = 10) => {
    return getTopNotifications(allNotifications, topN).map((notification) => ({
      ...notification,
      unread: !viewedIds.includes(notification.ID)
    }));
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications: paginatedNotifications,
        allNotifications,
        filteredNotifications: sortedNotifications,
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
        unreadNotifications,
        totalCount,
        matchedCount,
        placementCount,
        resultCount,
        eventCount,
        getPriorityInbox
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotificationContext must be used inside NotificationProvider');
  }
  return context;
};
