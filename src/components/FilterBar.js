import React from 'react';

const FilterBar = ({ onFilter }) => {
  const handleFilter = (botClass) => {
    onFilter(botClass);
  };

  return (
    <div>
      <h3>Filter By:</h3>
      {["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].map(cls => (
        <button key={cls} onClick={() => handleFilter(cls)}>{cls}</button>
      ))}
    </div>
  );
};

export default FilterBar;
