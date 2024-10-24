import './style.sass'

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FormCreatorBox } from '../formFeatures/FormCreatorBox';
import { ColorPicker } from '../formFeatures/ColorPicker';
import { createForm } from '../../action';
import { useAppDispatch } from '../../../../hooks';
import { FormHeader } from '../formFeatures/FormHeader';

export const FormCreator: React.FC<{ dashboardUuid?: string }> = ({ dashboardUuid }) => {  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

    

    dispatch(createForm({ name, description, color, shared: false, dashboard_uuid: dashboardUuid, structure: [
      {
          slug: 'checkbox',
          label: 'Checkbox Field',
          category: 'boolean', 
          params: {
              required: true,
              help_text: '',
              default_value: true,
              display_format: 'check'
          }
      }
    ]
  }));
    navigate('/');
  }

  return (
    <div className='formCreator' style={{backgroundColor: defaultColor}}>
      <FormHeader 
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