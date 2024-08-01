import React, { useState, useCallback } from 'react'

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }, [])

    const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const handleSubmit = useCallback(() => {
        console.log(email, password)
      }, [email, password])
    
    return (
        <div>
            <label>
                Email: 
                <input 
                    value={email} 
                    onChange={handleEmailChange} 
                    name="email" 
                    className='email' 
                />
            </label>

            <label>
                Password: 
                <input 
                    value={password} 
                    name="password" 
                    className='password' 
                    onChange={handlePasswordChange} 
                />
            </label>
            <button 
                type="submit"
                onClick={() => handleSubmit()}
            >
                Enter
            </button>
        </div>
    )
}