import React from 'react';

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