import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const colorOptions = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'The Shade of Blue', value: 'blue' },
];

export default function App() {
  const [selected, setSelected] = useState(colorOptions[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={colorOptions}
          selected={selected}
          onSelect={setSelected}
          label="Color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}
