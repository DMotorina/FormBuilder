import React from 'react';
import { Tabs } from '@mantine/core';

import './style.sass'

export const Form = ({name, uuid}) => {
    return (
        <div className='formPage'>
            <Tabs.Panel value={name} key={uuid} >
                i'm form of dashboard - {name}
            </Tabs.Panel>
        </div>
    )
}