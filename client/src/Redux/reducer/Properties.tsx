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
    filterPropertiesByCategory: (state, action) => {
      const { nameCategory } = action.payload;
      state.propertiesFilter = state.propertiesFilter.filter(
        (property) =>
          property.Categories[0].category_name.toLowerCase() ===
          nameCategory.toLowerCase()
      );
    },
    filterPropertiesByCondition: (state, action) => {
      const { nameCondition } = action.payload;
      state.propertiesFilter = state.propertiesFilter.filter(
        (property) =>
          property.Categories[0].condition_name.toLowerCase() ===
          nameCondition.toLowerCase()
      );
    },
    filterPropertiesByCoveredM2: (state, action) => {
      const { numMin, numMax } = action.payload;
      state.propertiesFilter = state.propertiesFilter.filter((property) => {
        if (property.m2_covered > numMin && property.m2_covered < numMax) {
          return true;
        }
        return false;
      });
    },
    filterPropertiesByTotalM2: (state, action) => {
      const { numMin, numMax } = action.payload;
      state.propertiesFilter = state.propertiesFilter.filter((property) => {
        if (property.m2_totals > numMin && property.m2_totals < numMax) {
          return true;
        }
        return false;
      });
    },
    filterPropertiesByRooms: (state, action) => {
      const { numBedrooms } = action.payload;
      state.propertiesFilter = state.propertiesFilter.filter(
        (property) => property.bedrooms <= numBedrooms
      );
    },
    filterPropertiesByBathrooms: (state, action) => {
      const { numBathrooms } = action.payload;
      state.propertiesFilter = state.propertiesFilter.filter(
        (property) => property.bathrooms <= numBathrooms
      );
    },
    filterPropertiesByGarage: (state, action) => {
      if (action.payload) {
        state.propertiesFilter = state.propertiesFilter.filter(
          (property) => property.garage === true
        );
      }
    },
    filterPropertiesByGarden: (state, action) => {
      if (action.payload) {
        state.propertiesFilter = state.propertiesFilter.filter(
          (property) => property.Gardens.length > 0
        );
      }
    },
    filterPropertiesByAntiquity: (state, action) => {
      const { numAntiquity } = action.payload;
      state.propertiesFilter = state.propertiesFilter.filter(
        (property) => property.antiquity <= numAntiquity
      );
    },
    filterPropertiesByInput: (state, action) => {},
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
export const { actions: propertiesActions, reducer: propertiesReducer } =
  propertiesSlice;
