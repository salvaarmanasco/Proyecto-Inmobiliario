import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { propertiesReducer, PropertiesState } from "./reducer/Properties";
import { tablesReducer, TablesState } from "./reducer/Tables";
import { imageReducer } from "./reducer/Images";

export interface RootState {
  properties: PropertiesState;
  tables: TablesState;
  // Aquí puedes agregar otras propiedades del estado si las tienes
}

const rootReducer = combineReducers({
  properties: propertiesReducer,
  tables: tablesReducer,
  images: imageReducer,
  // Aquí puedes agregar otros reducers si los tienes
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
