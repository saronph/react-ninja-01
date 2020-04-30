import React from 'react';
import './App.css';

import Title from './Title';

// {{}} = objeto, {} = expressão js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title name='Saron' lastname={{first: 'Phili', last: 'ppi'}} />
      </header>
    </div>
  );
}

export default App;
