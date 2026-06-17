# Testing Instructions

## Manual test scenarios

1. Dashboard validation
   - Verify total notifications count updates after refresh
   - Confirm placement, result, and event counts match expected data

2. Notification listing
   - Verify search filters notifications by message content
   - Verify type filter returns only the selected notification type
   - Verify sort options rearrange the list correctly
   - Verify pagination controls navigate pages and update the list

3. Priority inbox behavior
   - Change the Top N selector between 10, 15, and 20
   - Confirm the list updates to the highest priority notifications
   - Verify priority badges display appropriate labels and colors

4. Viewed state persistence
   - Click the `Unread` badge on a notification card
   - Confirm the card no longer appears highlighted
   - Refresh the page and confirm the viewed state remains

5. Error handling
   - Simulate network failure or disable the API endpoint
   - Confirm the ErrorDisplay message appears with a retry button
   - Press Retry to ensure the app attempts to reload

## Recommended validation

- Use Chrome DevTools to verify localStorage contains `affordmed_viewed_notifications`
- Validate mobile responsiveness with browser device simulator
- Use `npm start` and confirm the app runs without compilation warnings
