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
          <textarea defaultValue={'textarea\nvalue'} />
        </form>
    )
  }
}

export default App;
