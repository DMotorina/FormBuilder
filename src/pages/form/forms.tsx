import './style.sass'

import React, { useEffect } from 'react';

import { getFormsDatas } from './action';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Tabs } from '@mantine/core';

import { Form } from './components/form';

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
        <div className='formPage'>
            <Tabs.Panel value={name} key={uuid} >
                <Form />
            </Tabs.Panel>
        </div>
    )
}