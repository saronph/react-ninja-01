import React from 'react';

/**
 * As props podem nao ser obrigatórias, sendo necessário uma default
 * Os defaults são substituidos caso seja apresentado uma props
 */

function Title(props) {
  return (
  <h1>Olá {props.name + ' ' + props.lastname} !</h1>
  )
}

Title.defaultProps = {
  name: 'Medeiros',
  lastname: 'Sem sobrenome'  
}

export default Title;