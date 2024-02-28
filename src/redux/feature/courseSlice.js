import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  info: null,
  chapter: null,
  lesson: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateID: (state, action) => {
      state.id = action.payload;
    },

    addInfo: (state, action) => {
      state.info = action.payload;
    },

    addChapter: (state, action) => {
      state.chapter = action.payload;
    },

    addLesson: (state, action) => {
      state.lesson = action.payload;
    },
    removeCourse: () => {
      return initialState;
    },
  },
});

export const { addInfo, addChapter, addLesson, updateID, removeCourse } =
  courseSlice.actions;

export default courseSlice.reducer;
