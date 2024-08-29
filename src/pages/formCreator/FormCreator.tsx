import './style.sass'

import React, { useState } from 'react';

import { HeaderForm } from './components/HeaderForm';
import { FormCreatorBox } from './components/FormCreatorBox';
import { ColorPicker } from './components/ColorPicker';
import { createForm } from '../form/action';
import { useAppDispatch } from '../../hooks';

export const FormCreator: React.FC = () => {  
  const dispatch = useAppDispatch();

  const currentUrl = window.location.pathname;
  let dashboardUuid = currentUrl.slice(7, currentUrl.length)

  const [defaultColor, setDefaultColor] = useState('#f0ebf8');

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<string>('');
  const [errorName, setErrorName] = useState<string>('');
  const [color, onChange] = useState<string>(defaultColor);
  const [defaultIconColor, setDefaultIconColor] = useState<string>('violet');

  const handleCreateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
  }

  const handleCreateDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  }

  const handlerColorChange = (newColor: string) => {
    setDefaultColor(newColor);
    setDefaultIconColor(newColor);
    onChange(newColor);
  };

  const onSubmit = () => {
    if (name.length < 3) {
      setErrorName('The name of form must contain at least 3 characters');
      return; 
    }

    dispatch(createForm({ name, description, color, is_active: false, dashboard_uuid: dashboardUuid }));
  }

  return (
    <div className='formCreator' style={{backgroundColor: defaultColor}}>
      <HeaderForm 
        name={name} 
        defaultIconColor={defaultIconColor}
        onSubmit={onSubmit} 
        handleCreateName={handleCreateName} 
      />
      
      <FormCreatorBox 
        error={error}
        errorName={errorName}
        name={name} 
        description={description}
        handleCreateName={handleCreateName} 
        handleCreateDescription={handleCreateDescription}
      />

      <ColorPicker 
        color={defaultColor}
        defaultIconColor={defaultIconColor}
        handlerColorChange={handlerColorChange}
      />
    </div>
  )
}