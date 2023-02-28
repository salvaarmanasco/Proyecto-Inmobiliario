import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Property {
  id: string;
  antiquity: number;
  address: string;
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
  deleted: boolean;
}

interface PropertyState {
  allProperties: Property[];
}

const initialState: PropertyState = {
  allProperties: [],
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    getProperties: (state, action: PayloadAction<Property>) => {
      state.allProperties.push(action.payload);
    },
  },
});

export const { getProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;
