import './style.sass'

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { updateForm } from '../form/action';
import { HeaderForm } from '../formCreator/components/HeaderForm';
import { FormCreatorBox } from '../formCreator/components/FormCreatorBox';
import { ColorPicker } from '../formCreator/components/ColorPicker';
import { Form } from '../form/types';

export const FormEditor: React.FC<{ values?: Form }> = ({ values }) => {  
    let { color, dashboard_uuid, description, is_active, name, structure, uuid } = values;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [defaultColor, setDefaultColor] = useState(color);

    const [newName, setNewName] = useState<string>(name)
    const [newDescription, setNewDescription] = useState<string>(description)
    const [error, setError] = useState<string>('');
    const [errorName, setErrorName] = useState<string>('');
    const [colorInPicker, onChange] = useState<string>(defaultColor);
    const [defaultIconColor, setDefaultIconColor] = useState<string>(color);

    const handleCreateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setNewName(newName);
    }

    const handleCreateDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = event.target.value;
        setNewDescription(newDescription);
    }

    const handlerColorChange = (newColor: string) => {
        setDefaultColor(newColor);
        setDefaultIconColor(newColor);
        onChange(newColor);
    };

    const onUpdate = () => {
        if (name.length < 3) {
        setErrorName('The name of form must contain at least 3 characters');
        return; 
        }

        dispatch(updateForm({ 
            name: newName, 
            description: newDescription, 
            color: defaultColor, 
            is_active: false, 
            dashboard_uuid, 
            structure, 
            uuid 
        }));
        navigate('/');
    }

    return (
        <div className='formCreator' style={{backgroundColor: defaultColor}} key={uuid}>
        <HeaderForm 
            name={newName} 
            defaultIconColor={defaultIconColor}
            onSubmit={onUpdate} 
            handleCreateName={handleCreateName} 
        />
        
        <FormCreatorBox 
            error={error}
            errorName={errorName}
            name={newName} 
            description={newDescription}
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