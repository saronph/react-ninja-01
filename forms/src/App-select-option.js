import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
  }
  render() {
    return (
        <form>
          <select value={this.state.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
            }}>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>
        </form>
    )
  }
}

export default App;
