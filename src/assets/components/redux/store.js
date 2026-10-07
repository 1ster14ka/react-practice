import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";
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
import storageModule from "redux-persist/lib/storage";
const storage = storageModule.default || storageModule;

const tasksPersistConfig = {
  key: "tasks",
  version: 1,
  storage,
};

const contactsPersistConfig = {
  key: "contacts",
  version: 1,
  storage,
};

const persistedTasksReducer = persistReducer(tasksPersistConfig, tasksReducer);
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer,
);

export const store = configureStore({
  reducer: {
    tasks: persistedTasksReducer,
    filters: filtersReducer,
    contacts: persistedContactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
