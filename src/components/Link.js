import React from 'react';

export default function Link({ href, className, children }) {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  };
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
