import React, { useState, useEffect, useRef } from 'react';

export default function Dropdown({ options, selected, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) return;
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={index}
        className="item"
        onClick={() => {
          onSelect(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
