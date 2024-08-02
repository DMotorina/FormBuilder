import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Outlet } from 'react-router-dom'

import { checkAuth } from '../../pages/login/action'

export const InitOutlet = () => {
  const dispatch = useAppDispatch()

  const isAuthChecked = useAppSelector((state) => state.user.isAuthChecked)

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  return isAuthChecked ? <Outlet /> : null
}
