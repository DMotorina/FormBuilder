import './style.sass'

import React, { useEffect } from 'react';

import { getFormsDatas } from './action';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Group, Paper, Tabs } from '@mantine/core';

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
            <Tabs.Panel value={name} key={key} >
                <Group gap="xl"> 
                    <AddForm dashboardUuid={dashboardUuid} />

                    {forms?.map(({name, color}) => (
                        <Form name={name} color={color} />
                    ))}
                </Group>
            </Tabs.Panel>
        </div>
    )
}