import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOPen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOPen = !state.isMenuOPen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
