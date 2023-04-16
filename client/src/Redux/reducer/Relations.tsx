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
  Price: boolean;
  Zone: boolean;
  loading: boolean;
  error: string | null;
}

// Acciones asincronicas para crear relaciones
export const createPropertyCondition = createAsyncThunk(
  "relations/createPropertyCondition",
  async (propertyCondition: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertycondition",
      propertyCondition
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const modifyPropertyCondition = createAsyncThunk(
  "relations/modifyPropertyCondition",
  async (propertyCondition: any) => {
    const response = await axios.put(
      "http://localhost:3001/propertyCondition",
      propertyCondition
    );
    return response.data;
  }
);

export const createPropertyCategory = createAsyncThunk(
  "relations/createPropertyCategory",
  async (propertyCategory: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyCategory",
      propertyCategory
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const modifyPropertyCategory = createAsyncThunk(
  "relations/modifyPropertCategory",
  async (propertCategory: any) => {
    const response = await axios.put(
      "http://localhost:3001/propertycategory",
      propertCategory
    );
    return response.data;
  }
);

export const createPropertyCountry = createAsyncThunk(
  "relations/createPropertyCountry",
  async (propertyCountry: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertycountry",
      propertyCountry
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const modifyPropertyCountry = createAsyncThunk(
  "relations/modifyPropertyCountry",
  async (propertyCountry: any) => {
    const response = await axios.put(
      "http://localhost:3001/propertycountry",
      propertyCountry
    );
    return response.data;
  }
);

export const createPropertyGarden = createAsyncThunk(
  "relations/createPropertyGarden",
  async (propertyGarden: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertygarden",
      propertyGarden
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const modifyPropertyGarden = createAsyncThunk(
  "relations/createPropertyGarden",
  async (propertyGarden: any) => {
    const response = await axios.put(
      "http://localhost:3001/propertygarden",
      propertyGarden
    );
    return response.data;
  }
);

export const createPropertyImage = createAsyncThunk(
  "relations/createPropertyImage",
  async (propertyImage: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyimage",
      propertyImage
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const modifyPropertyImage = createAsyncThunk(
  "relations/modifyPropertyImage",
  async (propertyImage: any) => {
    const response = await axios.put(
      "http://localhost:3001/propertyimage",
      propertyImage
    );
    return response.data;
  }
);

export const createPropertyServices = createAsyncThunk(
  "relations/createPropertyServices",
  async (propertyServices: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertyservices",
      propertyServices
      // id propiedas y el id de la condicion 3
    );
    return response.data;
  }
);

export const modifyPropertyServices = createAsyncThunk(
  "relations/modifyPropertyServices",
  async (propertyServices: any) => {
    const response = await axios.put(
      "http://localhost:3001/propertyservices",
      propertyServices
    );
    return response.data;
  }
);

export const createPropertyState = createAsyncThunk(
  "relations/createPropertyState",
  async (propertyState: any) => {
    const response = await axios.post(
      "http://localhost:3001/propertystate",
      propertyState
    );
    return response.data;
  }
);

export const modifyPropertyState = createAsyncThunk(
  "relations/modifyPropertyState",
  async (propertyState: any) => {
    const response = await axios.put(
      "http://localhost:3001/propertystate",
      propertyState
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
    Price: false,
    Zone: false,
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
    builder.addCase(modifyPropertyCondition.fulfilled, (state, action) => {
      state.PropertyCondition = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(modifyPropertyCondition.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyPropertyCondition.rejected, (state, action) => {
      state.PropertyCondition = false;
      state.loading = false;
      state.error = "Could not modify the condition of the property";
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
    builder.addCase(modifyPropertyCategory.fulfilled, (state, action) => {
      state.PropertyCategory = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(modifyPropertyCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyPropertyCategory.rejected, (state, action) => {
      state.PropertyCategory = false;
      state.loading = false;
      state.error = "Could not modify the category of the property";
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
    builder.addCase(modifyPropertyCountry.fulfilled, (state, action) => {
      state.PropertyCountry = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(modifyPropertyCountry.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyPropertyCountry.rejected, (state, action) => {
      state.PropertyCountry = false;
      state.loading = false;
      state.error = "Could not modify the country of the property";
    });

    builder.addCase(createPropertyGarden.fulfilled, (state, action) => {
      state.PropertyGarden = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createPropertyGarden.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPropertyGarden.rejected, (state, action) => {
      state.PropertyGarden = false;
      state.loading = false;
      state.error = "Cago tu PropertyGarden";
    });
    builder.addCase(modifyPropertyGarden.fulfilled, (state, action) => {
      state.PropertyGarden = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(modifyPropertyGarden.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyPropertyGarden.rejected, (state, action) => {
      state.PropertyGarden = false;
      state.loading = false;
      state.error = "Could not modify the garden of the property";
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
    builder.addCase(modifyPropertyImage.fulfilled, (state, action) => {
      state.PropertyImage = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(modifyPropertyImage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyPropertyImage.rejected, (state, action) => {
      state.PropertyImage = false;
      state.loading = false;
      state.error = "Could not modify the image of the property";
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
    builder.addCase(modifyPropertyServices.fulfilled, (state, action) => {
      state.PropertyServices = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(modifyPropertyServices.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyPropertyServices.rejected, (state, action) => {
      state.PropertyServices = false;
      state.loading = false;
      state.error = "Could not modify the services of the property";
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
    builder.addCase(modifyPropertyState.fulfilled, (state, action) => {
      state.PropertyState = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(modifyPropertyState.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyPropertyState.rejected, (state, action) => {
      state.PropertyState = false;
      state.loading = false;
      state.error = "Could not modify the state of the property";
    });
  },
});

export const { actions: RelationsActions, reducer: relationsReducer } =
  RelationsSlice;
