import React, { useEffect } from 'react'

import { Form } from '../form/types'
import { getFormsDatas } from '../form/action'

import { useAppDispatch, useAppSelector } from "../../hooks"

import { FormEditor } from '../formEditor/FormEditor'

export const Editor: React.FC<{formUuid?: string}> = ({formUuid}) => {
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