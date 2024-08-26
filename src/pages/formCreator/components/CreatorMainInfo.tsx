import '../style.sass'

import React from 'react';

import { Paper, Input } from '@mantine/core';

export const CreatorMainInfo: React.FC = ({ 
  handleCreateName, 
  handleCreateDescription,
  name, 
  description,
  error
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
        error={error}
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