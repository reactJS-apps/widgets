import React, { useState, useEffect } from 'react';

export default function Convert({ language, text }) {
  useEffect(() => {
    console.log('New language for text');
  }, [language, text]);
  return <div>Convert</div>;
}
