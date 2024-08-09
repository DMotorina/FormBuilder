import * as React from 'react';
import { useAppDispatch } from '../../hooks';
import { logout } from '../login/action';
import { Button, Container } from '@mantine/core';
import { HeaderForm } from './components/headerForm';

export const MainPage = () => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <HeaderForm />

            <Container>
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
            </Container>
        </div>
    )
}