const API_URL = 'http://localhost:3000/api';  // Backend API URL

// Named export for getEventById function
export const getEventById = (id) => {
  // Example fetch call to get event by ID from the backend server
  return fetch(`${API_URL}/events/${id}`)  // Assuming your backend runs on port 3000
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching event:', error);
      throw error;
    });
};

// Example other API functions can be added here

// Optionally, you can also include other named exports for other functions:
export const getEvents = (filters) => {
  const query = new URLSearchParams(filters).toString();
  return fetch(`${API_URL}/events?${query}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching events:', error);
      throw error;
    });
};