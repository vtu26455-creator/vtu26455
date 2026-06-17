# Git Commit Sequence

Use the following commit sequence to track project progress:

1. `feat: initialize React project and install dependencies`
   - Create React app bootstrap
   - Add Material UI, Axios, React Router DOM

2. `feat: add logger service and API layer`
   - Implement reusable logging middleware
   - Configure Axios instance with interceptors

3. `feat: build notification priority engine`
   - Create priority calculation and sorting utilities
   - Add top N selector logic

4. `feat: implement notification context and hooks`
   - Add NotificationContext for state management
   - Create custom hooks for notifications, priority, and pagination

5. `feat: add reusable UI components`
   - Create NotificationCard, PriorityBadge, SearchBar, Filter, StatsCard, spinner, and error display

6. `feat: add pages and routing`
   - Build Dashboard, All Notifications, and Priority Inbox pages
   - Implement MainLayout and route configuration

7. `docs: add project documentation`
   - Add README, system design document, installation guide, screenshot checklist, and testing instructions

8. `fix: correct pagination and unread state handling`
   - Ensure page counts use matched notification count
   - Fix viewed/unviewed status rendering
