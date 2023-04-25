import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Image {
  id: number;
  image_url: string;
  image_description: string;
}

interface ImageState {
  images: Image[];
  loading: boolean;
  error: string | null;
}
// CREAR UNA IMAGEN
export const createImage = createAsyncThunk(
  "image/createImage",
  async (newImage: any) => {
    const response = await axios.post(`http://localhost:3001/image`, newImage);
    return response.data;
  }
);

// export const deleteImage = createAsyncThunk(
//   "image/deleteImage",
//   async (deleteImage: any) => {
//     const response = await axios.delete(
//       `http://localhost:3001/image`,
//       deleteImage
//     );
//     return response.data;
//   }
// );

export const deleteImage = createAsyncThunk(
  "image/deleteImage",
  async (id: number) => {
    const response = await axios.delete(`http://localhost:3001/image?id=${id}`);
    return response.data;
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: [],
    loading: false,
    error: null,
  } as ImageState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createImage.fulfilled, (state, action) => {
      state.images.push(action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createImage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createImage.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudieron cargar las imágenes";
    });
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteImage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteImage.rejected, (state, action) => {
      state.loading = false;
      state.error = "No se pudo borrar la imagen";
    });
  },
});

export const { actions: imageActions, reducer: imageReducer } = imageSlice;
