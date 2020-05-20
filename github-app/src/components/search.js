import React from 'react';
import Proptypes from 'prop-types';

function Search({ handleSearch, isDisabled }) {
  return (
    <div className='search'>
      <input 
      type='search' 
      placeholder='Digite o nome do usuário do Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: Proptypes.func.isRequired,
  isDisabled: Proptypes.bool.isRequired
}

export default Search;