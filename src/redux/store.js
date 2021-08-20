import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import phoneReducer from "./slice";
import { phonebookApi } from "./contactsApi";
import { filter } from "./filterReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { logger } from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  phonebookApi.middleware,
  logger,
];

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);

export default { store /* , persistor  */ };

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
