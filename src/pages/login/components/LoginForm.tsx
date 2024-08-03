import React, { useState, useCallback } from 'react'
import { TextInput, PasswordInput, Button, Paper, Title } from '@mantine/core';

import '../style.sass';

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
            <Paper className="form" radius={0} p={30}>
            <Title order={2} className="title" ta="center" mt="md" mb={50}>
                Welcome back!
            </Title>
            <TextInput 
                label="Email" 
                placeholder="Enter your email" 
                size="md"
                value={email}
                onChange={handleEmailChange}
                name="email" 
                className='email'    
            />

            <PasswordInput 
                label="Password" 
                placeholder="Enter your password"  
                mt="md" 
                size="md" 
                value={password} 
                name="password" 
                className='password' 
                onChange={handlePasswordChange} 
            />

            <Button 
                fullWidth 
                mt="xl" 
                size="md"
                onClick={() => handleSubmit()}
            >
                Sign in
            </Button>

            {/* <label>
                Email: 
                <input 
                    value={email} 
                    onChange={handleEmailChange} 
                    name="email" 
                    className='email' 
                />
            </label> */}

            {/* <label>
                Password: 
                <input 
                    value={password} 
                    name="password" 
                    className='password' 
                    onChange={handlePasswordChange} 
                />
            </label> */}
            {/* <button 
                type="submit"
                onClick={() => handleSubmit()}
            >
                Enter
            </button> */}
            </Paper>
    )
}