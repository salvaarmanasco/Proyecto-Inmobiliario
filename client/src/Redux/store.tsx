import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { propertiesReducer, PropertiesState } from "./reducer/Properties";
import { tablesReducer, TablesState } from "./reducer/Tables";

export interface RootState {
  properties: PropertiesState;
  tables: TablesState;
  // Aquí puedes agregar otras propiedades del estado si las tienes
}

const rootReducer = combineReducers({
  properties: propertiesReducer,
  tables: tablesReducer,
  // Aquí puedes agregar otros reducers si los tienes
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
