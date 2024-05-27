import { createSlice } from "@reduxjs/toolkit";

export const textsSlice = createSlice({
  name: "texts",
  initialState: () =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : [],
  reducers: {
    onAddText: (state, action) => {
      const newAddText = {
        text: action.payload,
      };
      state.push(newAddText);
    },
  },
});

export const { onAddText } = textsSlice.actions;
