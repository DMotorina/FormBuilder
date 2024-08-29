import '../style.sass'

import React from 'react';

export const Form: React.FC = ({name, color}) => {
  return (
    <div className='form' style={{backgroundColor: color}}>
      <h1>{name}</h1>
    </div>
  )
}