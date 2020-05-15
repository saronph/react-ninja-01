import React from 'react';

function Actions({ getRepos, getStarred }) {
  return (
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
  )
}

export default Actions;