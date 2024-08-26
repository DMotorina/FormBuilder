import '../style.sass'

import React from 'react';

import { ThemeIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';

interface AddFormProps {
    uuid: string;
}

export const AddForm: React.FC<AddFormProps> = ({uuid}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/forms/${uuid}`);
    };

  return (
    <ThemeIcon 
        variant="transparent"
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
    >
        <IconPlus style={{ width: '80%', height: '80%' }} />
    </ThemeIcon>
  )
}