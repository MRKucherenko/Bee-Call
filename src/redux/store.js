import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactApi } from './contacts/contacts';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer :{
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware,
})

export const persistor = persistStore(store);