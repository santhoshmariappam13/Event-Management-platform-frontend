import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Define the useAuth hook
const useAuth = () => {
  return useContext(AuthContext);
};

// Default export of the hook
export default useAuth;
