import React, { useState } from 'react';
import Dropdown from './Dropdown';

const languageOptions = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
];

export default function Translate() {
  const [language, setLanguage] = useState(languageOptions[0]);
  return (
    <div>
      <Dropdown
        options={languageOptions}
        selected={language}
        onSelect={setLanguage}
        label="Language"
      />
    </div>
  );
}
