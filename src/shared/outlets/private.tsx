import React from 'react'
import { useAppSelector } from '../../hooks'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateOutlet = () => {
  const user = useAppSelector((state) => state.user.data)
  return user ? <Outlet /> : <Navigate to="/login" />
}
