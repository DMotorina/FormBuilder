import '../style.sass'

import React from 'react';

import { Paper, Input } from '@mantine/core';

interface CreatorMainInfoProps {
  error: string
  errorName: string
  name: string
  description: string
  handleCreateName: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleCreateDescription: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CreatorMainInfo: React.FC<CreatorMainInfoProps> = ({ 
  errorName,
  error,
  name, 
  description,
  handleCreateName, 
  handleCreateDescription,
}) => {
  return (
    <Paper shadow="xs" radius="md" p="xl" style={{width: '40%'}}>
      <Input 
        style={{borderBottom: '2px solid #f0ebf8'}} 
        variant="unstyled" 
        size="xl" 
        placeholder="New Form" 
        onChange={handleCreateName}
        value={name}
        error={errorName}
      />

      <Input 
        style={{borderBottom: '2px solid #f0ebf8'}} 
        variant="unstyled" 
        size="md" 
        placeholder="Description" 
        value={description}
        onChange={handleCreateDescription}
        error={error}
      />
    </Paper>
  )
}