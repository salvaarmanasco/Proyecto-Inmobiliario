import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  isLoading: boolean;
}

const initialState: SettingsState = {
  isLoading: false,
};

const settingsSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = settingsSlice.actions;

export default settingsSlice.reducer;
