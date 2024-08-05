import '../style.sass';

import React, { useState, useCallback } from 'react'
import { TextInput, PasswordInput, Button, Paper, Title, Text, Group } from '@mantine/core';

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }, [])

    const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const handleSubmit = useCallback(() => {
        onSubmit(email, password)
      }, [email, password])
    
    return (
        <Paper className="login__form" radius={0} p={30}>
            <Title order={2} className="login__title" ta="center" mt="md" mb={11}>
                Welcome back!
            </Title>

            <Text 
                size="md"  
                c="dimmed" 
                ta="center" 
                mb={20}
            >
                Welcome back! Please enter your details.
            </Text>

            <TextInput 
                label="Email" 
                placeholder="Enter your email" 
                size="md"
                value={email}
                onChange={handleEmailChange}
                name="email" 
                className='login__email'    
            />

            <PasswordInput 
                label="Password" 
                placeholder="Enter your password"  
                mt="md" 
                size="md" 
                value={password} 
                name="password" 
                className='login__password' 
                onChange={handlePasswordChange} 
            />

            <Button 
                fullWidth 
                mt="xl" 
                size="md"
                mb={30}
                onClick={() => handleSubmit()}
            >
                Sign in
            </Button> 

            <Group justify="center" gap="xs" align="baseline">
                <Text 
                    size="md"  
                    c="dimmed" 
                    ta="center" 
                    mb={20}
                >
                    Don’t have an account? 
                </Text>
                <Text 
                    component="a"
                    size="md"
                    href="/signup"
                    color="#DE8C73"
                    onClick={() => window.location.href = '/signup'}
                >
                    Sign up
                </Text>
            </Group>
        </Paper>
    )
}