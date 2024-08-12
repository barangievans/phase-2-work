import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onEnlist={() => enlistBot(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
