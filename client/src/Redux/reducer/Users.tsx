import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Users from "../../Interfaces/Users";

export interface UsersState {
  users: Users[];
  usersDetail: Users[];
  loading: boolean;
  error: string | null;
}

// crea una accion asuncrona de reduzx con createAsyncThunk
// TODOS LOS USUARIOS
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers", // nombre de la accion
  async () => {
    const response = await axios.get("http://localhost:3001/users");
    return response.data;
  }
);

// USUARIO POR ID
export const fetchUsersId = createAsyncThunk(
  "users/fetchUsersId", // nombre de la accion
  async (id: any) => {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    return response.data;
  }
);

// USUARIO POR EMAIL

export const fetchUsersEmail = createAsyncThunk(
  "user/fetchUsersEmail",
  async (email: any) => {
    const response = await axios.get(
      `http://localhost:3001/users/email?email=${email}`
    );
    return response.data;
  }
);

// CREAR UN USUARIO
export const createUsuario = createAsyncThunk(
  "users/createUsers",
  async (newUser: any) => {
    const response = await axios.post(`http://localhost:3001/users`, newUser);
    return response.data;
  }
);

// MODIFICA LA WISHLIST
export const modifyWishList = createAsyncThunk(
  "users/modifyWishList",
  async (wishList: any) => {
    const response = await axios.put(
      "http://localhost:3001/users/wishlist",
      wishList
    );
    return response.data;
  }
);

export const deleteWishList = createAsyncThunk(
  "users/deleteWishList",
  async (wishListDelete: any) => {
    const response = await axios.delete(
      "http://localhost:3001/users/wishlist",
      wishListDelete
    );
    return response.data;
  }
);

// defino los slice del redux que manejaran el estado de los usuarios
// NO ME CONVENCEN LAS DE LA WISHLIST
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    usersDetail: [],
    loading: false,
    error: null,
  } as UsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = "no se pudieron cargar los usuarios";
    });
    builder.addCase(fetchUsersId.fulfilled, (state, action) => {
      state.usersDetail = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchUsersId.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersId.rejected, (state, action) => {
      state.loading = false;
      state.error = "no se pudo cargar el usuario en cuestion";
    });
    builder.addCase(fetchUsersEmail.fulfilled, (state, action) => {
      state.usersDetail = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchUsersEmail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = "no se pudo cargar el usuario en cuestion";
    });
    builder.addCase(createUsuario.fulfilled, (state, action) => {
      state.users.push(action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createUsuario.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUsuario.rejected, (state, action) => {
      state.loading = false;
      state.error = "no se pudo crear el usuario";
    });
    builder.addCase(modifyWishList.fulfilled, (state, action) => {
      const modifiedUserIndex = state.users.findIndex(
        (user) => user.id === action.payload.userId
      );
      if (modifiedUserIndex !== -1) {
        state.users[modifiedUserIndex].wishList = action.payload.wishList;
        state.loading = false;
        state.error = null;
      }
    });
    builder.addCase(modifyWishList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(modifyWishList.rejected, (state, action) => {
      state.loading = false;
      state.error = "no se pudo modificar la wishlist";
    });
    builder.addCase(deleteWishList.fulfilled, (state, action) => {
      const modifiedUserIndex = state.users.findIndex(
        (user) => user.id === action.payload.userId
      );
      if (modifiedUserIndex !== -1) {
        state.users[modifiedUserIndex].wishList = action.payload.wishList;
        state.loading = false;
        state.error = null;
      }
    });
    builder.addCase(deleteWishList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteWishList.rejected, (state, action) => {
      state.loading = false;
      state.error = "no se pudo borrar la wishlist";
    });
  },
});

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
