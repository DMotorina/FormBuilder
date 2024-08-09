import * as React from 'react';
import { useAppDispatch } from '../../hooks';
import { logout } from '../login/action';
import { Button } from '@mantine/core';

export const MainPage = () => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>I'm main page!</h1>

            <Button 
                component='a'
                href="/forms"
                fullWidth 
                mt="xl" 
                size="md"
                mb={30}
            >
                Создать форму
            </Button> 

            <button 
                onClick={() => dispatch(logout())}>Log out</button>
        </div>
    )
}