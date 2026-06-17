# AffordMed Campus Notification Platform

This project is a React-based campus notification system for evaluating priority message delivery and unread notification handling.

## Features

- Dashboard summary with notification counts
- All notifications list with pagination, search, type filter, and sort options
- Priority Inbox with dynamic Top N selection
- Viewed/unviewed state persisted to localStorage
- API calls using Axios with request/response/error logging
- Material UI design and responsive layout
- React Router DOM navigation and context-based state management

## Installation

1. Ensure Node.js 18+ is installed.
2. In the project root, run:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the app at `http://localhost:3000`.

## Project Structure

```
src/
  components/
  context/
  hooks/
  layouts/
  pages/
  routes/
  services/
  utils/
  App.js
  index.js
```

## Logging

- `src/services/logger.js` provides reusable logging methods.
- `src/services/api.js` integrates logging via Axios interceptors.

## Notes

- The notification API endpoint is `http://4.224.186.213/evaluation-service/notifications`.
- Viewed state is stored under `affordmed_viewed_notifications` in localStorage.

