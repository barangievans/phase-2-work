import React from 'react';
import PropTypes from 'prop-types';

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-list">
        {army.length > 0 ? (
          army.map(bot => (
            <div key={bot.id} className="army-card">
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <button onClick={() => removeFromArmy(bot.id)}>Remove from Army</button>
              <button onClick={() => dischargeBot(bot.id)} style={{ backgroundColor: 'red', color: 'white' }}>Discharge</button>
            </div>
          ))
        ) : (
          <p>Your army is empty.</p>
        )}
      </div>
    </div>
  );
}

YourBotArmy.propTypes = {
  army: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromArmy: PropTypes.func.isRequired,
  dischargeBot: PropTypes.func.isRequired,
};

export default YourBotArmy;


