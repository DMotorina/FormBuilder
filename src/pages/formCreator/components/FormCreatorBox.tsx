import '../style.sass'

import React, { useState } from 'react';

import { Text, Paper, Stack, Group, Checkbox } from '@mantine/core';

import { CreatorMainInfo } from './CreatorMainInfo';

export const FormCreatorBox: React.FC = ({ onSubmit }) => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<string>('');

  const handleCreateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleCreateDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }

  const handleMouseEvent = () => {
    onSubmit({  name: name, description: description })
  }

  return (
    <div className='formCreatorBox' onMouseLeave={handleMouseEvent}>
      <Stack
        h={300}
        align="center"
        justify="center"
      >
        <CreatorMainInfo 
          handleCreateName={handleCreateName} 
          handleCreateDescription={handleCreateDescription}
          name={name}
          description={description}
          error={error} 
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