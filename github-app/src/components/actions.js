import React from 'react';
import Proptypes from 'prop-types';

function Actions({ getRepos, getStarred }) {
  return (
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
  )
}

Actions.propTypes = {
  getRepos: Proptypes.func.isRequired,
  getStarred: Proptypes.func.isRequired
}

export default Actions;