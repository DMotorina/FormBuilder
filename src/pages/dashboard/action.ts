import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../shared/utils/httpClient';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getDashboardsDatas = createAsyncThunk(
  'dashboard/getDashboardsDatas',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpClient.get('/api/v1/dashboards/', config)
      return response.data
    } catch (error) {
      return rejectWithValue('')
    }
  }
)

export const updateDashboard = createAsyncThunk<
{ uuid: string; name: string },
{ uuid: string; name: string },
{ rejectValue: {} }
>(
  'dashboard/updateDashboard',
  async ({ uuid, name }, { rejectWithValue }) => {
    try {
      const response = await httpClient.put(
        `/api/v1/dashboards/${uuid}`, 
        { name },
        config
      )

      return response.data
    } catch (error) {
      return rejectWithValue({})
    }
  }
)

export const addDashboard = createAsyncThunk<
  { name: string },
  { name: string },
  { rejectValue: {} }
>('dashboard/addDashboard', 
  async ({ name }, { rejectWithValue }) => {
    try {
      const response = await httpClient.post(
        '/api/v1/dashboards/', 
        { name },
        config
      )
      return response.data
    } catch (error) {
      return rejectWithValue({})
    }
  }
)

export const removeDashboard = createAsyncThunk<
  { uuid: string },
  string,
  { rejectValue: {} }
>('dashboard/removeDashboard', 
  async (uuid, { rejectWithValue }) => {
    try {
      await httpClient.delete(
        `/api/v1/dashboards/${uuid}`, 
        config
      )
      return { uuid }
    } catch (error) {
      return rejectWithValue({})
    }
  }
)