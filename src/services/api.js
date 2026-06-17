import axios from 'axios';
import { logger } from './logger';
import { API_BASE_URL } from '../utils/constants';
import mockNotifications from '../data/mockNotifications';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  (config) => {
    logger.logApiRequest(config);
    return config;
  },
  (error) => {
    logger.logApiError(error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    logger.logApiResponse(response);
    return response;
  },
  (error) => {
    logger.logApiError(error);
    return Promise.reject(error);
  }
);

const filterNotifications = (notifications, notificationType) => {
  if (!notificationType) return notifications;
  return notifications.filter((item) => item.Type === notificationType);
};

export const fetchNotifications = async ({ page = 1, limit = 20, notificationType } = {}) => {
  try {
    const params = { page, limit };
    if (notificationType) {
      params.notification_type = notificationType;
    }

    const response = await apiClient.get('/notifications', { params });
    return response.data;
  } catch (error) {
    logger.logWarning('Remote API unavailable, falling back to mock data', { error: error.message });
    const filtered = filterNotifications(mockNotifications, notificationType);
    const start = (page - 1) * limit;
    return filtered.slice(start, start + limit);
  }
};

export default apiClient;
