import React, { Component } from 'react';
import Button from './Button';
import Square from './Square';
import './App.css';

/**
 * Botão setando o estado do 'Square', definindo o estado color pelo click
*/

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'green'
    }
  }

  render () {
    return (
      <div>
        <Square color={this.state.color}/>

        {['red', 'green', 'blue'].map((color) => (
        <Button
          key={color}
          handleClick={() => this.setState({ color })}>
          {color}
        </Button>
        ))}
      </div>
    )
  }
}

export default App;
