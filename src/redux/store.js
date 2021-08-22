import { configureStore } from '@reduxjs/toolkit';

import contactsSlice from './slice';

const store = configureStore({
  reducer: {
    phoneBook: contactsSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;