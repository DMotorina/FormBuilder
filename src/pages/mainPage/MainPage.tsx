import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { HeaderForm } from './components/headerForm';
import { Dashboards } from '../dashboard/dashboards';
import { getDashboardsDatas } from '../dashboard/action';

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
        <div className='main'>
            <HeaderForm />
            <Dashboards />
        </div>
    )
}