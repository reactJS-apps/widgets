import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

export default function App() {
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

  const options = [
    { label: 'The Color Red', value: 'red' },
    { label: 'The Color Green', value: 'green' },
    { label: 'The Shade of Blue', value: 'blue' },
  ];

  return (
    <div className="ui container">
      <Dropdown options={options} />
    </div>
  );
}
