import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import { createForm, getFormsDatas } from './action'

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
    name: 'form',
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
      builder.addCase(createForm.fulfilled, (state, { payload }) => {
        const { dashboard_uuid } = payload;
          
        state.forms = [...state.forms, payload]
      })
      builder.addCase(createForm.rejected, (state, { payload }) => {
        state.error = payload
      })
      builder.addCase(createForm.pending, (state) => {
        state.error = null
      })
    },
})
  
export default formSlice.reducer