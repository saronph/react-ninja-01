import React from 'react';
import './App.css';

/**
 * - Esse método manipula o DOM, para casos de libs de terceiros onde não é possível
 * enviar props.
 */

import Plugin from './plugin';

function App() {
  return (
    <Plugin />
  );
}

export default App;
