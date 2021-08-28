import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [term, setTerm] = useState('web development');
  const [results, setResults] = useState([]);

  console.log(results);

  const baseURL = 'https://en.wikipedia.org/w/api.php';

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`${baseURL}`, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    if (term) search();
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
