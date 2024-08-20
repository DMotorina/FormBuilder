import '../style.sass'

import React from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Menu, ThemeIcon, Input, rem } from "@mantine/core"
import { IconTriangleInvertedFilled, IconTrash } from "@tabler/icons-react"

import { RemoveModal } from './modals/RemoveModal';
import { WarningModal } from './modals/WarningModal';

interface DashboardMenuProps {
    name: string
    dashboardsLen: number | undefined
    handleRemoveDashboard: () => void
}

export const DashboardMenu: React.FC<DashboardMenuProps> = ({ 
    name, 
    dashboardsLen, 
    handleRemoveDashboard 
}) => {
    const [opened, { open, close }] = useDisclosure(false);

    const getDesiredModal = (): JSX.Element => {        
        if((dashboardsLen ?? 0) > 1 ) {
            return (
                <RemoveModal 
                    close={close}
                    opened={opened} 
                    handleRemoveDashboard={handleRemoveDashboard}
                />
            ) 
        } 

        return (
            <WarningModal close={close} opened={opened} />
        )
    }

    return (
        <>
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

            {getDesiredModal()}
        </>  
    )
}
