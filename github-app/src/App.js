import React, {Component} from 'react';
import './App.css';

/**
 * - Componentes divididos entre as div, cada uma com uma função
 * - Repos são a mesma estrutura, só mudando os dados
 */

import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: 'Saron',
        photo: 'https://avatars3.githubusercontent.com/u/54987514?v=4',
        login: 'saronph',
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'repos',
        link: '#'
      }],
      starred: [{
        name: 'repos',
        link: '#'
      }]
    }
  }

  render () {
    return (
      <AppContent 
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
