# Screenshot Checklist

Capture screenshots for the following application states:

1. Dashboard view
   - Display all four stats cards
   - Show unread notification summary
   - Responsive view on desktop and mobile sizes

2. All Notifications page
   - Search bar, type filter, sort control visible
   - Notifications list with pagination controls
   - Empty state or result state when no notification matches
   - Error state with retry button (can be simulated by disabling API or network)

3. Priority Inbox page
   - Top N selector set to Top 10, Top 15, Top 20
   - Priority badges visible on notification cards
   - Unread highlight on unread items

4. Viewed / Unviewed state
   - Notification card clearly showing unread highlight
   - After clicking `Unread` badge, the notification should become normal appearance
   - localStorage persistence: refresh the page and confirm viewed state remains

5. Responsive layout checks
   - Desktop layout showing AppBar and content correctly
   - Tablet layout with responsive cards and controls
   - Mobile layout with stacked form controls and readable text
