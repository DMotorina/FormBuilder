import '../style.sass'

import React from 'react';

import { Text, Paper, ThemeIcon, Flex } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';

interface FormProps {
  name: string;
  color: string;
}

export const Form: React.FC<FormProps> = ({ name, color }) => {
  return (
    <div className='form'>
      <Paper shadow="xs" className='form__box' style={{backgroundColor: color}}></Paper>
      <Flex
        mih={50}
        align="center"
        direction="row"
        wrap="wrap"
        style={{justifyContent: 'space-between'}}
      >
        <Text fw={500} pl={10}>{name}</Text>
        <ThemeIcon 
          style={{ cursor: 'pointer' }}
          variant="transparent" 
          color="rgba(97, 97, 97, 1)"
        >
          <IconDotsVertical style={{ width: '90%', height: '90%' }} />
        </ThemeIcon>
      </Flex>
    </div>
  )
}