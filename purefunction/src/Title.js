import React from 'react';

/**
 * - Crases passam os valores como string (o espaço entre nome e sobrenome não é ignorado), 
 * inserindo ${} se tornam objetos.
 * - Passar o nome das props é possível, para não precisar colocar o 'props.' em tudo
 */

function Title({name, lastname}) {
  return (
  <h1>Olá {`${name} ${lastname}`} !</h1>
  )
}

Title.defaultProps = {
  name: 'Sem nome',
  lastname: 'Sem sobrenome'  
}

export default Title;