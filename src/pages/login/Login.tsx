import React, {useCallback} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from './action';
import { LoginForm } from './components/LoginForm';

export const Login = () => {
    const dispatch = useAppDispatch()

    const { error } = useAppSelector((state) => state.user)
  
    const onSubmit = useCallback(
      (email: string, password: string) => {
        dispatch(login({ email, password }))
      },
      [dispatch]
    )

    return (
        <div>
            {error ? <p className="error-message"> {error} </p> : null}
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}