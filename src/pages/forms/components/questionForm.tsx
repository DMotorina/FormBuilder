import * as React from 'react';
import { TextInput } from '@mantine/core';


export const QuestionForm = () => {
    return (
        <div>
            <TextInput
                size="md"
                radius="xs"
                label="Input label"
                description="Input description"
                placeholder="Input placeholder"
            />
        </div>
    )
}