export const API_BASE_URL = 'http://4.224.186.213/evaluation-service';
export const NOTIFICATION_TYPES = ['Placement', 'Result', 'Event'];
export const PRIORITY_WEIGHTS = {
  Placement: 3,
  Result: 2,
  Event: 1
};
export const DEFAULT_TOP_N = 10;
export const DEFAULT_PAGE_SIZE = 10;
export const VIEWED_STORAGE_KEY = 'affordmed_viewed_notifications';
export const SORT_OPTIONS = {
  DATE_DESC: 'date_desc',
  DATE_ASC: 'date_asc',
  PRIORITY_DESC: 'priority_desc'
};
