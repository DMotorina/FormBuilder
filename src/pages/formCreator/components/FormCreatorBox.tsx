import '../style.sass'

import React from 'react';

import { FormCreatorFields } from './FormCreatorFields';

export const FormCreatorBox: React.FC = () => {
  return (
    <div className='formCreatorBox'>
      <FormCreatorFields />
    </div>
  )
}