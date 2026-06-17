export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return 'Unknown date';
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getViewedIds = () => {
  try {
    const raw = window.localStorage.getItem('affordmed_viewed_notifications');
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
};

export const saveViewedIds = (ids) => {
  try {
    window.localStorage.setItem('affordmed_viewed_notifications', JSON.stringify(ids));
  } catch (error) {
    // ignore localStorage write failures
  }
};
