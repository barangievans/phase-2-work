import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ onFilterChange }) {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleCheckboxChange = (className) => {
    setSelectedClasses((prevSelected) => {
      if (prevSelected.includes(className)) {
        return prevSelected.filter(c => c !== className);
      } else {
        return [...prevSelected, className];
      }
    });
  };

  useEffect(() => {
    onFilterChange(selectedClasses);
  }, [selectedClasses, onFilterChange]);

  return (
    <div className="filter-bar">
      <h4>Filter by Class</h4>
      {botClasses.map((className) => (
        <div key={className}>
          <label>
            <input
              type="checkbox"
              checked={selectedClasses.includes(className)}
              onChange={() => handleCheckboxChange(className)}
            />
            {className}
          </label>
        </div>
      ))}
    </div>
  );
}

FilterBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterBar;
