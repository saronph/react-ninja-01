import React from 'react';

/**
 * - Prop 'children' vai renderizar tudo que estiver dentro do componente,
 * podendo ser qualquer coisa, texto outro componente e etc...
 */

function Button({children}) {
  return (
    <button>{children}</button>
  )
}

export default Button;