import React from 'react';
import PropTypes from 'prop-types';

/**
 * - Button espera uma função em 'handleClick' quando for utilizado.
 * - Pode passar propType como obrigatório, erro aparece no console...
 * - Conferir tipos de propTypes ir em 'facebook.github.io/react', Docs, 
 * Reusable components
 */

function Button({children, handleClick}) {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default Button;