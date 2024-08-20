import './style.sass'

import React from 'react';

import { SignupForm } from './components/SignupForm';

export const Signup: React.FC = () => {
    return (
        <div className="login">
            <SignupForm />
        </div>
    )
}