import React from 'react';
import PropTypes from 'prop-types';

function BotSpecs({ bot, onEnlist, onGoBack }) {
  return (
    <div className="bot-specs">
      <h2>{bot.name} Specifications</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={onEnlist}>Enlist</button>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}

BotSpecs.propTypes = {
  bot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
    armor: PropTypes.number.isRequired,
    bot_class: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
  }).isRequired,
  onEnlist: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default BotSpecs;
