import '../style.sass'

import React from 'react';

import { Text, Paper, Stack, Divider, Input, Group, Checkbox } from '@mantine/core';

export const FormCreatorFields: React.FC = () => {
  return (
    <div className='formCreatorFields'>
        <Stack
            h={300}
            align="center"
            justify="center"
        >
            <Paper shadow="xs" radius="md" p="xl" style={{width: '40%'}}>
                <Input style={{borderBottom: '2px solid #f0ebf8'}} variant="unstyled" size="xl" placeholder="New Form" />

                <Input style={{borderBottom: '2px solid #f0ebf8'}} variant="unstyled" size="md" placeholder="Description" />
            </Paper>

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