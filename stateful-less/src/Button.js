import React from 'react';

/**
 * - Prop 'children' vai renderizar tudo que estiver dentro do componente,
 * podendo ser qualquer coisa, texto outro componente e etc...
 */

function Button({children, handleClick}) {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button;