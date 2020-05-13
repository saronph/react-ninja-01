import React from 'react';
import PropTypes from 'prop-types';

import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

/**
 * - '!!' transforma para booleano, '0' = false
 * - Repos é array, lenght pega pelo tamanha, se for vazio nao aparece
 */

function AppContent({ userinfo, repos, starred }) {
  return (
    <div className='app'>

    <Search />

    {!!userinfo && 
    <UserInfo 
      userinfo={userinfo}
    />}

    {!!userinfo && <Actions />}

    {!!repos.length &&
      <Repos 
        className='repos' 
        title='Repositórios:'
        repos={repos} 
      />
    }

    {!!starred.length &&
      <Repos 
        className='starred' 
        title='Favoritos:'
        repos={starred} 
      />
    }

  </div>
  )
}

AppContent.propTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent;