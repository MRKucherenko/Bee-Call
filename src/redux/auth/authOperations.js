import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://phone-book-b.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
  axios.defaults.hea4.common.Authorization = '';
}

export const register = createAsyncThunk ('auth-register', async (creadentials, thunkAPI) => {
  try {
    const {data:{data}} = await axios.post('/api/auth/register', creadentials)
    setAuthHeader(data.token);

    return data;
  } catch (error) {

    return thunkAPI.rejectWithValue(error.message);
  }
})

export const login = createAsyncThunk('auth-login', async (creadentials, thunkAPI) => {
  try {
    const {data:{data}} = await axios.post('/api/auth/login', creadentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {

    return thunkAPI.rejectWithValue(error.message);
  }
})

export const logOut = createAsyncThunk ('auth-logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    clearAuthHeader();
  } catch (error) {

    return thunkAPI.rejectWithValue(error.message);
  }
})

export const curentUser = createAsyncThunk('user-curent', async(_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistetToken = state.auth.token;
    if(!persistetToken) {
      return thunkAPI.rejectWithValue('No User Data');
    }
    setAuthHeader(persistetToken);
    const {data:{data}} = await axios.post('api/user/curent');

    return data;
  } catch (error) {

    return thunkAPI.rejectWithValue(error.message);
  }
})

export const updateUserInfo = createAsyncThunk('user-update', async(creadentials, thunkAPI) => {
  try {
    const {data:{data}} =  await axios.patch('/api/user/info', creadentials);

    return data;
  } catch (error) {
    
    return thunkAPI.rejectWithValue(error.message);
  }
})