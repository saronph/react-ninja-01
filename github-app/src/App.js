import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='search'>
        <input 
        type='search' 
        placeholder='Digite o nome do usuário do Github' 
        />
      </div>

      <div className='user-info'>
        <img src="https://avatars3.githubusercontent.com/u/54987514?v=4" alt="avatar"/>
        <h1>
          <a href="https://github.com/saronph">Saron Medeiros</a>          
        </h1>
        <ul className='repos-info'>
          <li>- Repositórios: 21</li>
          <li>- Seguidores: 10</li>
          <li>- Seguindo: 20</li>
        </ul>

        <div className='actions'>
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className='repos'>
          <h2>Repositórios: </h2>
          <ul>
            <li><a href="#">Nome do repositório</a></li>
          </ul>
        </div>

        <div className='starred'>
          <h2>Favoritos: </h2>
          <ul>
            <li><a href="#">Nome do repositório</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
