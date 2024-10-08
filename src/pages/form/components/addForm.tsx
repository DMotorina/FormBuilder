import '../style.sass'

import React from 'react';

import { Text, Paper } from '@mantine/core';

import { useNavigate } from 'react-router-dom';
import { Plus } from '../../../assets/plus';
import { FormWrapper } from '../../formWrappers/FormWrapper';

interface AddFormProps {
    dashboardUuid: string;
}

export const AddForm: React.FC<AddFormProps> = ({dashboardUuid}) => {
    const navigate = useNavigate();

    const handleClick = (type: string) => () => {
        navigate(`/forms/${dashboardUuid}`);
        
    };

    return (
        <div className='formAdd' onClick={handleClick('new')}>
            <Paper 
                shadow="xs" 
                className='formAdd__box'
            >
                <Plus />
            </Paper>
            <Text fw={500} pt={10} style={{textAlign: 'center'}}>Create a form</Text>
        </div>
    )
}