import React, { useEffect } from 'react';

export default function Route({ path, children }) {
  useEffect(() => {
    const onLocationChange = () => {
      console.log('Location change');
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
}
