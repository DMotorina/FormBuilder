import './style.sass'

import React, { useEffect } from 'react';

import { getFormsDatas } from './action';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Group, Tabs } from '@mantine/core';

import { Form } from './components/Form';
import { AddForm } from './components/addForm';

interface FormsProps {
    name: string
    key: string
    dashboardUuid: string
} 

export const Forms: React.FC<FormsProps> = ({ name, key, dashboardUuid }) => {
    const dispatch = useAppDispatch()

    const loading = useAppSelector((state) => state.form.loadingForm)
    const forms = useAppSelector((state) => state.form.forms?.filter(f => f.dashboard_uuid === dashboardUuid))

    useEffect(() => {
        dispatch(getFormsDatas())
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='forms'>
            <Tabs.Panel value={name} key={key} p={30}>
                <Group gap="xl"> 
                    <AddForm dashboardUuid={dashboardUuid} />

                    {forms?.map(({name, uuid, dashboard_uuid, color}) => (
                        <Form 
                            name={name} 
                            uuid={uuid}
                            dashboard_uuid={dashboard_uuid} 
                            color={color} 
                        />
                    ))}
                </Group>
            </Tabs.Panel>
        </div>
    )
}