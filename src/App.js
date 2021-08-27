import React from 'react';
import Accordion from './components/Accordion';

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

  return (
    <div className="ui container" style={{ marginTop: '5%' }}>
      <Accordion items={items} />
    </div>
  );
}
