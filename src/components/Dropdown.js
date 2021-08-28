import React, { useState } from 'react';

export default function Dropdown({ options }) {
  const renderedOptions = options.map((option, index) => {
    return (
      <div key={index} className="item">
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Select Color</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
}
