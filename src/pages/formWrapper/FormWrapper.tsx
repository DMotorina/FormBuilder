import React from 'react';

import { useParams } from 'react-router-dom'

import { Creator } from './Creator'
import { Editor } from './Editor'

type FormWrapperProps = {
    name: 'edit' | 'new'
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ name }) => {
    const { dashboardUuid, formUuid } = useParams()

    const mapper: Record<'edit' | 'new', JSX.Element> = {
        edit: <Editor formUuid={formUuid} />,
        new: <Creator dashboardUuid={dashboardUuid} />,
    }

    return mapper[name]
};
