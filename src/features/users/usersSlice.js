import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Dude Lebowski",
  },
  {
    id: "2",
    name: "Neil Young",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// const export  {} = usersSlice.actions

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
