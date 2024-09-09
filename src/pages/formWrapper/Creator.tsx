import React from 'react';

import { FormCreator } from "../formCreator/FormCreator";

export const Creator: React.FC<{ dashboardUuid?: string }> = ({ dashboardUuid }) => {
    return (
        <FormCreator dashboardUuid={dashboardUuid} />
    )
};