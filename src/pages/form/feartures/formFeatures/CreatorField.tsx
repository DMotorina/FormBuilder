import './style.sass'

import React from 'react';

import { Paper, Stack, Text, Group, Checkbox, Input, Button, Menu, rem, ThemeIcon } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconAlignJustified, IconFocus, IconColumns, IconArrowsLeftRight, IconTrash } from '@tabler/icons-react';

export const CreatorField: React.FC = () => {
    return (
        <>
            <Paper shadow="xs" radius="md" p="xl" style={{width: '40%'}}>
                <Group justify="space-between">
                    <Input size="lg" variant="unstyled" placeholder="Input component" />
                    <Menu position="top" shadow="md" width={250} offset={-70}> 
                        <Menu.Target>
                            <Button variant='transparent'>
                                <ThemeIcon variant="white" radius="md" size="md" color="gray">
                                    <IconFocus style={{ width: '70%', height: '70%' }} />
                                </ThemeIcon>
                                <Text>One from the list</Text>
                            </Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item leftSection={<IconAlignJustified style={{ width: '70%', height: '70%' }} />}>
                                <Text>Text (line)</Text>
                            </Menu.Item>

                            <Menu.Item leftSection={<IconFocus style={{ width: '70%', height: '70%' }} />}>
                                <Text>One from the list</Text>
                            </Menu.Item>

                            <Menu.Item leftSection={<IconColumns style={{ width: '70%', height: '70%' }} />}>
                                <Text>Text (paragraph)</Text>
                            </Menu.Item>
                        </Menu.Dropdown>
                        </Menu>
                </Group>
            </Paper>
        </>
    )
}