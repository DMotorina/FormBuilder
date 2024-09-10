import './style.sass'

import React from 'react';

import { Text, Paper, Stack, Group, Checkbox } from '@mantine/core';

import { CreatorMainInfo } from './CreatorMainInfo';
import { CreatorField } from './CreatorField';

interface FormCreatorBoxProps {
  errorName: string
  error: string
  name: string
  description: string
  handleCreateName: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleCreateDescription: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormCreatorBox: React.FC<FormCreatorBoxProps> = ({ 
  errorName,
  error,
  name, 
  description, 
  handleCreateName, 
  handleCreateDescription, 
}) => {
  return (
    <div className='formCreatorBox'>
      <Stack
        h={300}
        align="center"
        justify="center"
      >
        <CreatorMainInfo 
          error={error}
          errorName={errorName} 
          name={name}
          description={description}
          handleCreateName={handleCreateName} 
          handleCreateDescription={handleCreateDescription}
        />

        <CreatorField />
      </Stack>
    </div>
  )
}