import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { addDashboard, getDashboardsDatas, removeDashboard } from './action'
import { Dashboard } from './types'

interface State {
  loadingDashboard: boolean
  error: {} | null
  dashboards: Dashboard[] | null
}
  
  const initialState: State = {
    loadingDashboard: false,
    error: null,
    dashboards: [],
  }
  
  const dashboardSlice = createSlice<State, SliceCaseReducers<State>>({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getDashboardsDatas.pending, (state) => {
        state.loadingDashboard = true
      })
      builder.addCase(getDashboardsDatas.fulfilled, (state, { payload }) => {
        state.loadingDashboard = false
        state.dashboards = payload
      })
      builder.addCase(getDashboardsDatas.rejected, (state) => {
        state.loadingDashboard = false
      })
      builder.addCase(addDashboard.pending, (state) => {
        state.error = null
      })
      builder.addCase(addDashboard.fulfilled, (state, { payload }) => {
        state.dashboards = [...state.dashboards, payload]
      })
      builder.addCase(addDashboard.rejected, (state, { payload }) => {
        state.error = payload
      })
      builder.addCase(removeDashboard.pending, (state) => {
        state.error = null
      })
      builder.addCase(removeDashboard.fulfilled, (state, { payload }) => {        
        state.dashboards = state.dashboards?.filter(
          (element) => element.uuid !== payload.uuid
        );
      })
      builder.addCase(removeDashboard.rejected, (state, { payload }) => {
        state.error = payload
      })
    },
  })
  
  export default dashboardSlice.reducer
  