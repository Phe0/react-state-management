import { Name } from "@/types/Name";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Name = {
  firstName: "",
  lastName: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<Name>) => {
      return action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
