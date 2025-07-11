// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "@/features/admin/adminSlice";
import courseReducer from "@/features/admin/courseSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    courses: courseReducer,
  },
});
