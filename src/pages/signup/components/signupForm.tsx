import '../style.sass'

import React from 'react';

import { TextInput, PasswordInput, Button, Paper, Title, Checkbox } from '@mantine/core';

export const SignupForm: React.FC = () => {
    return (
        <Paper className="login__form" radius={0} p={30}>
            <Title order={2} className="login__title" ta="center" mt="md" mb={25}>
                Get Started Now
            </Title>

            <TextInput 
                label="Name" 
                placeholder="Enter your name" 
                size="md"
                mt="md" 
                name="name" 
                className='signup__name'    
            />

            <TextInput 
                label="Email" 
                placeholder="Enter your email" 
                size="md"
                mt="md" 
                name="email" 
                className='signup__email'    
            />

            <PasswordInput 
                label="Password" 
                placeholder="Enter your password"  
                mt="md" 
                size="md" 
                name="password" 
                className='signup__password' 
            />

            <Checkbox
                defaultChecked
                mt={20}
                label="I agree to the terms & policy"
            />

            <Button 
                fullWidth 
                mt="xl" 
                size="md"
                mb={30}
            >
                Sign up
            </Button> 
        </Paper>
    )
}