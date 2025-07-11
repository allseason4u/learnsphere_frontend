import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/courses";

export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const createCourse = createAsyncThunk(
  "courses/create",
  async (course) => {
    const res = await axios.post(API_URL, course);
    return res.data;
  }
);

export const updateCourse = createAsyncThunk(
  "courses/update",
  async ({ id, data }) => {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
  }
);

export const deleteCourse = createAsyncThunk("courses/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.data.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.data = state.data.filter((c) => c._id !== action.payload);
      });
  },
});

export default courseSlice.reducer;
