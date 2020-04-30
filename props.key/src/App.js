import React from 'react';
import './App.css';

import Square from './Square';

/**
 * Key = valor único para cada item do array, passou square porque sabe que são diferentes,
 * se forem iguais o react irá renderizar apenas 1, pois entende que são os mesmos.
 * Index = leva em consideração a posição no array
 */

function App() {
  return (
    <div className="App">
      {['blue', 'red', 'blue'].map((square, index) => (
        <Square key={index} color={square} />
      ))}        
    </div>
  );
}

export default App;
