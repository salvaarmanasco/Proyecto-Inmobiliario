// Importa las funciones necesarias de Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Property from "../../Interfaces/Property";

export interface PropertiesState {
  properties: Property[];
  propertiesDetail: Property[];
  propertiesFilter: Property[];
  loading: boolean;
  error: string | null;
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
export const createProperty = createAsyncThunk(
  "properties/createProperty",
  async (newProperty: any) => {
    const response = await axios.post(
      `http://localhost:3001/properties`,
      newProperty
    );
    return response.data;
  }
);

// Define el slice de Redux que manejará el estado de las propiedades
const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
    propertiesDetail: [],
    propertiesFilter: [],
    loading: false,
    error: null,
  } as PropertiesState,
  reducers: {
    filterProperties: (state, action) => {
      const {
        categories,
        condition,
        garage,
        garden,
        totalM2,
        coveredM2,
        numAntiquity,
        numBedrooms,
        numBathrooms,
        inputLocalitation,
        clean,
      } = action.payload;

      if (clean) {
        state.propertiesFilter = state.properties;
      } else {
        state.propertiesFilter = state.properties
          ?.filter((property) => {
            if (garage && !property.garage) {
              return false;
            }
            if (
              inputLocalitation &&
              inputLocalitation.toLowerCase() !==
                property.States?.[0]?.state_name.toLowerCase()
            ) {
              return false;
            }
            if (garden && property.Gardens.length === 0) {
              return false;
            }
            if (coveredM2 && property.m2_covered < coveredM2) {
              return false;
            }
            if (totalM2 && property.m2_totals < totalM2) {
              return false;
            }
            if (numAntiquity && numAntiquity < property.antiquity) {
              return false;
            }
            if (numBathrooms && numBathrooms < property.bathrooms) {
              return false;
            }
            if (numBedrooms && numBedrooms < property.bedrooms) {
              return false;
            }
            return true;
          })
          ?.filter((property) => {
            if (
              condition &&
              condition.find(
                (condition: string) =>
                  condition.toLowerCase() ===
                  property.Conditions[0].condition_name.toLowerCase()
              ) === undefined
            ) {
              return false;
            }

            return true;
          })
          ?.filter((property) => {
            if (
              categories &&
              categories.length > 0 &&
              categories.some(
                (category: string) =>
                  property.Categories[0].category_name.toLowerCase() ===
                  category.toLowerCase()
              )
            ) {
              return true;
            }

            return false;
          });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProperties.fulfilled, (state, action) => {
      state.properties = action.payload;
      state.propertiesFilter = action.payload;
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
      state.propertiesDetail = action.payload;
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
    builder.addCase(createProperty.fulfilled, (state, action) => {
      state.properties.push(action.payload);
    });
  },
});

// Exporta la acción asíncrona y el reducer generado por createSlice
export const { filterProperties } = propertiesSlice.actions;
export const { actions: propertiesActions, reducer: propertiesReducer } =
  propertiesSlice;
