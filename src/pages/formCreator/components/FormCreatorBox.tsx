import '../style.sass'

import React from 'react';

import { Text, Paper, Stack, Group, Checkbox } from '@mantine/core';

import { CreatorMainInfo } from './CreatorMainInfo';

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

        <Paper shadow="xs" radius="md" p="xl" style={{width: '40%'}}>
          <Stack>
            <Text>Question without title</Text>

            <Group>
              <Checkbox
                defaultChecked
                radius="xl"
              />
                <Text>Option 1</Text>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </div>
  )
}