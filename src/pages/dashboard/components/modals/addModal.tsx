import React from 'react';

import { Button, Modal, TextInput } from '@mantine/core';

import '../../style.sass'

interface AddModalProps {
    text: string
    error: string
    close: () => void
    opened: boolean
    handleAddDashboard: () => void
    onChangeTextDashboard: (event: React.ChangeEvent<HTMLInputElement>) => void
} 

export const AddModal: React.FC = ({ 
    text,
    error, 
    close, 
    opened, 
    handleAddDashboard, 
    onChangeTextDashboard,  
}: AddModalProps) => {
    return (
        <Modal opened={opened} onClose={close} title="Enter name of your dashboard" centered>
            <TextInput  
                value={text}
                error={error}
                onChange={onChangeTextDashboard}
            />
            <Button variant="filled" mt={20} onClick={() => handleAddDashboard()}>Add</Button>
        </Modal>
    )
}