import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loadingReducer from "./Slices/loading";

const persistLoadingConfig = {
  key: "settings",
  storage,
  whitelist: ["isLoading"],
};

const store = configureStore({
  reducer: {
    isLoading: persistReducer<ReturnType<typeof loadingReducer>>(
      persistLoadingConfig,
      loadingReducer
    ),
    // middleware: (defaultMiddleware) =>
    //   defaultMiddleware({
    //     serializableCheck: false,
    //   }),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);

export default store;
