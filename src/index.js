import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';       // Ensure App.js is in the same directory
import './index.css';          // Ensure index.css is in the same directory

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure there is an element with id="root" in your index.html
);
