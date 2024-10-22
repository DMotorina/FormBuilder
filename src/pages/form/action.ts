import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../shared/utils/httpClient';
import { Structure } from './types';

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
    shared: boolean;
    dashboard_uuid: string;
    structure: Structure
  },
  {
    uuid: string;
    name: string;
    description: string;
    color: string;
    shared: boolean;
    dashboard_uuid: string;
    structure: Structure
  },
  { rejectValue: {} }
>('form/createForm', 
  async ({ name, description, color, shared, dashboard_uuid, structure }, { rejectWithValue }) => {
    try {
      const response = await httpClient.post(
        '/api/v1/forms/', 
        { name, description, color, shared, dashboard_uuid, structure },
        config
      )

      console.log('--response', response)
      return response.data
    } catch (error) {
      return rejectWithValue({})
    }
  }
)

export const updateForm = createAsyncThunk<
{ uuid: string; 
  name: string
  description: string
  color: string
  shared: boolean;
  dashboard_uuid: string
  structure: Structure
},
{ uuid: string; 
  name: string
  description: string
  color: string
  shared: boolean;
  dashboard_uuid: string
  structure: Structure
},{ rejectValue: {} }
>(
  'dashboard/updateForm',
  async ({ uuid, name, description, color, shared, dashboard_uuid, structure }, { rejectWithValue }) => {
    try {
      const response = await httpClient.put(
        `/api/v1/forms/${uuid}`, 
        { name, description, color, shared, dashboard_uuid, structure },
        config
      )

      return response.data
    } catch (error) {
      return rejectWithValue({})
    }
  }
)