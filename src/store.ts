import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/login/slice'
import dashboardReducer from './pages/dashboard/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
