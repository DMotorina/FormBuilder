import * as React from 'react';
import { useAppSelector } from '../../../hooks';

export const Dashboards = () => {
    const dashboards = useAppSelector((state) => state.dashboard.data)

    return (
        <div>
            {dashboards?.map(({name, uuid}) => (
                <div key={uuid}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}