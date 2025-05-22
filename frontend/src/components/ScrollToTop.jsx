import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensures the scroll position is reset after everything is loaded
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Adjust the timeout value if needed

    // Clean up timeout
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
