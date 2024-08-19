import '../../style.sass'

import React from 'react';

import { Button, Flex, Modal } from '@mantine/core';

interface RemoveModalProps {
    close: () => void
    opened: boolean
    handleRemoveDashboard: () => void
} 

export const RemoveModal: React.FC<RemoveModalProps> = ({ 
    close,
    opened, 
    handleRemoveDashboard
}) => {
    return (
        <Modal 
            centered
            opened={opened} 
            onClose={close}
            title="Delete your dashboard?" 
        >
            <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Button 
                    variant="filled" 
                    color="red" 
                    onClick={handleRemoveDashboard}
                >
                    Yes
                </Button>
                <Button 
                    variant="filled" 
                    color="green" 
                    onClick={close}
                >
                    No
                </Button>
            </Flex>
        </Modal>
    )
}