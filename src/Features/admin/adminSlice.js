// src/features/admin/adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("adminToken") || null;
const initialEmail = localStorage.getItem("adminEmail") || null;

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: initialToken,
    email: initialEmail,
    isAuthenticated: !!initialToken,
  },
  reducers: {
    loginAdmin: (state, action) => {
      const { token, email } = action.payload;
      state.token = token;
      state.email = email;
      state.isAuthenticated = true;

      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminEmail", email);
    },
    logoutAdmin: (state) => {
      state.token = null;
      state.email = null;
      state.isAuthenticated = false;

      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminEmail");
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
