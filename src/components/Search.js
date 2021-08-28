import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [term, setTerm] = useState('');

  const baseURL = 'https://en.wikipedia.org/w/api.php';

  useEffect(() => {
    (async () => {
      await axios.get(`${baseURL}`, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
    })();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
}
