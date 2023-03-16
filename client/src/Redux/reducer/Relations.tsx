import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface RelationsState {
  PropertyCategory: boolean;
  PropertyCondition: boolean;
  PropertyCountry: boolean;
  PropertyGarden: boolean;
  PropertyImage: boolean;
  PropertyPrice: boolean;
  PropertyServices: boolean;
  PropertyState: boolean;
  PropertyZone: boolean;
  loading: boolean;
  error: string | null;
}

// Acciones asincronicas para crear relaciones
export const createPropertyCondition = createAsyncThunk(
  "relations/createPropertyCondition",
  async (properyCondition: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertycondition",
      properyCondition
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyCategory = createAsyncThunk(
  "relations/createPropertyCategory",
  async (properyCategory: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyCategory",
      properyCategory
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyCountry = createAsyncThunk(
  "relations/createPropertyCountry",
  async (properyCountry: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertycountry",
      properyCountry
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyGarden = createAsyncThunk(
  "relations/createPropertyGarden",
  async (properyGarden: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertygarden",
      properyGarden
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyImage = createAsyncThunk(
  "relations/createPropertyImage",
  async (properyImage: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyimage",
      properyImage
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyPrice = createAsyncThunk(
  "relations/createPropertyPrice",
  async (properyPrice: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyprice",
      properyPrice
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyServices = createAsyncThunk(
  "relations/createPropertyServices",
  async (properyServices: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyservices",
      properyServices
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyState = createAsyncThunk(
  "relations/createPropertyState",
  async (properyState: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertystate",
      properyState
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const createPropertyZone = createAsyncThunk(
  "relations/createPropertyZone",
  async (properyZone: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyzone",
      properyZone
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

//slice

const RelationsSlice = createSlice({
  name: "relations",
  initialState: {
    PropertyCategory: false,
    PropertyCondition: false,
    PropertyCountry: false,
    PropertyGarden: false,
    PropertyImage: false,
    PropertyPrice: false,
    PropertyServices: false,
    PropertyState: false,
    PropertyZone: false,
    loading: false,
    error: null,
  } as RelationsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPropertyCondition.fulfilled, (state, action) => {
      state.PropertyCondition = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyCondition.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyCondition.rejected, (state, action) => {
      state.PropertyCondition = false;
      state.loading = false;
      state.error = "Cago tu PropertyCondition";
    });
    builder.addCase(createPropertyCategory.fulfilled, (state, action) => {
      state.PropertyCategory = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyCategory.rejected, (state, action) => {
      state.PropertyCategory = false;
      state.loading = false;
      state.error = "Cago tu PropertyCategory";
    });
    builder.addCase(createPropertyCountry.fulfilled, (state, action) => {
      state.PropertyCountry = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyCountry.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyCountry.rejected, (state, action) => {
      state.PropertyCountry = false;
      state.loading = false;
      state.error = "Cago tu PropertyCountry";
    });
    builder.addCase(createPropertyImage.fulfilled, (state, action) => {
      state.PropertyImage = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyImage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyImage.rejected, (state, action) => {
      state.PropertyImage = false;
      state.loading = false;
      state.error = "Cago tu PropertyImage";
    });
    builder.addCase(createPropertyPrice.fulfilled, (state, action) => {
      state.PropertyPrice = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyPrice.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyPrice.rejected, (state, action) => {
      state.PropertyPrice = false;
      state.loading = false;
      state.error = "Cago tu PropertyPrice";
    });
    builder.addCase(createPropertyServices.fulfilled, (state, action) => {
      state.PropertyServices = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyServices.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyServices.rejected, (state, action) => {
      state.PropertyServices = false;
      state.loading = false;
      state.error = "Cago tu PropertyServices";
    });
    builder.addCase(createPropertyState.fulfilled, (state, action) => {
      state.PropertyState = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyState.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyState.rejected, (state, action) => {
      state.PropertyState = false;
      state.loading = false;
      state.error = "Cago tu PropertyState";
    });
    builder.addCase(createPropertyZone.fulfilled, (state, action) => {
      state.PropertyZone = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyZone.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyZone.rejected, (state, action) => {
      state.PropertyZone = false;
      state.loading = false;
      state.error = "Cago tu PropertyZone";
    });
  },
});

export const { actions: RelationsActions, reducer: relationsReducer } =
  RelationsSlice;
