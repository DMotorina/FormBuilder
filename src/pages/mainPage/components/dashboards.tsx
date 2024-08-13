import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Button, Container, Flex, Modal, TextInput } from '@mantine/core';
import { Forms } from './forms';
import { useDisclosure } from '@mantine/hooks';
import { FormsPage } from '../../forms/FormsPage';
import { NewDashboardForm } from './newDashboardForm';
import { addDashboard } from '../action';


export const Dashboards = () => {
    const dispatch = useAppDispatch()
    
    const dashboards = useAppSelector((state) => state.dashboard.dashboards)

    const [showMessage, setShowMessage] = React.useState(false);

    const [opened, { open, close }] = useDisclosure(false);
    
    const handleAddClick = () => {
        setShowMessage(true);
    };

    const [text, setText] = useState("")

    const onChangeTextDashboard = (event) => {  
        setText(event.target.value)
    }

    const handleAddDashboard = () => {
        dispatch(addDashboard({name: text}))
    }

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

                    <NewDashboardForm 
                        opened={opened} 
                        close={close}
                        text={text}
                        handleAddDashboard={handleAddDashboard}
                        onChangeTextDashboard={onChangeTextDashboard}
                    />

                    <Button onClick={open}>+</Button>
                </Flex>
            </div>

            {showMessage && <FormsPage />}
        </div>
    )
}