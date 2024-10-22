import './style.sass'

import React, { useState } from 'react';

import { Text, Paper, Stack, Group, Checkbox, Button } from '@mantine/core';

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
  const [fields, setFields] = useState<number[]>([1]);

  const addField = () => {
    setFields((prevFields) => [...prevFields, prevFields.length + 1]);
  };


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

        {fields.map((field, index) => (
          <CreatorField key={index} />
        ))}

        <Button variant="outline" color="gray" radius="xl" onClick={addField}>+</Button>
      </Stack>
    </div>
  )
}