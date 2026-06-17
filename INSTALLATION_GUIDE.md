# Installation Guide

## Prerequisites

- Node.js 18 or higher
- npm 9 or higher

## Setup

1. Open a terminal in the project directory:

```bash
cd "d:\affordamd te"
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the browser at:

```text
http://localhost:3000
```

## Notes

- The app uses the API endpoint: `http://4.224.186.213/evaluation-service/notifications`
- Viewed notification state is stored in localStorage under the key `affordmed_viewed_notifications`
- If the API returns an error, use the retry button on the notifications page
