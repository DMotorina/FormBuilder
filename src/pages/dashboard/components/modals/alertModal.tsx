import * as React from 'react';
import { Modal } from '@mantine/core';
import '../../style.sass'
export const AlertModal = ({ opened, close}) => {
    return (
        <Modal opened={opened} onClose={close} title="You can't delete the last dashboard" centered>
        </Modal>
    )
}