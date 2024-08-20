import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import { getFormsDatas } from './action'

import { Form } from "./types"

interface State {
    loadingForm: boolean
    error: {} | null
    forms: Form[] | null
}

const initialState: State = {
    loadingForm: false,
    error: null,
    forms: [],
  }
  
const formSlice = createSlice<State, SliceCaseReducers<State>>({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getFormsDatas.pending, (state) => {
        state.loadingForm = true
      })
      builder.addCase(getFormsDatas.fulfilled, (state, { payload }) => {
        state.loadingForm = false
        state.forms = payload
      })
      builder.addCase(getFormsDatas.rejected, (state) => {
        state.loadingForm = false
      })
    },
})
  
export default formSlice.reducer