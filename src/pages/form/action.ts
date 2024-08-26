import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../shared/utils/httpClient';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getFormsDatas = createAsyncThunk(
    'form/getFormsDatas',
    async (_, { rejectWithValue }) => {
      try {
        const response = await httpClient.get('/api/v1/forms/', config)
        return response.data
      } catch (error) {
        return rejectWithValue('')
      }
    }
  )

export const createForm = createAsyncThunk<
  {
    uuid: string;
    name: string;
    description: string;
    color: string;
    is_active: boolean;
    dashboard_uuid: string;
  },
  {
    name: string;
    description: string;
    color: string;
    is_active: boolean;
    dashboard_uuid: string;
    rejectValue: {};
  }
>('form/createForm', 
  async ({ name, description, color, is_active, dashboard_uuid }, { rejectWithValue }) => {
    try {
      const response = await httpClient.post(
        '/api/v1/forms/', 
        { name, description, color, is_active, dashboard_uuid },
        config
      )
      return response.data
    } catch (error) {
      return rejectWithValue({})
    }
  }
)