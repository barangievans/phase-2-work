import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [sortedBots, setSortedBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [view, setView] = useState('collection'); // 'collection', 'specs'

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched bots:', data); // Add this line
        setBots(data);
        setFilteredBots(data);
        setSortedBots(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
   useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => {
        setBots(data);
        setFilteredBots(data);
        setSortedBots(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setArmy(army.filter(bot => bot.id !== botId));
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
    setView('specs');
  };

  const handleEnlist = () => {
    addToArmy(selectedBot);
    setView('collection');
  };

  const handleGoBack = () => {
    setView('collection');
  };

  const handleFilterChange = (selectedClasses) => {
    if (selectedClasses.length === 0) {
      setFilteredBots(bots);
    } else {
      setFilteredBots(bots.filter(bot => selectedClasses.includes(bot.bot_class)));
    }
  };

  const handleSortChange = (attribute) => {
    const sorted = [...filteredBots].sort((a, b) => {
      if (attribute === '') return 0;
      return b[attribute] - a[attribute]; // Descending order
    });
    setSortedBots(sorted);
  };

  return (
    <div className="App">
      {view === 'collection' && (
        <>
          <FilterBar onFilterChange={handleFilterChange} />
          <SortBar onSortChange={handleSortChange} />
          <BotCollection bots={sortedBots} onBotClick={handleBotClick} />
          <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
        </>
      )}
      {view === 'specs' && selectedBot && (
        <BotSpecs
          bot={selectedBot}
          onEnlist={handleEnlist}
          onGoBack={handleGoBack}
        />
      )}
    </div>
  );
}

export default App;
