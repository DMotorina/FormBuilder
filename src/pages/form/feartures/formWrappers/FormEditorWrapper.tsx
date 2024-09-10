import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Form } from '../../types';

import { getFormsDatas } from '../../action';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

import { FormEditor } from '../formEditor/FormEditor';

export const FormEditorWrapper: React.FC = () => {
    const { formUuid } = useParams()

    const dispatch = useAppDispatch()

    const form = useAppSelector((state) => state.form.forms?.filter(f => f.uuid === formUuid))

    useEffect(() => {
        dispatch(getFormsDatas())
    }, [dispatch])
    
    return (
        <>
            {form?.map((values: Form) => (
                <FormEditor key={values.uuid} values={values} />
            ))}
        </>
    )
};