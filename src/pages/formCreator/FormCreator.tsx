import { HeaderForm } from './components/HeaderForm';
import './style.sass'

import React from 'react';

export const FormCreator: React.FC = () => {
  return (
    <div className='formCreator'>
      <HeaderForm />
      <h1>Create me!</h1> 
    </div>
  )
}