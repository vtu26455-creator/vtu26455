import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import NotificationsPage from '../pages/Notifications/NotificationsPage';
import PriorityInboxPage from '../pages/PriorityInbox/PriorityInboxPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/priority" element={<PriorityInboxPage />} />
    </Routes>
  );
};

export default AppRoutes;
