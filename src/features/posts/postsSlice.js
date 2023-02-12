import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "I'have heard goog things about redux!",
  },
  {
    id: 2,
    title: "Slices",
    content: "The more I say slice, the more it gets interesting!",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, content }) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
