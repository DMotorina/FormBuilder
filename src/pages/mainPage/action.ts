import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '../../shared/utils/httpClient'

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