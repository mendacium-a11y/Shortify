import React, { useState, useEffect } from 'react';
import Route from './RouteComponent';

const Router = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const getMatchingRoute = () => {
    return routes.find(route => {
      const regex = new RegExp(`^${route.path.replace(/:\w+/g, '([^/]+)')}$`);
      return regex.test(currentPath);
    });
  };

  const match = getMatchingRoute();

  return match ? <Route component={match.component} params={extractParams(match.path, currentPath)} /> : null;
};

const extractParams = (routePath, currentPath) => {
  const routeSegments = routePath.split('/');
  const pathSegments = currentPath.split('/');
  const params = {};

  routeSegments.forEach((segment, index) => {
    if (segment.startsWith(':')) {
      const paramName = segment.slice(1);
      const paramValue = pathSegments[index];
      params[paramName] = paramValue;
    }
  });

  return params;
};

export default Router;
