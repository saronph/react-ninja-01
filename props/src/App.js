import React from 'react';
import './App.css';

import Title from './Title';

//Sourcemap para debug, mostra código sem bundle

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title name='Saron Medeiros' />
        <p>
          Edit <code>src/App.js</code> and be happy.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
