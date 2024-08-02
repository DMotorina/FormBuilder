import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { login, checkAuth, logout } from './action'
import { User } from './types'

interface State {
  loginLoading: boolean
  isAuthChecked: boolean
  error: string | null
  data: User | null
}

const initialState: State = {
  loginLoading: false,
  isAuthChecked: false,
  error: null,
  data: null,
}

const userSlice = createSlice<State, SliceCaseReducers<State>>({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loginLoading = false
      state.data = payload
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loginLoading = false
      state.error = payload ?? null
    })
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.isAuthChecked = true
      state.data = payload
    })
    builder.addCase(checkAuth.rejected, (state) => {
      state.isAuthChecked = true
    })
    builder.addCase(logout.pending, (state) => {
      state.data = null
    })
  },
})

export default userSlice.reducer
