import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const languageOptions = [
  { label: 'Russian', value: 'ru' },
  { label: 'English', value: 'en' },
  { label: 'Uzbek', value: 'uz' },
  { label: 'Turkish', value: 'tr' },
  { label: 'Spanish', value: 'es' },
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
];

export default function Translate() {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={languageOptions}
        selected={language}
        onSelect={setLanguage}
        label="Language"
      />
      <hr />
      <h3 className="ui header">Translation:</h3>
      <Convert text={text} language={language} />
    </div>
  );
}
