import React, {Component} from 'react';
import './App.css';
import ajax from '@fdaciuk/ajax';

/**
 * - Componentes divididos entre as div, cada uma com uma função
 * - Repos são a mesma estrutura, só mudando os dados
 * - Função getRepos vai receber prop como 'type' pois será feito apenas 1 busca
 * para preencher os dados de repos e starred.
 */

import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''

    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
      const value = e.target.value
      const keyCode = e.which || e.keyCode
      const ENTER = 13
      
      if(keyCode === ENTER) {
        ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
            repos: [],
            starred: []
          })
        })
      }
    }
    
  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login

      ajax().get(this.getGitHubApiUrl(username, type))
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => ({           
              name: repo.name,
              link: repo.html_url,            
          }))
        })
      })
    }
  } 

  render () {
    return (
      <AppContent 
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
