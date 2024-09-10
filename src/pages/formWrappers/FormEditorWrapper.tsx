import React, { useEffect } from 'react'

import { Form } from '../form/types'
import { getFormsDatas } from '../form/action'

import { useAppDispatch, useAppSelector } from "../../hooks"

import { FormEditor } from '../formEditor/FormEditor'
import { useParams } from 'react-router-dom'

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
                <FormEditor values={values} />
            ))}
        </>
    )
};