import '../style.sass'

import React from 'react';

import { Text, Paper } from '@mantine/core';

export const Form: React.FC = ({ name, color }) => {
  return (
    <div className='form'>
      <Paper shadow="xs" className='form__box' style={{backgroundColor: color}}></Paper>
      <Text fw={500} pt={10} style={{textAlign: 'center'}}>{name}</Text>
    </div>
  )
}