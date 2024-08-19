import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Tabs, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FormsPage } from '../forms/FormsPage';
import { AddModal } from './components/modals/addModal';
import { addDashboard } from './action';
import { Dashboard } from './components/dashboard';
import { IconPlus } from '@tabler/icons-react';


export const Dashboards = () => {
    const dispatch = useAppDispatch()
    
    const dashboards = useAppSelector((state) => state.dashboard.dashboards)

    const [showMessage, setShowMessage] = React.useState(false);
    const [error, setError] = useState('');

    const [opened, { open, close }] = useDisclosure(false);
    
    const handleAddClick = () => {
        setShowMessage(true);
    };

    const [text, setText] = useState("")

    const onChangeTextDashboard = (event) => {  
        setText(event.target.value)
        setError('');
    }

    const handleAddDashboard = () => {
        if (text.length < 3) {
            setError('The name must contain at least 3 characters');
            return; 
        }

        dispatch(addDashboard({name: text}))
        close();
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

            <AddModal 
                opened={opened} 
                close={close}
                text={text}
                error={error}
                handleAddDashboard={handleAddDashboard}
                onChangeTextDashboard={onChangeTextDashboard}
            />
        </div>
    )
}