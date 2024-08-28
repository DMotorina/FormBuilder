import './style.sass'

import React, { useEffect } from 'react';

import { getFormsDatas } from './action';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Group, Paper, Tabs } from '@mantine/core';

import { Form } from './components/Form';
import { AddForm } from './components/addForm';

interface FormsProps {
    name: string
    uuid: string
} 

export const Forms: React.FC<FormsProps> = ({ name, uuid }) => {
    const dispatch = useAppDispatch()

    const loading = useAppSelector((state) => state.form.loadingForm)

    useEffect(() => {
        dispatch(getFormsDatas())
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='forms'>
            <Tabs.Panel value={name} key={uuid} >
                <Group gap="xl"> 
                    <Paper component="button" className='forms__add'>
                        <AddForm uuid={uuid} />
                    </Paper>

                    <Form />
                </Group>
            </Tabs.Panel>
        </div>
    )
}