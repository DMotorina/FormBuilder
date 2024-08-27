import '../style.sass'

import React, { useState } from 'react';

import { ColorPicker, Text } from '@mantine/core';

export const ColorPickerForm: React.FC = ({ value, onChange }) => {
    return (
        <>
            <ColorPicker value={value} onChange={onChange} />
        </>
    )
}