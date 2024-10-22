import './style.sass'

import React, { useEffect, useState } from 'react';

import { Paper, Stack, Text, Group, Checkbox, Input, Button, Menu, rem, ThemeIcon } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconAlignJustified, IconFocus, IconColumns, IconArrowsLeftRight, IconTrash } from '@tabler/icons-react';
import { useAppDispatch } from '../../../../hooks';
import { updateForm } from '../../action';
import { FieldCheckbox } from './fields/FieldCheckbox';
import { FieldText } from './fields/FieldText';
import { FieldTextarea } from './fields/FieldTextarea';

export const CreatorField: React.FC = () => {
    const dispatch = useAppDispatch();

    const [selectedItem, setSelectedItem] = useState<string | null>('check')
    const [helpText, setHelpText] = useState<string>("")

    const handleSelectItem = (item: string) => {
        setSelectedItem(item)
    }

    const createHelpText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHelpText(event.target.value)
    }

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
                            <Menu.Item 
                                leftSection={<IconAlignJustified 
                                style={{ width: '70%', height: '70%' }} />}  
                                onClick={() => handleSelectItem('text')}                            
                            >
                                <Text>Text (line)</Text>
                            </Menu.Item>

                            <Menu.Item 
                                leftSection={<IconFocus style={{ width: '70%', height: '70%' }} />} 
                                onClick={() => handleSelectItem('check')}
                            >
                                <Text>One from the list</Text>
                            </Menu.Item>

                            <Menu.Item 
                                leftSection={<IconColumns style={{ width: '70%', height: '70%' }} />} 
                                onClick={() => handleSelectItem('text_area')}
                            >
                                <Text>Text (paragraph)</Text>
                            </Menu.Item>
                        </Menu.Dropdown>
                        </Menu>
                </Group>

                <Text>
                    {selectedItem === 'text' && <FieldText />}
                    {selectedItem === 'check' && <FieldCheckbox createHelpText={createHelpText} />}
                    {selectedItem === 'text_area' && <FieldTextarea />}
                </Text>
            </Paper>
        </>
    )
}