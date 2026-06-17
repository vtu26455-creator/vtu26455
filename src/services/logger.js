const logLevel = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
};

function formatPayload(payload) {
  if (!payload) return '';
  try {
    return typeof payload === 'string' ? payload : JSON.stringify(payload);
  } catch (error) {
    return String(payload);
  }
}

function writeLog(level, message, meta) {
  const timestamp = new Date().toISOString();
  const output = `[${timestamp}] [${level}] ${message}` + (meta ? ` | ${formatPayload(meta)}` : '');
  if (typeof window !== 'undefined' && window.console) {
    if (level === logLevel.ERROR) {
      window.console.error(output);
    } else if (level === logLevel.WARNING) {
      window.console.warn(output);
    } else {
      window.console.info(output);
    }
  }
}

export const logger = {
  logInfo: (message, meta) => writeLog(logLevel.INFO, message, meta),
  logWarning: (message, meta) => writeLog(logLevel.WARNING, message, meta),
  logError: (message, meta) => writeLog(logLevel.ERROR, message, meta),
  logApiRequest: (config) => writeLog(logLevel.INFO, 'API Request', {
    method: config.method,
    url: config.url,
    params: config.params,
    data: config.data
  }),
  logApiResponse: (response) => writeLog(logLevel.INFO, 'API Response', {
    status: response.status,
    url: response.config?.url,
    data: response.data
  }),
  logApiError: (error) => writeLog(logLevel.ERROR, 'API Error', {
    message: error.message,
    url: error.config?.url,
    status: error.response?.status,
    data: error.response?.data
  }),
  logNavigation: (from, to) => writeLog(logLevel.INFO, 'Navigation', { from, to }),
  logAction: (action, meta) => writeLog(logLevel.INFO, action, meta)
};
