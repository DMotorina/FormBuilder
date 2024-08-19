import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Container, Flex, Modal, Tabs, TextInput, ThemeIcon } from '@mantine/core';
import { Forms } from './forms';
import { useDisclosure } from '@mantine/hooks';
import { FormsPage } from '../forms/FormsPage';
import { NewDashboardForm } from './components/newDashboardForm';
import { addDashboard } from './action';
import { Dashboard } from './dashboard';
import { IconPlus, IconSettingsUp } from '@tabler/icons-react';


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
                <Tabs defaultValue="Default Dashboard">
                    <Tabs.List justify="center">
                        {dashboards?.map(({name, uuid}) => (
                            <Dashboard 
                                key={uuid} 
                                uuid={uuid}
                                name={name}
                                handleAddClick={handleAddClick}
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