import React, { Component } from 'react';
import './App.css';

/**
 * Constructor faz o estado inicial e o setState cria um novo
*/

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Saron'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Medeiros'
      })}>
        {this.state.text}
      </div>
    )
  }
}

export default App;
