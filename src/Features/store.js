// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "@/Features/admin/adminSlice";
import courseReducer from "@/Features/admin/courseSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    courses: courseReducer,
  },
});
