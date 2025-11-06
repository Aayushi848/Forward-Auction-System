import React, { useState } from 'react';
import './CreateAuction.css';
import './custom-multiselect.css';

export default function CustomMultiSelect({ label, options = [], value = [], onChange = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="form-group">
      <label>{label || "Select Items"}</label>
      <div
        className="select-btn"
        onClick={toggleDropdown}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          cursor: 'pointer',
          background: '#fff',
        }}
      >
        
        <span className="btn-text" >
  {value.length > 0 ? value.join(', ') : '--Select--'}
</span>
<i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
       
        
      </div>

      {isOpen && (
        <ul
          className="list-items"
          style={{
            listStyle: 'none',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            marginTop: '4px',
            maxHeight: '150px',
            overflowY: 'auto',
            background: '#fff',
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`item ${value.includes(option) ? 'checked' : ''}`}
              onClick={() => handleItemClick(option)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 0',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => handleItemClick(option)}
                style={{ marginRight: '10px' }}
              />
              <span className="item-text" style={{ fontSize: '14px' }}>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
