import './style.sass'

import React from 'react';

import { ColorPicker } from '@mantine/core';

interface ColorPickerFormProps {
    color: string
    handlerColorChange: (newColor: string) => void
}

export const ColorPickerForm: React.FC<ColorPickerFormProps> = ({ color, handlerColorChange }) => {
    return (
        <ColorPicker value={color} onChange={handlerColorChange} />
    )
}