import React from 'react';
import Button from './Button';

function LikeButton() {
  return (
    <Button handleClick={() => alert('Curtiu')}>Curtir</Button>
  )
}

export default LikeButton;