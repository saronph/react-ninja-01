import React from 'react';
import './App.css';

import Title from './Title';

/**
 * div 'className'="App" , nao pode ser apenas 'class'
 * usar 'htmlFor' ao invez de apenas 'for'
 */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title name='Saron Medeiros' />
        <label htmlFor='input'>Input</label>
        <input type="text" id='input'/>
      </header>
    </div>
  );
}

export default App;
