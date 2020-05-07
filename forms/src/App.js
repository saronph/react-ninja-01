import React, {Component} from 'react';
import './App.css';

/**
 * - Prevent default evita que os dados sejam enviados na url
 */

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }
  render() {
    return (
      <div>
        <label>
          <input 
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({ 
                checked: !this.state.checked 
            }, () => {
              this.setState({
                showContent: this.state.checked
              })
            })
            }}
          />
          Mostrar conteúdo
        </label>

        {this.state.showContent && <div>Olha aqui</div>}
      </div>
    )
  }
}

export default App;
