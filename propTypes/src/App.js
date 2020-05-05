import React, { Component } from 'react';
import Button from './Button';
import Square from './Square';
import './App.css';

/**
 * Botão setando o estado do 'Square', definindo o estado color pelo click
*/

class App extends Component {
  render () {
    return (
      <div>
        <Button>Clique</Button>
      </div>
    )
  }
}

export default App;
