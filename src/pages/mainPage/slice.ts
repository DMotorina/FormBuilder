import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { getDashboardsDatas } from './action'
import { Dashboard } from './types'

interface State {
    loadingDashboard: boolean
    error: string | null
    data: Dashboard | null
  }
  
  const initialState: State = {
    loadingDashboard: false,
    error: null,
    data: null,
  }
  
  const dashboardSlice = createSlice<State, SliceCaseReducers<State>>({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getDashboardsDatas.fulfilled, (state, { payload }) => {
        state.loadingDashboard = false
        state.data = payload
      })
      builder.addCase(getDashboardsDatas.rejected, (state) => {
        state.loadingDashboard = false
      })
    },
  })
  
  export default dashboardSlice.reducer
  