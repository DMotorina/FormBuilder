import '../style.sass'

import React, { useState } from 'react';

import { removeDashboard, updateDashboard } from '../action';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import { Tabs } from '@mantine/core';

import { DashboardMenu } from './DashboardMenu';

interface DashboardProps {
    uuid: string
    name: string
} 

export const Dashboard: React.FC<DashboardProps> = ({ uuid, name }) => {
    const dispatch = useAppDispatch();
    
    const dashboards = useAppSelector((state) => state.dashboard.dashboards);
    const dashboardsLen: number | undefined = dashboards?.length;

    const [currentdName, setCurrentdName] = useState(name)
    const [newName, setNewName] = useState('')
    const [error, setError] = useState<string>('');

    const handleRemoveDashboard = () => {
        dispatch(removeDashboard(uuid))
    }

    const handleRenameDashboard = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newNameValue = event.target.value;

        if (newNameValue.length < 3) {
            setError('The name must contain at least 3 characters');
            return; 
        }

        setNewName(newNameValue);

        dispatch(updateDashboard({ uuid, name: newNameValue }));

        setCurrentdName(newNameValue);
    }

    return (
        <Tabs.Tab 
            value={currentdName}
            key={uuid} 
        >
            {currentdName}

            <DashboardMenu 
                error={error}
                currentdName={currentdName} 
                dashboardsLen={dashboardsLen}
                handleRemoveDashboard={handleRemoveDashboard}
                handleRenameDashboard={handleRenameDashboard}
            />
        </Tabs.Tab>
    )
}

