import React from 'react';

import { Tabs, Buton, ThemeIcon, Menu, Input, rem } from '@mantine/core';

import '../style.sass'
import { useDisclosure } from '@mantine/hooks';
import { RemoveModal } from './modals/removeModal';
import { IconTrash, IconTriangleInvertedFilled } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { removeDashboard } from '../action';
import { WarningModal } from './modals/warningModal';

interface DashboardProps {
    key: string
    name: string
    handleAddClick: () => void
} 

export const Dashboard: React.FC<DashboardProps> = ({uuid, name, handleAddClick}) => {
    const dispatch = useAppDispatch()
    
    const dashboards = useAppSelector((state) => state.dashboard.dashboards)

    const [opened, { open, close }] = useDisclosure(false);


    const handleRemoveDashboard = () => {
        dispatch(removeDashboard(uuid))
    }

    return (
        <>
            <Tabs.Tab 
                value={name}
                key={uuid} 
                onClick={handleAddClick}
            >
                {name}

                <Menu trigger="click" position="bottom" withArrow offset={0}>
                    <Menu.Target>
                        <ThemeIcon 
                            variant="transparent"
                            className='dashboards__delete'
                        >
                            <IconTriangleInvertedFilled style={{ width: '35%', height: '35%' }} />
                        </ThemeIcon>
                    </Menu.Target>
                    
                    <Menu.Dropdown>
                        <Input placeholder={name} className='dashboard__rename'/>

                        <Menu.Divider />

                        <Menu.Item 
                            color="red"
                            leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                            onClick={open}
                        >
                            Delete dashboard
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>                
            </Tabs.Tab>

            {dashboards?.length > 1 ? 
            (
                <RemoveModal 
                    opened={opened} 
                    close={close}
                    handleRemoveDashboard={handleRemoveDashboard}
                />
            ) 
                : 
            (
                <WarningModal 
                    opened={opened} 
                    close={close}
                />
            )
            }
        </>
    )
}
