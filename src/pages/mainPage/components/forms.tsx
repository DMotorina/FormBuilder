import * as React from 'react';
import { useAppSelector } from '../../../hooks';
import { Button, Text } from '@mantine/core';


export const Forms = () => {
    const dashboards = useAppSelector((state) => state.dashboard.data)

    return (
        <div>
                    {dashboards?.map(({name, uuid}) => (
                        <Text 
                            key={uuid} 
                            className='test' 
                            fw={700}
                        >
                            {name}
                        </Text>
                    ))}
        </div>
    )
}