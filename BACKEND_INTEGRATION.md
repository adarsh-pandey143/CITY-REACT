# Backend Integration Guide

## Overview

The backend API is integrated with the frontend. The frontend connects to the backend API for tracking shipment details.

## Setup

### 1. Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (see `backend/SETUP.md` for details)

4. Ensure database tables exist:
   - `data_entry` table
   - `history_data` table

5. Start backend server:
```bash
npm run dev  # Development
# or
npm start    # Production
```

### 2. Frontend Configuration

The frontend is configured to connect to the backend API. By default, it connects to:
- Development: `http://localhost:5000/api`
- Production: Set `REACT_APP_API_URL` environment variable

To configure the API URL:

1. Create `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_AUTH_KEY=your-auth-key-here
```

2. For production, set the environment variable when building:
```bash
REACT_APP_API_URL=https://your-api-domain.com/api npm run build
```

## API Endpoints Used

### Tracking
- **GET** `/api/tracking/:trackingNumber`
  - Fetches tracking details from `data_entry` and `history_data` tables
  - Returns shipment details with POD and history

## Testing

### Test Backend
```bash
# Health check
curl http://localhost:5000/health

# Test tracking (with auth_key)
curl -H "auth_key: your-auth-key" http://localhost:5000/api/tracking/TRACK001
```

### Test Frontend Integration

1. Start backend: `cd backend && npm run dev`
2. Start frontend: `npm start`
3. Test tracking page with a valid tracking number

## Error Handling

Both frontend and backend have error handling:
- Frontend shows user-friendly error messages
- Backend returns consistent error responses
- Network errors are handled gracefully

## Production Deployment

### Backend
1. Set environment variables
2. Ensure database is accessible
3. Deploy to your server (Node.js hosting)
4. Configure CORS for your frontend domain

### Frontend
1. Set `REACT_APP_API_URL` to your production API URL
2. Build: `npm run build`
3. Deploy `build/` folder

## Security Notes

- Backend uses parameterized queries (SQL injection protection)
- CORS is configured
- Helmet.js for security headers
- Environment variables for sensitive data
- Input validation on both frontend and backend
