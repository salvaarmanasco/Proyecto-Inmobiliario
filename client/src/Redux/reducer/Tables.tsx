import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface TablesState {
  category: [];
  condition: [];
  country: [];
  garden: [];
  services: [];
  state: [];
  loading: boolean;
  error: string | null;
}

// Acciones asincronicas
export const fetchCategory = createAsyncThunk(
  "tables/fetchCategory",
  async () => {
    const response = await axios.get(`http://localhost:3001/category/`);
    return response.data;
  }
);
export const fetchCondition = createAsyncThunk(
  "tables/fetchCondtion",
  async () => {
    const response = await axios.get(`http://localhost:3001/condition/`);
    return response.data;
  }
);
export const fetchCountry = createAsyncThunk(
  "tables/fetchCountry",
  async () => {
    const response = await axios.get(`http://localhost:3001/country/`);
    return response.data;
  }
);
export const fetchGarden = createAsyncThunk("tables/fetchGarden", async () => {
  const response = await axios.get(`http://localhost:3001/garden/`);
  return response.data;
});
export const fetchServices = createAsyncThunk(
  "tables/fetchServices",
  async () => {
    const response = await axios.get(`http://localhost:3001/services/`);
    return response.data;
  }
);
export const fetchState = createAsyncThunk("tables/fetchState", async () => {
  const response = await axios.get(`http://localhost:3001/state/`);
  return response.data;
});

// slice

const tablesSlice = createSlice({
  name: "tables",
  initialState: {
    category: [],
    condition: [],
    country: [],
    garden: [],
    services: [],
    state: [],
    loading: false,
    error: null,
  } as TablesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar las categorias";
    });
    builder.addCase(fetchCondition.fulfilled, (state, action) => {
      state.condition = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCondition.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCondition.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar las condiciones";
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.country = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCountry.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar los paises";
    });
    builder.addCase(fetchState.fulfilled, (state, action) => {
      state.state = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchState.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchState.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar las provincias";
    });
    builder.addCase(fetchGarden.fulfilled, (state, action) => {
      state.garden = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchGarden.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGarden.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar los tipos de patio";
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.services = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchServices.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo cargar los servicios";
    });
  },
});

export const { actions: tablesActions, reducer: tablesReducer } = tablesSlice;
