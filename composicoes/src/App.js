import React from 'react';
import './App.css';

import LikeButton from './Like-Button';

/**
 * Composição é utilizar componentes para criar outros componentes, 
 * herda a classe e eventos.
 */

function App() {
  return (
    <div className="App">
      <LikeButton />
    </div>
  );
}

export default App;
