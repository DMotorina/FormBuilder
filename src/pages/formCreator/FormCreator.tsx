import './style.sass'

import React, { useEffect, useState } from 'react';

import { HeaderForm } from './components/HeaderForm';
import { FormCreatorBox } from './components/FormCreatorBox';
import { ColorPicker } from './components/ColorPicker';

export const FormCreator: React.FC = () => {  
  const currentUrl = window.location.pathname;
  let dashboardUuid = currentUrl.slice(7, currentUrl.length)

  const [defaultColor, setDefaultColor] = useState(() => {
    let newColor = localStorage.getItem(`backgroundColor-${dashboardUuid}`)
    return newColor || '#f0ebf8';
  });

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<string>('');
  const [errorName, setErrorName] = useState<string>('');
  const [color, onChange] = useState<string>(defaultColor);

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
    localStorage.setItem(`backgroundColor-${dashboardUuid}`, newColor); 
    onChange(newColor);
  };

  const getIconColor = () => {
    return localStorage.getItem(`backgroundColor-${dashboardUuid}`) || 'violet'
  }

  const onSubmit = () => {
    if (name.length < 3) {
      setErrorName('The name of form must contain at least 3 characters');
      return; 
    }

    return { name, description, color, is_active: false, dashboard_uuid: dashboardUuid }
  }

  return (
    <div className='formCreator' style={{backgroundColor: defaultColor}}>
      <HeaderForm 
        name={name} 
        getIconColor={getIconColor}
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
        getIconColor={getIconColor}
        handlerColorChange={handlerColorChange}
      />
    </div>
  )
}