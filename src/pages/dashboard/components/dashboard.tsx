import '../style.sass'

import React from 'react';

import { removeDashboard } from '../action';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import { Tabs } from '@mantine/core';

import { DashboardMenu } from './dashboardMenu';

interface DashboardProps {
    uuid: string
    name: string
} 

export const Dashboard: React.FC<DashboardProps> = ({ uuid, name }) => {
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

