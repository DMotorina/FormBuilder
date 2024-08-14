import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Button, Container, Flex, Modal, Tabs, TextInput } from '@mantine/core';
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
            <Tabs defaultValue="first">
                <Tabs.List>
                    {dashboards?.map(({name, uuid}) => (
                        <Tabs.Tab 
                            value={name}
                            key={uuid} 
                            className='test' 
                            onClick={handleAddClick}
                        >
                            {name}
                            <Button variant="transparent">X</Button>
                        </Tabs.Tab>
                    ))}
                <Button variant="outline" ml="auto" mr={10} onClick={open} mt={10}>Add new dashboard</Button>
                </Tabs.List>
            </Tabs>
            </div>

            {showMessage && <FormsPage />}

            <NewDashboardForm 
                        opened={opened} 
                        close={close}
                        text={text}
                        handleAddDashboard={handleAddDashboard}
                        onChangeTextDashboard={onChangeTextDashboard}
                    />
        </div>
    )
}