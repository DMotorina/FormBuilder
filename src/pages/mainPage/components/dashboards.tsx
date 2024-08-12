import * as React from 'react';
import { useAppSelector } from '../../../hooks';
import { Button, Container, Flex } from '@mantine/core';
import { Forms } from './forms';


export const Dashboards = () => {
    const dashboards = useAppSelector((state) => state.dashboard.data)

    const [showMessage, setShowMessage] = React.useState(false);

    const handleAddClick = () => {
        setShowMessage(true);
    };

    return (
        <div>
            <div className='dashboards'>
                <Flex
                    direction={{ base: 'row', sm: 'row' }}
                    gap={{ base: 'sm', sm: 'lg' }}
                    justify={{ base: 'center', sm: 'center' }}
                >
                    {dashboards?.map(({name, uuid}) => (
                        <Button 
                            key={uuid} 
                            className='test' 
                            onClick={handleAddClick}
                        >
                            {name}
                        </Button>
                    ))}
                    <Button>+</Button>
                </Flex>
            </div>

            {showMessage && <Forms />}
        </div>
    )
}