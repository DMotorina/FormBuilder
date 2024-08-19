import * as React from 'react';
import { Button, Modal, TextInput } from '@mantine/core';
import '../../style.sass'

export const NewDashboardForm = ({ opened, close, error, handleAddDashboard, onChangeTextDashboard, text }) => {
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