import './style.sass'

import React, { useState } from 'react';

import { HeaderForm } from './components/HeaderForm';
import { FormCreatorBox } from './components/FormCreatorBox';
import { ColorPicker } from './components/ColorPicker';

export const FormCreator: React.FC = () => {  
  const currentUrl = window.location.pathname;
  let dashboardUuid = currentUrl.slice(7, currentUrl.length)

  const onSubmit = ({ name, description, color }) => {
    return { name, description, color, is_active: false, dashboard_uuid: dashboardUuid }
  }
  
  const [defaultColor, setDefaultColor] = useState(() => {
    return localStorage.getItem('backgroundColor') || '#f0ebf8';
  });

  const handlerColorChange = (newColor: string) => {
    setDefaultColor(newColor);
    localStorage.setItem('backgroundColor', newColor); 
  };


  return (
    <div className='formCreator' style={{backgroundColor: defaultColor}}>
      <HeaderForm onSubmit={onSubmit}/>
      <FormCreatorBox onSubmit={onSubmit} />

      <ColorPicker  onSubmit={onSubmit} handlerColorChange={handlerColorChange} defaultColor={defaultColor}/>
    </div>
  )
}