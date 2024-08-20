import './style.sass'

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Header } from './components/Header';
import { Dashboards } from '../dashboard/dashboards';
import { getDashboardsDatas } from '../dashboard/action';

export const Main: React.FC = () => {
  const dispatch = useAppDispatch()

  const loading = useAppSelector((state) => state.dashboard.loadingDashboard)
  
  useEffect(() => {
    dispatch(getDashboardsDatas())
  }, [dispatch])

  if (loading) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div className='main'>
      <Header />
      <Dashboards />
    </div>
  )
}