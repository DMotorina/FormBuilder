import './style.sass'

import React from 'react';

import { HeaderForm } from './components/HeaderForm';
import { FormCreatorBox } from './components/FormCreatorBox';

export const FormCreator: React.FC = () => {
  return (
    <div className='formCreator'>
      <HeaderForm />
      <FormCreatorBox />
    </div>
  )
}