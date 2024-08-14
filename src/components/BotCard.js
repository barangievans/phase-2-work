import React from 'react';

function BotCard({ bot, addToArmy, removeFromArmy, dischargeBot, isInArmy }) {
  return (
    <div>
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />
      {!isInArmy ? (
        <button onClick={() => addToArmy(bot)}>Add to Army</button>
      ) : (
        <>
          <button onClick={() => removeFromArmy(bot.id)}>Remove from Army</button>
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </>
      )}
    </div>
  );
}

export default BotCard;

