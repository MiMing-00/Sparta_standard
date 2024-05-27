import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { textsSlice } from "../slices/textsSlice";

const store = configureStore({
  reducer: {
    texts: textsSlice.reducer,
  },
});

export default store;
