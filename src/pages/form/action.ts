import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../shared/utils/httpClient';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getFormsDatas = createAsyncThunk(
    'dashboard/getFormsDatas',
    async (_, { rejectWithValue }) => {
      try {
        const response = await httpClient.get('/api/v1/forms/', config)
        return response.data
      } catch (error) {
        return rejectWithValue('')
      }
    }
  )