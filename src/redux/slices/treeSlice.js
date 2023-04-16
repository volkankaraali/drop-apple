import { createSlice, current } from "@reduxjs/toolkit";


// utils
import getBranches from "@/utils/getBranches";
import getRandomDropApples from "@/utils/getRandomDropApples";

const initialState = {
  branches: getBranches(),
  basket: 0,
  droppedApple: 0,
}

export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    handleDroppedApple: (state, action) => {
      const { branchesLeftOnTheTree, totalDroppedApple } = getRandomDropApples(current(state.branches));
      state.branches = branchesLeftOnTheTree;
      state.droppedApple = totalDroppedApple;
      state.basket += totalDroppedApple;
    },
    newTree: (state, action) => { state.branches = getBranches(); }
  },

})

export const { handleDroppedApple, newTree } = treeSlice.actions;

export default treeSlice.reducer;