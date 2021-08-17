

import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phoneReducer from './reducer';
import {
  persistStore, persistReducer,
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';


 
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: phoneReducer},
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})



export default { store/* , persistor  */};





/* const rootReducer = combineReducers({
    contacts: phoneReducer,
});
 */
/* const store = createStore(rootReducer, composeWithDevTools()) */







/* const persistConfig = {
  key: 'persistedReducer',
  storage,
    blacklist: ['filter'],
}


const rootReducer = combineReducers({
    contacts: phoneReducer,
}); */

/*  const persistedReducer = persistReducer(persistConfig, rootReducer);  */


/* const persistor = persistStore(store) */