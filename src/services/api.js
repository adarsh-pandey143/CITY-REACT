// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY || '';

/**
 * Fetch tracking details from backend
 * @param {string} trackingNumber - The tracking number to search for
 * @returns {Promise<Object>} - Tracking details
 */
export const fetchTrackingDetails = async (trackingNumber) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    // Add auth_key to headers if provided
    if (AUTH_KEY) {
      headers['auth_key'] = AUTH_KEY;
      headers['auth-key'] = AUTH_KEY; // Also send with hyphen for compatibility
    }
    
    // Debug log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Sending request with auth_key:', AUTH_KEY ? `${AUTH_KEY.substring(0, 10)}...` : 'none');
    }
    
    const response = await fetch(`${API_BASE_URL}/tracking/${encodeURIComponent(trackingNumber)}`, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch tracking details');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching tracking details:', error);
    throw error;
  }
};

