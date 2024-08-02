import * as React from 'react';
import { useAppDispatch } from '../../hooks';
import { logout } from '../login/action';

export const MainPage = () => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>I'm main page!</h1>
            <button 
                onClick={() => dispatch(logout())}>Log out</button>
        </div>
    )
}