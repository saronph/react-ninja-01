import React, { Component } from 'react';
import Timer from './Timer';
import './App.css';

/**
 * Botão setando o estado do 'Square', definindo o estado color pelo click
*/

class App extends Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer time={this.state.time} />}

        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show / Hide timer</button>
      </div>
    )
  }
}

export default App;
