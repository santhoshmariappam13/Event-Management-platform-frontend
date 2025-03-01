const API_URL = 'http://localhost:3000/api';  // Backend API URL


export const getEventById = (id) => {
  return fetch(`${API_URL}/events/${id}`)  
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching event:', error);
      throw error;
    });
};

export const getEvents = (filters) => {
  const query = new URLSearchParams(filters).toString();
  return fetch(`${API_URL}/events?${query}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching events:', error);
      throw error;
    });
};
