const API_URL = 'http://localhost:3000/api'; // Change to match your backend URL

// Register a new user
export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Error registering user');
    }
    return response.json(); // Return user data after registration (could include JWT token or user object)
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Rethrow error for higher-level handling
  }
};

// Log in a user
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Error logging in user');
    }
    return response.json(); // Return user data after successful login (usually includes JWT token)
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error; // Rethrow error for higher-level handling
  }
};

// Log out a user
export const logout = () => {
  // Optionally remove any authentication tokens from storage if necessary (e.g., localStorage)
  localStorage.removeItem('user');
};