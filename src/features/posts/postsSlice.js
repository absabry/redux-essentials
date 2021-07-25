import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: [
        { id: '1', title: 'First Post!', content: 'Hello!' },
        { id: '2', title: 'Second Post', content: 'More text' }
    ],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
