import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // Check if there's an authenticated user in localStorage on component mount
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
      setIsAuthenticated(true);
      setUserRole(localStorage.getItem('userRole'));
    }
  }, []);

  const login = (role, user) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setUserInfo(user);
    localStorage.setItem('userInfo', JSON.stringify(user));  // Store user info in localStorage
    localStorage.setItem('userRole', role);  // Store role in localStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserInfo(null);
    localStorage.removeItem('userInfo');  // Remove from localStorage
    localStorage.removeItem('userRole');  // Remove role from localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
