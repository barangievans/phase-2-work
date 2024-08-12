import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BotSpecs() {
  const { id } = useParams();  // Extract id from URL parameters
  const [botData, setBotData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8001/bots/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBotData(data))
      .catch(error => console.error('Fetch error:', error));
  }, [id]);  // Dependency on id

  if (!botData) return <p>Loading...</p>;

  return (
    <div>
      <img src={botData.avatar_url} alt={botData.name} />
      <h3>{botData.name}</h3>
      <p>Health: {botData.health}</p>
      <p>Damage: {botData.damage}</p>
      <p>Armor: {botData.armor}</p>
      <p>Class: {botData.bot_class}</p>
      <p>Catchphrase: {botData.catchphrase}</p>
      <button onClick={() => {/* Enlist bot logic */}}>Enlist</button>
    </div>
  );
}

export default BotSpecs;


