import React from 'react';

import { FormCreator } from "../formCreator/FormCreator";
import { useParams } from 'react-router-dom';

export const FormCreatorWrapper: React.FC = () => {
    const { dashboardUuid } = useParams()

    return (
        <FormCreator dashboardUuid={dashboardUuid} />
    )
};