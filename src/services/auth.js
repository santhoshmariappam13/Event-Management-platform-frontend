const API_URL = 'http://localhost:3000/api'; 
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
    return response.json(); 
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; 
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
    return response.json(); 
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error; 
  }
};

// Log out a user
export const logout = () => {
  localStorage.removeItem('user');
};
