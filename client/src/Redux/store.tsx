import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { propertiesReducer, PropertiesState } from "./reducer/Properties";
import { tablesReducer, TablesState } from "./reducer/Tables";
import { imageReducer } from "./reducer/Images";
import { UsersState, usersReducer } from "./reducer/Users";

export interface RootState {
  properties: PropertiesState;
  tables: TablesState;
  users: UsersState;
  // Aquí puedes agregar otras propiedades del estado si las tienes
}

const rootReducer = combineReducers({
  properties: propertiesReducer,
  tables: tablesReducer,
  images: imageReducer,
  users: usersReducer,
  // Aquí puedes agregar otros reducers si los tienes
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
