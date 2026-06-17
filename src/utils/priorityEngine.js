import { PRIORITY_WEIGHTS } from './constants';

export const calculatePriority = (notification) => {
  const weight = PRIORITY_WEIGHTS[notification.Type] || 0;
  const timestamp = new Date(notification.Timestamp).getTime() || 0;
  return weight * 1000000000000 + timestamp;
};

export const sortNotifications = (notifications = []) => {
  return [...notifications].sort((left, right) => {
    const leftWeight = PRIORITY_WEIGHTS[left.Type] || 0;
    const rightWeight = PRIORITY_WEIGHTS[right.Type] || 0;
    if (rightWeight !== leftWeight) {
      return rightWeight - leftWeight;
    }
    const leftTime = new Date(left.Timestamp).getTime();
    const rightTime = new Date(right.Timestamp).getTime();
    return rightTime - leftTime;
  });
};

export const getTopNotifications = (notifications = [], topN = 10) => {
  if (!Array.isArray(notifications)) return [];
  const sorted = sortNotifications(notifications);
  return sorted.slice(0, topN);
};
