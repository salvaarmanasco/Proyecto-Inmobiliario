// Importa las funciones necesarias de Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface PropertiesState {
  properties: Property[];
  loading: boolean;
  error: string | null;
}

// Define la interfaz para cada propiedad
export interface Property {
  id: number;
  name: string;
  antiquity: number;
  address: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  environments: number;
  pool: boolean;
  elevator: boolean;
  floor_th: number;
  orientation: string;
  m2_totals: number;
  m2_covered: number;
  garage: boolean;
  amenities: boolean;
  description: string;
  furnished: boolean;
  balcony: boolean;
  sign: boolean;
  lat: number;
  long: number;
  deleted: boolean;
}

// Crea una acción asíncrona de Redux con createAsyncThunk
export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties", // nombre de la acción
  async () => {
    const response = await axios.get("http://localhost:3001/properties");
    return response.data;
  }
);
export const fetchPropertiesId = createAsyncThunk(
  "properties/fetchPropertiesId",
  async (id: any) => {
    const response = await axios.get(`http://localhost:3001/properties/${id}`);
    return response.data;
  }
);

// Define el slice de Redux que manejará el estado de las propiedades
const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
    loading: false,
    error: null,
  } as PropertiesState,
  reducers: {},
  extraReducers: (builder) => {
    // Añade el reducer generado por createAsyncThunk para manejar los resultados de la acción asíncrona
    builder.addCase(fetchProperties.fulfilled, (state, action) => {
      // Actualiza el estado con los datos recibidos de la acción asíncrona
      state.properties = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProperties.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProperties.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar las propiedades";
    });
    builder.addCase(fetchPropertiesId.fulfilled, (state, action) => {
      state.properties = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchPropertiesId.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPropertiesId.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar las propiedades";
    });
  },
});

// Exporta la acción asíncrona y el reducer generado por createSlice
export const { actions: propertiesActions, reducer: propertiesReducer } =
  propertiesSlice;
