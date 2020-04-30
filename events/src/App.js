import React from 'react';
import './App.css';

import Square from './Square';

/**
 * Os eventos começam com 'on'. Ex: 'onKeyUp', 'onClick'
 */

function App() {
  return (
    <div className="App" onClick={(e) => {
      alert('clicou')
    }}>
        <Square />     
    </div>
  );
}

export default App;
