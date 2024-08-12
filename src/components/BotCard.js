import React from 'react';

function BotCard({ bot, onEnlist }) {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={onEnlist}>Enlist</button>
    </div>
  );
}

export default BotCard;
