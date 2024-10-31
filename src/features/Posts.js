import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

const editId = "";

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData, value2: editId },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    deletePost: (state, action) => {
      console.log(action);
      console.log(state.value);
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
    postPost: (state, action) => {
      state.value[action.payload.id].id = action.payload.id;
      state.value2 = action.payload.id;
      console.log(action);
      console.log(state.value);
    },
    editPost: (state, action) => {
      // state.value = action.payload.id;
      state.value[action.payload.id].id = action.payload.id;
      state.value[action.payload.id].date = action.payload.date;
      state.value[action.payload.id].name = action.payload.name;
      state.value[action.payload.id].content = action.payload.content;
      console.log("id" + action.payload.id);
    },
  },
});

export const { addPost, deletePost, editPost, postPost } = postSlice.actions;
export default postSlice.reducer;
