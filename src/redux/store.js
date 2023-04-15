import { configureStore } from "@reduxjs/toolkit";
import { treeSlice } from "./slices";

export const store = configureStore({
  reducer: {
    tree: treeSlice,
  }
})