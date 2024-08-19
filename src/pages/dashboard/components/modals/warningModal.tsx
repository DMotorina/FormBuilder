import '../../style.sass'

import React from 'react';

import { Modal } from '@mantine/core';

interface RWarningModalProps {
    close: () => void
    opened: boolean
} 

export const WarningModal: React.FC<RWarningModalProps> = ({ 
    close,
    opened, 
}) => {
    return (
        <Modal 
            centered
            opened={opened} 
            onClose={close} 
            title="You can't delete the last dashboard" 
        >
        </Modal>
    )
}