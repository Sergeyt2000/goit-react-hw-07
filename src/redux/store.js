import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
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

const persistContactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Only persist the items array (not necessary if you want to persist the whole state)
};
const persistFilterConfig = {
  key: "filter",
  storage,
  whitelist: ["name"], // Only persist the filter string
};

const persistedContactsReducer = persistReducer(persistContactsConfig, contactsReducer);
const persistedFiltersReducer = persistReducer(
  persistFilterConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);