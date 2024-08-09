import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../login/action';
import { Button, Container } from '@mantine/core';
import { HeaderForm } from './components/headerForm';
import { Dashboards } from './components/dashboards';
import { getDashboardsDatas } from './action';

export const MainPage = () => {
    const loading = useAppSelector((state) => state.dashboard.loadingDashboard)

    const dispatch = useAppDispatch()
  
    React.useEffect(() => {
      dispatch(getDashboardsDatas())
    }, [dispatch])
  
    if (loading) {
      return <h1>Loading...</h1>
    }

    return (
        <div>
            <HeaderForm />

            <Dashboards />
        </div>
    )
}