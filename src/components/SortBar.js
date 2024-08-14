import React from 'react';
import PropTypes from 'prop-types';

const sortOptions = [
  { value: 'health', label: 'Health' },
  { value: 'damage', label: 'Damage' },
  { value: 'armor', label: 'Armor' }
];

function SortBar({ onSortChange }) {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort-bar">
      <h4>Sort by</h4>
      <select onChange={handleSortChange}>
        <option value="">Select an option</option>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

SortBar.propTypes = {
  onSortChange: PropTypes.func.isRequired,
};

export default SortBar;

