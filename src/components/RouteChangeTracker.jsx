import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

const RouteChangeTracker = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      NProgress.start();
      previousPath.current = location.pathname;

      // Small delay to simulate loading and show progress
      const timer = setTimeout(() => {
        NProgress.done();
      }, 500); // You can tweak this for realism

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return null;
};

export default RouteChangeTracker;
