import { useNotificationContext } from '../context/NotificationContext';
import { DEFAULT_TOP_N } from '../utils/constants';
import { useState } from 'react';

const usePriorityNotifications = () => {
  const { getPriorityInbox, markViewed } = useNotificationContext();
  const [topN, setTopN] = useState(DEFAULT_TOP_N);

  const topNotifications = getPriorityInbox(topN);

  return {
    topN,
    setTopN,
    topNotifications,
    markViewed
  };
};

export default usePriorityNotifications;
