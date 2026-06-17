# Notification System Design

## Architecture

The application follows a modular React architecture using functional components and Context API state management. A centralized `NotificationContext` provides notification storage, UI state, and business logic to pages and hooks. The design separates concerns across:

- `services/` for API and logging
- `utils/` for reusable algorithms and constants
- `hooks/` for encapsulated state access
- `components/` for UI primitives
- `pages/` for route-specific views

## Priority Strategy

Notifications are ranked first by type weight and then by timestamp. Supported priorities:

- Placement = 3
- Result = 2
- Event = 1

Higher weight notifications always outrank lower weight items. Within the same type, newer notifications come first.

## Data Flow

1. `NotificationProvider` loads notifications from the API using `fetchNotifications`.
2. The provider stores raw notifications and viewed IDs from `localStorage`.
3. Pages and hooks query the provider for filtered, sorted, and priority-ready notifications.
4. User actions such as search, filter, pagination, and marking viewed trigger state updates.
5. Viewed state is persisted immediately to `localStorage`.

## Sorting Logic

The priority engine provides:

- `calculatePriority()` to derive a score from type weight and timestamp
- `sortNotifications()` to order notifications by priority and recency
- `getTopNotifications()` to return the highest priority subset

For UI sort options, the app supports:

- `Date: Newest First`
- `Date: Oldest First`
- `Priority`

## Time Complexity

- Sorting notifications: O(n log n)
- Filtering by search and type: O(n)
- Priority slicing: O(n log n) for sort plus O(k) for slicing

The implementation is efficient for the expected dataset size and uses memoized slices where appropriate.

## Scalability

- The API layer supports query params for pagination and type filtering.
- The priority engine can handle streamed data because sort and top-N selection are separated.
- Context state can be extended to support real-time updates or additional notification metadata.

## Future Improvements

- Add server-side pagination and infinite scrolling to reduce client-side memory.
- Introduce WebSocket or SSE updates for live notification delivery.
- Add user authentication and notification grouping based on roles.
- Implement optimistic UI for marking viewed across sessions.
- Add unit and integration tests for components, hooks, and utilities.
