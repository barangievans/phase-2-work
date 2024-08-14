import React from 'react';
import PropTypes from 'prop-types';

function BotCollection({ bots, onBotClick }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.length > 0 ? (
          bots.map(bot => (
            <div key={bot.id} className="bot-card" onClick={() => onBotClick(bot)}>
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
            </div>
          ))
        ) : (
          <p>No bots available.</p>
        )}
      </div>
    </div>
  );
}

BotCollection.propTypes = {
  bots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBotClick: PropTypes.func.isRequired,
};

export default BotCollection;





