import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { propertiesReducer, PropertiesState } from "./reducer/Properties";

export interface RootState {
  properties: PropertiesState;
  // Aquí puedes agregar otras propiedades del estado si las tienes
}

const rootReducer = combineReducers({
  properties: propertiesReducer,
  // Aquí puedes agregar otros reducers si los tienes
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
