import '../style.sass'

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, Paper, ThemeIcon, Flex } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';

interface FormProps {
  name: string;
  color: string;
  uuid: string;
  dashboard_uuid: string;
}

export const Form: React.FC<FormProps> = ({ name, uuid, dashboard_uuid, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/forms/${uuid}/edit`);
  };

  return (
    <div className='form' onClick={handleClick} key={uuid}>
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