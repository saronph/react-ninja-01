import React from 'react';

/**
 * - Passar o style sempre como objeto.
 * - No style utilizar camelcase, ao invez do padrão. Ex: background-color
 */

function Square({color}) {
  return (
    <div style={{
      backgroundColor: color,
      height: '100px',
      width: '100px'
    }} />
  )  
}

Square.defaultProps = {
  color: 'yellow'
}

export default Square;