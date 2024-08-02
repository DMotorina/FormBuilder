import React from 'react'
import { useAppSelector } from '../../hooks'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthOutlet = () => {
  const user = useAppSelector((state) => state.user.data)
  return user ? <Navigate to="/" /> : <Outlet />
}
