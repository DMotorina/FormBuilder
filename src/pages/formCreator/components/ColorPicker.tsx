import '../style.sass'

import React, { useEffect, useRef, useState } from 'react';

import { IconPalette } from '@tabler/icons-react';
import { Affix, Group, HoverCard, ThemeIcon, Text } from '@mantine/core';
import { ColorPickerForm } from './ColorPickerForm';

interface ColorPickerProps {
    color: string
    getIconColor: () => string
    handlerColorChange: (newColor: string) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ 
    color, 
    getIconColor, 
    handlerColorChange 
}) => {
    const formRef = useRef<HTMLDivElement>(null);

    const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);

    const handleOpenColorPicker = () => {
        setOpenColorPicker(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(event.target as Node)) {
            setOpenColorPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (  
        <div className='colorPicker'>
            <Affix position={{ bottom: 20, right: 20 }}>
                {!openColorPicker ? 
                    (
                        <Group justify="center">
                            <HoverCard width={280} shadow="md">
                                <HoverCard.Target>
                                    <ThemeIcon 
                                        color={getIconColor()}
                                        variant={getIconColor() === 'violet' ? 'transparent' : undefined}
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleOpenColorPicker}
                                    >
                                        <IconPalette style={{ width: '100%', height: '100%' }} />
                                    </ThemeIcon>
                                </HoverCard.Target>

                                <HoverCard.Dropdown>
                                    <Text 
                                        ta="center"
                                        fw={900}
                                        variant="gradient"
                                        gradient={{ from: 'grape', to: 'yellow', deg: 122 }}
                                    >
                                        Click me and style your form
                                    </Text>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        </Group>
                    ) 
                    :
                    (
                        <div ref={formRef}>
                            <ColorPickerForm color={color} handlerColorChange={handlerColorChange} />
                        </div>
                    )
                }
            </Affix>
        </div>
    )
}