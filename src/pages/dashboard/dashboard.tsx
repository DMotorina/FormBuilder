import React from 'react';

import { Tabs, Button, ThemeIcon } from '@mantine/core';

import './style.sass'
import { useDisclosure } from '@mantine/hooks';
import { DeleteDashboardForm } from './components/deleteDashboardForm';
import { IconSettingsUp } from '@tabler/icons-react';

interface DashboardProps {
    key: string
    name: string
    handleAddClick: () => void
} 

export const Dashboard: React.FC<DashboardProps> = ({key, name, handleAddClick}) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Tabs.Tab 
                value={name}
                key={key} 
                onClick={handleAddClick}
            >
                {name}

                <Button 
                    mb={3}
                    size="xs"
                    variant="transparent"
                    className='dashboards__delete'
                    onClick={open}
                >
                    <ThemeIcon variant="transparent">
                        <IconSettingsUp style={{ width: '80%', height: '80%' }} />
                    </ThemeIcon>
                </Button>

                
            </Tabs.Tab>

            <DeleteDashboardForm 
                opened={opened} 
                close={close}
            />
        </>
    )
}