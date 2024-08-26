import './style.sass'

import React, { useCallback } from 'react';

import { HeaderForm } from './components/HeaderForm';
import { FormCreatorBox } from './components/FormCreatorBox';
import { useAppDispatch } from '../../hooks';

export const FormCreator: React.FC = () => {  
  const currentUrl = window.location.pathname;
  let dashboardUuid = currentUrl.slice(7, currentUrl.length)

  const onSubmit = ({ name, description }) => {
  }

  return (
    <div className='formCreator'>
      <HeaderForm onSubmit={onSubmit}/>
      <FormCreatorBox onSubmit={onSubmit} />
    </div>
  )
}