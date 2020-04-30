import React from 'react';

function Title(props) {
  return (
  <h1>Olá {props.name + ' ' + props.lastname.first + props.lastname.last} !</h1>
  )
}

Title.defaultProps = {
  name: 'Sem nome',
  lastname: 'Sem sobrenome'  
}

export default Title;