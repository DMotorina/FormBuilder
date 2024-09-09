import './style.sass'

import React, { useState } from 'react';

import { addDashboard } from './action';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Tabs, ThemeIcon } from '@mantine/core';

import { Forms } from '../form/Forms';
import { Dashboard } from './components/Dashboard';
import { AddModal } from './components/modals/AddModal';

export const Dashboards: React.FC = () => {
    const dispatch = useAppDispatch();
    
    const dashboards = useAppSelector((state) => state.dashboard.dashboards);

    const [opened, { open, close }] = useDisclosure(false);

    const [text, setText] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onChangeTextDashboard = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        setError('');
    }

    const handleAddDashboard = () => {
        if (text.length < 3) {
            setError('The name must contain at least 3 characters');
            return; 
        }

        dispatch(addDashboard({name: text}));
        close();
    }


    return (
        <>
            <div className='dashboards'>
                <Tabs defaultValue="Default Dashboard">
                    <Tabs.List justify="center">
                        {dashboards?.map(({name, uuid}) => (
                            <Dashboard 
                                key={uuid} 
                                uuid={uuid}
                                name={name}
                            />
                        ))}
                        <ThemeIcon 
                            variant="transparent"
                            onClick={open} 
                            className='dashboards__add'
                            style={{ cursor: 'pointer' }}
                        >
                            <IconPlus style={{ width: '80%', height: '80%' }} />
                        </ThemeIcon>
                    </Tabs.List>

                    {dashboards?.map(({name, uuid}) => (
                        <Forms name={name} key={uuid} dashboardUuid={uuid} />
                    ))}
                </Tabs>
            </div>

            <AddModal 
                opened={opened} 
                close={close}
                text={text}
                error={error}
                handleAddDashboard={handleAddDashboard}
                onChangeTextDashboard={onChangeTextDashboard}
            />
        </>
    )
}