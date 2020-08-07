import React from 'react';
import './App.css';

import BasicTypes from './components/BasicTypes';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="pageBlock">
        Basic Types:
      <br />
        <BasicTypes />
      </div>
      <div className="pageBlock">
        Creating a simple list:
      <Home />
      </div>
    </div>
  );
}

export default App;
