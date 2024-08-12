import React from 'react';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      {army.map(bot => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
