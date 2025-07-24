 import { createSlice } from "@reduxjs/toolkit";
 import { register, login, logOut, curentUser, updateUserInfo } from "./authOperations";

 const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
  },
  token: null,
  isLogin: false,
  isCurentUser: false,
 }

 export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => builder
  .addCase(register.pending, (state) => state)
  .addCase(register.rejected, (state) => state)
  .addCase(register.fulfilled, (state, action) => {
    state.user.name = action.payload.name,
    state.user.email = action.payload.email,
    state.token = action.payload.token,
    state.user.avatarUrl = action.payload.avatarUrl,
    state.isLogin = true,
    state.isCurentUser = false
  })
  .addCase(login.pending, (state) => state)
  .addCase(login.rejected, (state) => state)
  .addCase(login.fulfilled, (state, action) => {
    state.user.name = action.payload.name,
    state.user.email = action.payload.email,
    state.token = action.payload.token,
    state.user.avatarUrl = action.payload.avatarUrl,
    state.isLogin = true,
    state.isCurentUser = false
  })
  .addCase(logOut.pending, state => state)
  .addCase(logOut.rejected, () => initialState)
  .addCase(logOut.fulfilled, () => initialState)

  .addCase(curentUser.pending, state => {state.isCurentUser = true})
  .addCase(curentUser.rejected, () => initialState)
  .addCase(curentUser.fulfilled, (state, action) => {
    state.user.name = action.payload.name,
    state.user.email = action.payload.email,
    state.isLogin = true,
    state.user.avatarUrl = action.payload.avatarUrl,
    state.isCurentUser = false
  })
  .addCase(updateUserInfo.pending, state => state)
  .addCase(updateUserInfo.rejected, state => state)
  .addCase(updateUserInfo.fulfilled, (state, action) => {
    state.user.name = action.payload.name,
    state.user.email = action.payload.email,
    state.token = action.payload.token,
    state.user.avatarUrl = action.payload.avatarUrl,
    state.isLogin = true,
    state.isCurentUser = false
  })
 })