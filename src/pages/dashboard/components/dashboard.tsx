import '../style.sass'

import React from 'react';

import { removeDashboard } from '../action';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import { Tabs } from '@mantine/core';

import { DashboardMenu } from './dashboardMenu';

interface DashboardProps {
    uuid: string
    name: string
    handleAddClick: () => void
} 

export const Dashboard: React.FC<DashboardProps> = ({ uuid, name, handleAddClick }) => {
    const dispatch = useAppDispatch();
    
    const dashboards = useAppSelector((state) => state.dashboard.dashboards);
    const dashboardsLen: number | undefined = dashboards?.length;

    const handleRemoveDashboard = () => {
        dispatch(removeDashboard(uuid))
    }

    return (
        <Tabs.Tab 
            value={name}
            key={uuid} 
            onClick={handleAddClick}
        >
            {name}

            <DashboardMenu 
                name={name} 
                dashboardsLen={dashboardsLen}
                handleRemoveDashboard={handleRemoveDashboard}
            />
        </Tabs.Tab>
    )
}

