import './style.sass'

import React from 'react';

import { SignupForm } from './components/signupForm';

export const Signup: React.FC = () => {
    return (
        <div className="login">
            <SignupForm />
        </div>
    )
}