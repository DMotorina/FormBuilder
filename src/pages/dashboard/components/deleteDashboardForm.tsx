import * as React from 'react';
import { Button, Flex, Modal, TextInput } from '@mantine/core';
import '../style.sass'

export const DeleteDashboardForm = ({ opened, close }) => {
    return (
        <Modal opened={opened} title="Delete your dashboard?" centered>
            <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Button variant="filled" color="red">Yes</Button>
                <Button variant="filled" color="green" onClick={close}>No</Button>
            </Flex>
        </Modal>
    )
}