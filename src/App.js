import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  // ...other code

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Bot Collection</Link> | 
          <Link to="/your-army">Your Bot Army</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/your-army" element={<YourBotArmy />} />
          <Route path="/bot/:id" element={<BotSpecs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
