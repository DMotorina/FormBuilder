import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { FormCreator } from '../formCreator/FormCreator';
import { FormEditor } from '../formEditor/FormEditor';
import { getFormsDatas } from '../form/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Form } from '../form/types';

interface Params {
    dashboardUuid: string | undefined
    formUuid: string | undefined
}  

export const FormWrapper: React.FC = () => {
    const dispatch = useAppDispatch();

    const { dashboardUuid, formUuid } = useParams<Params>()

    useEffect(() => {
        dispatch(getFormsDatas())
    }, [dispatch])

    if(formUuid) {
        const form = useAppSelector((state) => state.form.forms?.filter(f => f.uuid === formUuid))

        return (
            <>
                {form?.map((values: Form) => (
                    <FormEditor values={values} />
                ))}
            </>
        )
    }

    return <FormCreator dashboardUuid={dashboardUuid} />
};