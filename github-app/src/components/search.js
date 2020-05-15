import React from 'react';
import Proptypes from 'prop-types';

function Search({ handleSearch }) {
  return (
    <div className='search'>
      <input 
      type='search' 
      placeholder='Digite o nome do usuário do Github'
      onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: Proptypes.func.isRequired,
}

export default Search;