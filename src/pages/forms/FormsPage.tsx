import * as React from 'react';
import { QuestionForm } from './components/questionForm';
import { HeaderForm } from './components/headerForm';
import '@mantine/core/styles.css';

import './style.sass'
export const FormsPage = () => {
    return (
        <div>
            <HeaderForm />

            <QuestionForm />
        </div>
    )
}